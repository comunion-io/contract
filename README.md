#  comunion-dao

Comunion 合约 及 node.js SDK



## 一、合约介绍：

### 1. Daos

存储所有创建的组织，并可验证某名称或者地址是否已经注册到Daos, comunion的其他合约都依赖此合约需要最先发布

### Organization

组织合约，每创建一个组织就有一个对应的 Organization 合约； 提供添加删除核心成员，设置成员角色等功能。

### 2. OrgToken

组织 Token



## 二、SDK安装、 初始化

``` bash
npm install comunion-dao
```

``` typescript
import { EthUtils, Daos, Organization, OrgToken } from 'comunion-dao'

// rpcHost: 以太坊rpc请求地址
let ethUtils = new EthUtils(rpcHost)
```



## 三、Daos 发布

手动发布即可 (Daos.sol)  
现在已经发布了一个用于测试  
ropsten： 0x7284C823ea3AD29bEDfd09Ede1107981E9519896  


### 1. 验证某组织是否已注册
``` typescript
// daosAddress: Daos合约地址
let daos = new Daos(ethUtils, daosAddress)

// 验证某地址 address 是否已经注册
let addressRegistered = (await daos.addressIndex(address)) > 0

// 验证某名字 name 是否已经注册
let nameRegistered = (await daos.nameIndex(name)) > 0
```



## 四、组织相关操作

文档只只列出了部分方法，api中有全量方法，可以参考类Organization.

### 1. 发布组织

``` typescript
// daosAddress: Daos 合约地址,  orgName: 组织名称
let deployData = Organization.genDeployData(daosAddress, orgName)

// 调起metamask
var tx = {
    value: '0',
    data: deployData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('deploy organization hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```

### 2. 实例化组织对象
``` typescript
let org = new Organization(ethUtils, orgContractAddress)
```


### 3. 设置token地址 (只能操作一次)

只有组织创建者才有权限，合约内有权限验证.  
通过comunion平台发布token时，token合约会自动调用此方法，不需要再单独调用

``` typescript
let setTokenData = await org.genSetTokenData(tokenAddress)

// 调起metamask
var tx = {
    value: '0',
    to: orgAddress, // 组织合约地址
    data: setTokenData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('set token hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```


### 4. 添加并设置成员角色 (可批量)
如果成员已经存在即修改成员角色； 只有组织创建者才有权限，合约内有权限验证

``` typescript
// role 字符串长度不能超过32字节
let role1 = ethUtils.web3.utils.fromUtf8("R1")
let role2 = ethUtils.web3.utils.fromUtf8("R2")
// members 与 roles 按顺序一一对应
let members = [addr1, addr2, addr3]
let roles = [role1, role1, role2]
let setMembersData = await org.genAddOrUpdateMembersData(members, roles)

// 调起metamask
var tx = {
    value: '0',
    to: orgAddress, // 组织合约地址
    data: setMembersData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('set members hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```

### 5. 删除成员(可批量)

只有组织创建者才有权限，合约内有权限验证

``` typescript
let members = [addr1, addr2]
let removeMembersData = await org.genRemoveMembersData(members)

// 调起metamask
var tx = {
    value: '0',
    to: orgAddress, // 组织合约地址
    data: removeMembersData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('remove members hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```


## 五、OrgToken 相关

文档只只列出了部分重要方法，api中有全量方法，可以参考类OrgToken.

### 1. 发布Token

``` typescript
// orgAddress: 组织合约地址,  name: 名称,  symbol: 简称, totalSupply: 初始发行量(单位wei, 数值应该为 发行个数 * 10^decimals, 从平台发布的token decimals默认为18)
let deployData = OrgToken.genDeployData(orgAddress, name, symbol, totalSupply)

// 调起metamask
var tx = {
    value: '0',
    data: deployData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('deploy token hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```

### 2. 实例化OrgToken对象
``` typescript
let token = new OrgToken(ethUtils, orgTokenAddress)
```

### 3. 批量额度授权 (授权及添加子账户)

``` typescript
// 需要授权的账号列表
let spenders = [addr1, addr2, addr3]
// 授权金额 (单位为wei, 取值应该是 数量 * 10^decimals, 从平台发布的token decimals默认为18)
let values = ['10000000000000', '20000000000000', '30000000000000']
// spenders 与 values 需要按顺序一一对应
let approveData = await token.genApproveExtData(spenders, values)

// 调起metamask
var tx = {
    value: '0',
    to: orgTokenAddress, // OrgToken合约地址
    data: approveData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('approveExt hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```

### 4. 批量转账

``` typescript
// 需要转账的账号列表
let accounts = [addr1, addr2, addr3]
// 需要转账的金额 (单位为wei, 取值应该是 数量 * 10^decimals, 从平台发布的token decimals默认为18)
let amounts = ['10000000000000', '20000000000000', '30000000000000']
// accounts 与 amounts 需要按顺序一一对应
let tansferData = await token.genTransferExtData(accounts, ammounts)

// 调起metamask
var tx = {
    value: '0',
    to: orgTokenAddress, // OrgToken合约地址
    data: tansferData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('transferExt hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```

## 六、其他

- 查询交易状态
``` typescript
// 查询交易结果 result.status 为 true 表示交易成功， result.contractAddress 为 发布的合约地址
let result = await ethUtils.getTransactionReceipt(txhash)

// 查询交易区块确认数
let count = await ethUtils.getConfirmCount(txhash)
```