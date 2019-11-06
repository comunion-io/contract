// import * as fs from 'fs'
// import * as path from 'path'
// import solc from 'solc'
import Web3 from 'web3'


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
    static addHexHeader(hex: string): string {
        if (!hex.toLowerCase().startsWith('0x')) {
            hex = '0x' + hex
        }
        return hex
    }
}


class EthUtils {

    static localWeb3 = new Web3(null)

    static genDeployDataWithByteCode(abi: any, byteCode: string, args: any[]): string {
        var c = new EthUtils.localWeb3.eth.Contract(abi)
        return c.deploy({ data: Utils.addHexHeader(byteCode), arguments: args }).encodeABI()
    }

    static genCallData(abi: any, method: string, args: any[]): string {
        var c = new EthUtils.localWeb3.eth.Contract(abi)
        let f = Reflect.get(c.methods, method)
        return Reflect.apply(f, c.methods, args).encodeABI()
    }


    chainId: number = null
    web3: Web3
    rpcHost: string

    constructor(rpcHost: string) {
        this.rpcHost = rpcHost
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.rpcHost))
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
            gasPrice: '1500000000',
            gas: 8000000,
            chainId: await this.getChainId()
        })
    }

    async signData(account: any, to: string, value: string, data: string): Promise<string> {
        if (!value) {
            value = '0'
        }
        let self = this
        var rawTx = {
            nonce: await this.web3.eth.getTransactionCount(account.address),
            from: account.address,
            value: value,
            gasPrice: '1500000000',
            gas: 8000000,
            chainId: await this.getChainId()
        }
        if (to) {
            rawTx['to'] = to
        }
        if (data) {
            rawTx['data'] = Utils.addHexHeader(data)
        }
        let d = await self.web3.eth.accounts.signTransaction(rawTx, account.privateKey)
        return d.rawTransaction
    }

    async signAndSend(account: any, to: string, value: string, data: string): Promise<any> {
        let d = await this.signData(account, to, value, data);
        return await this.sendTransaction(d)
    }

    async sendTransaction(signData: string): Promise<any> {
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

    async getChainId():Promise<number> {
        if (this.chainId == null) {
            this.chainId = await this.web3.eth.getChainId()
        }
        return this.chainId
    }

}


export default EthUtils
