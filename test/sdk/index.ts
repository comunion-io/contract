import fs from 'fs'
import path from 'path'
import Utils from './utils/utils'
import { EthUtils, AbiManager, Daos, Organization, OrgToken } from '../../src/index'


// let ethUtils = new EthUtils('https://mainnet.infura.io/v3/c7b8db2eba154ed6a4b4689f0c516241', '1')
let ethUtils = new EthUtils('https://ropsten.infura.io/v3/c7b8db2eba154ed6a4b4689f0c516241')

let account = ethUtils.web3.eth.accounts.privateKeyToAccount('0x0ba29b28d1753ea0e6740d9451a94df75dbd84af6bdbebc0f0236cccae4f5c01')


async function printHashState(txhash: string) {
    Utils.printLine('printHashState')
    console.log('blockNumber:', await ethUtils.getBlockNumber())
    console.log('confirm count:', await ethUtils.getConfirmCount(txhash))
    console.log('r:', JSON.stringify(await ethUtils.getTransactionReceipt(txhash)))
}


async function deployDaos() {
    let data = Daos.genDeployData()
    let r = await ethUtils.signAndSend(account, null, '0', data)
    console.log('daos deploy result:\n' + JSON.stringify(r, null, 2))
}

async function deployOrg(daosAddress: string) {
    let data = Organization.genDeployData(daosAddress, 'my organization')
    let r = await ethUtils.signAndSend(account, null, '0', data)
    console.log('organization deploy result:\n' + JSON.stringify(r, null, 2))
}

async function deployToken(orgAddress: string) {
    let data = OrgToken.genDeployData(orgAddress, 'my token', 'MT', '100000000000000000000')
    let r = await ethUtils.signAndSend(account, null, '0', data)
    console.log('token deploy result:\n' + JSON.stringify(r, null, 2))
}

async function setMember(orgAddress: string, member: string, role: string) {
    let org = new Organization(ethUtils, orgAddress)
    let data = await org.genAddOrUpdateMembersData([member], [ethUtils.web3.utils.fromUtf8(role)])
    let r = await ethUtils.signAndSend(account, null, '0', data)
    console.log('set member result:', JSON.stringify(r, null, 2))
}

async function main() {

    await deployDaos()
    // console.log(await daos.nameIndex('MyOrg1'))

    // console.log(ethUtils.web3.utils.hexToAscii(await org.getRole('0x7a3e6557ec2b49814115b33362025230ca326a7b')))

}

main()
