import * as fs from 'fs'
import * as path from 'path'
import * as solc from 'solc'
import * as Web3 from 'web3'


class CompileResult {
    output: any
    abi: any
    byteCode: string
}


class TxResult {
    hash: string
    data: any
}


class DeployResult {
    address: string
    compileResult: CompileResult
    txResult: TxResult
}


class Utils {
    static nodeModulesPath(sourceDir: string): string {
        if (!sourceDir || sourceDir.length <= 1) {
            return null
        }
        let p = path.join(path.dirname(sourceDir), 'node_modules')
        if (fs.existsSync(p)) {
            return p
        } else {
            return this.nodeModulesPath(path.dirname(sourceDir))
        }
    }

    static getImportPath(sourcePath: string, importPath: string) {
        let filePath = null
        if (importPath.startsWith('openzeppelin-solidity')) {
            if (!sourcePath) {
                sourcePath = __filename
            }
            filePath = path.join(this.nodeModulesPath(path.dirname(sourcePath)), importPath)
        } else {
            filePath = path.resolve(sourcePath, importPath)
        }
        return filePath
    }

    static addHexHeader(hex: string): string {
        if (!hex.toLowerCase().startsWith('0x')) {
            hex = '0x' + hex
        }
        return hex
    }
}

class EthUtils {

    static localWeb3 = new Web3()

    private static findImports(importPath: string, sourcePath: string) {
        try {
            let filePath = Utils.getImportPath(sourcePath, importPath)
            if (!filePath) {
                return { error: 'not found.' }
            } else {
                return { contents: fs.readFileSync(filePath).toString() }
            }
        } catch (e) {
            return { error: e.message }
        }
    }

    private static getSources(filePath: string, r = {}) {
        let name = path.basename(filePath)
        let dir = path.dirname(filePath)

        let lines = String(fs.readFileSync(filePath)).split('\n')
        lines.forEach(line => {
            if (line.match(/^import.*?"(.*)"/)) {
                let p = Utils.getImportPath(filePath, RegExp.$1)
                this.getSources(p, r)
            }
        })

        r[name] = {
            urls: [filePath]
        }
        return r
    }

    static compileFile(filePath: string, contractName: string = null): CompileResult {
        var input = {
            language: 'Solidity',
            sources: this.getSources(filePath),
            settings: {
                outputSelection: {
                    '*': {
                        '*': ['*']
                    }
                }
            }
        }
        const output = JSON.parse(solc.compile(JSON.stringify(input), this.findImports))
        if (output.errors) {
            throw output.errors;
        }

        let fname = path.basename(filePath)
        if (!contractName) {
            contractName = Object.keys(output['contracts'][fname])[0]
        }
        const t = output['contracts'][fname][contractName]
        const abi = t['abi']
        const byteCode = t['evm']['bytecode']['object']
        return {
            output: output,
            abi: abi,
            byteCode: byteCode
        }

    }

    static genDeployData(filePath: string, contractName: string, args: any[]): string {
        let d = EthUtils.compileFile(filePath, contractName)
        let c = new EthUtils.localWeb3.eth.Contract(d.abi)
        return c.deploy({ data: Utils.addHexHeader(d.byteCode), arguments: args }).encodeABI()
    }

    static genDeployDataWithByteCode(abi: any, byteCode: string, args: any[]): string {
        var c = new EthUtils.localWeb3.eth.Contract(abi)
        return c.deploy({ data: Utils.addHexHeader(byteCode), arguments: args }).encodeABI()
    }

    static genCallData(abi: any, method: string, args: any[]): string {
        var c = new EthUtils.localWeb3.eth.Contract(abi)
        let f = Reflect.get(c.methods, method)
        return Reflect.apply(f, c.methods, args).encodeABI()
    }


    chainId: string
    web3: Web3
    rpcHost: string

    constructor(rpcHost: string, chainId: string) {
        this.chainId = chainId
        this.rpcHost = rpcHost
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.rpcHost))
    }

    async deployFile(account: any, filePath: string, contractName: string, args: any[]): Promise<DeployResult> {
        let d = EthUtils.compileFile(filePath, contractName)
        let c = new this.web3.eth.Contract(d.abi)
        let data = c.deploy({ data: Utils.addHexHeader(d.byteCode), arguments: args }).encodeABI()
        let sData = await this.signData(account, null, '0', data)
        let txResult = await this.sendTransaction(sData)
        let r = new DeployResult()
        r.compileResult = d
        r.txResult = txResult
        r.address = txResult['contractAddress']
        return r
    }

    async deployByteCode(abi: any, byteCode: string, account: any, contractAddress: string, args: any[]): Promise<any> {
        var c = new EthUtils.localWeb3.eth.Contract(abi, contractAddress)
        let data = c.deploy({ data: Utils.addHexHeader(byteCode), arguments: args }).encodeABI()
        let sData = await this.signData(account, contractAddress, '0', data)
        return await this.sendTransaction(sData)
    }

    async sendCall(abi: any, contractAddress: string, account, value: string, method: string, args: any[]): Promise<any> {
        var c = new this.web3.eth.Contract(abi, contractAddress)
        let f = Reflect.get(c.methods, method)
        let t = Reflect.apply(f, c.methods, args)
        let data = t.encodeABI()
        let sData = await this.signData(account, contractAddress, value, data)
        return await this.sendTransaction(sData)
    }

    async call(abi: any, contractAddress: string, from: string, value: string, method: string, args: any[]): Promise<any> {
        var c = new this.web3.eth.Contract(abi, contractAddress)
        let f = Reflect.get(c.methods, method)
        let t = Reflect.apply(f, c.methods, args)
        return await t.call({
            nonce: 0,
            from: from,
            value: value,
            gasPrice: '1000000000',
            gas: 400000,
            chainId: this.chainId
        })
    }

    async signData(account: any, to: string, value: string, data: string): Promise<string> {
        if (!value) {
            value = '0'
        }
        return new Promise((resolve) => {
            let self = this
            this.web3.eth.getTransactionCount(account.address, async function (error, result) {
                if (error) {
                    throw error;
                }
                var rawTx = {
                    nonce: result,
                    from: account.address,
                    value: value,
                    gasPrice: '1000000000',
                    gas: 400000,
                    chainId: this.chainId
                }
                if (to) {
                    rawTx['to'] = to
                }
                if (data) {
                    rawTx['data'] = Utils.addHexHeader(data)
                }
                let d = await self.web3.eth.accounts.signTransaction(rawTx, account.privateKey)
                resolve(d.rawTransaction)
            })
        })
    }

    async signAndSend(account: any, to: string, value: string, data: string): Promise<TxResult> {
        let d = await this.signData(account, to, value, data);
        return await this.sendTransaction(d)
    }

    async sendTransaction(signData: string): Promise<TxResult> {
        return await this.web3.eth.sendSignedTransaction(signData)
    }

    async getTransactionReceipt(txhash: string): Promise<any> {
        return await this.web3.eth.getTransactionReceipt(txhash)
    }

    async getBlockNumber(): Promise<number> {
        return await this.web3.eth.getBlockNumber()
    }

    async getConfirmCount(txHash: string): Promise<number> {
        let current = await this.getBlockNumber()
        let r = await this.getTransactionReceipt(txHash)
        return current - r.blockNumber
    }

    async getBalance(address) {
        return await this.web3.eth.getBalance(address)
    }

}


export default EthUtils
