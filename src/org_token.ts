import EthUtils from './utils/eth_utils'
import AbiManager from './utils/abi_manager'

class OrgToken {

    static genDeployData(args?: any[], version?: number) {
        if (!args) {
            args = []
        }
        let abiAndBytecode = AbiManager.getAbiAndBytecode('OrgToken', version)
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

    async genApproveData(spender: string, value: string) {
        return EthUtils.genCallData(await this._getAbi(), 'approve', [spender, value])
    }

    async totalSupply(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'totalSupply', [])
    }

    async genTransferFromData(sender: string, recipient: string, amount: string) {
        return EthUtils.genCallData(await this._getAbi(), 'transferFrom', [sender, recipient, amount])
    }

    async decimals(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'decimals', [])
    }

    async genIncreaseAllowanceData(spender: string, addedValue: string) {
        return EthUtils.genCallData(await this._getAbi(), 'increaseAllowance', [spender, addedValue])
    }

    async version(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'version', [])
    }

    async balanceOf(account: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'balanceOf', [account])
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

    async symbol(): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'symbol', [])
    }

    async genDecreaseAllowanceData(spender: string, subtractedValue: string) {
        return EthUtils.genCallData(await this._getAbi(), 'decreaseAllowance', [spender, subtractedValue])
    }

    async genTransferData(recipient: string, amount: string) {
        return EthUtils.genCallData(await this._getAbi(), 'transfer', [recipient, amount])
    }

    async allowance(owner: string, spender: string): Promise<any> {
        return await this._ethUtils.call(await this._getAbi(), this._contractAddress, this._contractAddress, '0', 'allowance', [owner, spender])
    }

    async genTransferOwnershipData(newOwner: string) {
        return EthUtils.genCallData(await this._getAbi(), 'transferOwnership', [newOwner])
    }

    async genMintData(_to: string, _amount: string) {
        return EthUtils.genCallData(await this._getAbi(), 'mint', [_to, _amount])
    }

    async genTransfersData(recipients: string[], amounts: string[]) {
        return EthUtils.genCallData(await this._getAbi(), 'transfers', [recipients, amounts])
    }


    private async _getAbi(): Promise<any> {
        let version = await this._getVersion()
        return AbiManager.getAbiAndBytecode('OrgToken', version).abi
    }

    private async _getVersion(): Promise<number> {
        if (this._version == null) {
            let abi = AbiManager.getAbiAndBytecode('Version').abi
            this._version = await this._ethUtils.call(abi, this._contractAddress, this._contractAddress, '0', 'version', [])
        }
        return this._version
    }
}


export default OrgToken
