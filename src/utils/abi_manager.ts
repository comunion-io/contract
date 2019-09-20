import * as fs from 'fs'
import * as path from 'path'
import * as Linq from 'linq'

class AbiAndByteCode {
    abi: string
    bytecode: string
}

class AbiManager {

    private static _cache: { [key: string]: { [key: number]: AbiAndByteCode; }; } = {}

    static getAbiAndBytecode(name: string, version?: number): AbiAndByteCode {
        if (!version) {
            version = this.lastVersion(name)
        }
        let r = this._getCache(name, version)
        if (!r) {
            let dir = path.join(__dirname, '../../release/contracts', name)
            let p = path.join(dir, `${version}.json`)
            if (!fs.existsSync(p)) {
                throw new Error(`${p} not found.`)
            }
            let json = JSON.parse(String(fs.readFileSync(p)))
            r = {
                abi: json.abi,
                bytecode: json.bytecode
            }
            this._setCache(name, version, r)
        }
        return r
    }

    static lastVersion(name: string): number {
        let dir = path.join(__dirname, '../../release/contracts', name)
        let vs = Linq.from(fs.readdirSync(dir))
            .select(p => {
                let n = path.basename(p)
                if (/^(\d+)\..+$/.test(n)) {
                    return parseInt(RegExp.$1)
                }
                return 0
            })
            .where(i => i != 0)
            .toArray().sort()
        return vs[vs.length - 1]
    }

    private static _getCache(name: string, version: number): AbiAndByteCode {
        if (this._cache[name] && this._cache[name][version]) {
            return this._cache[name][version]
        }
        return null
    }

    private static _setCache(name: string, version: number, abiAndByteCode: AbiAndByteCode) {
        let v = this._cache[name]
        if (!v) {
            v = {}
            v[version] = abiAndByteCode
        }
        this._cache[name] = v
    }
}

export default AbiManager
