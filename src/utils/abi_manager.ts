import abiData from './abi-data'

class AbiAndByteCode {
    abi: string
    bytecode: string
}

class AbiManager {

    static getAbiAndBytecode(name: string, version?: number): AbiAndByteCode {
        if (!version) {
            version = this.lastVersion(name)
        }
        let d = abiData[name][`${version}`]
        return {
            abi: d.abi,
            bytecode: d.bytecode
        }
    }

    static lastVersion(name: string): number {
        let vns = Object.keys(abiData[name])
        return parseInt(vns[vns.length-1])
    }
}

export default AbiManager
