import EthUtils from './utils/eth_utils'
import AbiManager from './utils/abi_manager'

class Organization {

    static genDeployData(args?: any[], version?: number) {
        if (!args) {
            args = []
        }
        let abiAndBytecode = AbiManager.getAbiAndBytecode('Organization', version)
        return EthUtils.genDeployDataWithByteCode(abiAndBytecode.abi, abiAndBytecode.bytecode, args)
    }

    private _ethUtils: EthUtils
    private _contractAddress: string
    private _version: number = null

    constructor(ethUtils: EthUtils, address: string) {
        this._ethUtils = ethUtils
        this._contractAddress = address
    }

    async name(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'name', [])
    }

    async members(arg0: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'members', [arg0])
    }

    async version(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'version', [])
    }

    async genRenounceOwnershipData() {
        return EthUtils.genCallData(await this._getAbi(), 'renounceOwnership', [])
    }

    async owner(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'owner', [])
    }

    async isOwner(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'isOwner', [])
    }

    async genTransferOwnershipData(newOwner: string) {
        return EthUtils.genCallData(await this._getAbi(), 'transferOwnership', [newOwner])
    }

    async token(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'token', [])
    }

    async genSetTokenData(_token: string) {
        return EthUtils.genCallData(await this._getAbi(), 'setToken', [_token])
    }

    async genAddOrUpdateMembersData(addresses: string[], roles: string[]) {
        return EthUtils.genCallData(await this._getAbi(), 'addOrUpdateMembers', [addresses, roles])
    }

    async genRemoveMemberData(_addr: string) {
        return EthUtils.genCallData(await this._getAbi(), 'removeMember', [_addr])
    }

    async getRole(_addr: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'getRole', [_addr])
    }


    private async _getAbi(): Promise<any> {
        let version = await this._getVersion()
        return AbiManager.getAbiAndBytecode('Organization', version).abi
    }

    private async _getVersion(): Promise<number> {
        if (this._version == null) {
            let abi = AbiManager.getAbiAndBytecode('Version').abi
            return await this._ethUtils.call(abi, this._contractAddress, this._contractAddress, '0', 'version', [])
        }
        return this._version
    }
}


export default Organization
