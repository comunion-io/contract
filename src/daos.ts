import EthUtils from './utils/eth_utils'
import AbiManager from './utils/abi_manager'

class Daos {

    static genDeployData(version?: number) {
        let abiAndBytecode = AbiManager.getAbiAndBytecode('Daos', version)
        return EthUtils.genDeployDataWithByteCode(abiAndBytecode.abi, abiAndBytecode.bytecode, [])
    }


    private _ethUtils: EthUtils
    private _contractAddress: string
    private _version: number = null

    constructor(ethUtils: EthUtils, address: string) {
        this._ethUtils = ethUtils
        this._contractAddress = address
    }


    async index(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'index', [])
    }

    async version(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'version', [])
    }

    async addressIndex(arg0: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'addressIndex', [arg0])
    }

    async daos(arg0: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'daos', [arg0])
    }

    async nameIndex(arg0: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'nameIndex', [arg0])
    }

    async genRegisterData(_addr: string, _name: string) {
        return EthUtils.genCallData(await this._getAbi(), 'register', [_addr, _name])
    }


    private async _getAbi(): Promise<any> {
        let version = await this._getVersion()
        return AbiManager.getAbiAndBytecode('Daos', version).abi
    }

    private async _getVersion(): Promise<number> {
        if (this._version == null) {
            let abi = AbiManager.getAbiAndBytecode('Version').abi
            this._version = await this._ethUtils.call(abi, this._contractAddress, this._contractAddress, '0', 'version', [])
        }
        return this._version
    }
}


export default Daos
