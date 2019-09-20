import * as fs from 'fs'
import * as path from 'path'
import * as Web3 from 'web3'
import Utils from './utils/utils'
import { EthUtils, AbiManager, Daos, Organization, OrgToken } from '../../src/index'


// let ethUtils = new EthUtils('https://mainnet.infura.io/v3/c7b8db2eba154ed6a4b4689f0c516241', '1')
let ethUtils = new EthUtils('https://ropsten.infura.io/v3/c7b8db2eba154ed6a4b4689f0c516241', '3')
// let ethUtils = new EthUtils(http://localhost:8545', '1')

// let account = ethUtils.web3.eth.accounts.privateKeyToAccount('0x0ba29b28d1753ea0e6740d9451a94df75dbd84af6bdbebc0f0236cccae4f5c01')
// let account = ethUtils.web3.eth.accounts.privateKeyToAccount('0x28c01c0acd545fe40ab4b920e5e42f273be72af2f5e25f983aa6fc5145971d30')
let daosAddress = '0x5AC87695F32a447C2D3E8b63B7495a2B5F671048'
let orgAddress = '0x7a3e6557ec2b49814115b33362025230ca326a7b'

async function printHashState(txhash: string) {
    Utils.printLine('printHashState')
    console.log('blockNumber:', await ethUtils.getBlockNumber())
    console.log('confirm count:', await ethUtils.getConfirmCount(txhash))
    console.log('r:', JSON.stringify(await ethUtils.getTransactionReceipt(txhash)))
}

async function main() {
    // let daosData = Daos.genDeployData([])
    // fs.writeFileSync(path.join(__dirname, 'd.txt'), daosData)

    // let daosData = Organization.genDeployData([daosAddress, 'MyOrg'])
    // fs.writeFileSync(path.join(__dirname, 'd.txt'), daosData)

    console.log(await ethUtils.getTransactionReceipt('0xbab5b1c388467c800179d5cd02e6bf4051b75b6f67b4ea71950aca94e51ca443'))

    // let daos = new Daos(ethUtils, daosAddress)
    // let d = await daos.genRegisterData(daosAddress, 'zero')
    // // let d = await daos.register(daosAddress, 'zero')
    // console.log('d:', d)

    // console.log(await daos.nameIndex('MyOrg1'))


    // let org = new Organization(ethUtils, orgAddress)
    // let memberData = await org.genAddOrUpdateMembersData(['0x7a3e6557ec2b49814115b33362025230ca326a7b'], [ethUtils.web3.utils.fromAscii("R0")])
    // console.log('member data:', memberData)

    // console.log(ethUtils.web3.utils.hexToAscii(await org.getRole('0x7a3e6557ec2b49814115b33362025230ca326a7b')))

}

main()
