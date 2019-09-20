#  comunion-dao

Comunion 合约 及 node.js SDK



## 合约介绍：

### Daos

存储所有创建的组织，并可验证某名称或者地址是否已经注册到Daos, comunion的其他合约都依赖此合约需要最先发布

### Organization

组织合约，每创建一个组织就有一个对应的 Organization 合约； 提供添加删除核心成员，设置成员角色等功能。

### OrgToken

组织 Token



## SDK安装、 初始化

``` bash
npm install comunion-dao
```

``` typescript
import { EthUtils, Daos, Organization, OrgToken } from 'comunion-dao'

// rpcHost: 以太坊rpc请求地址， chainId: rpcHost对应的链Id
let ethUtils = new EthUtils(rpcHost, chainId)
```



## Daos 发布

手动发布即可 (Daos.sol)  
现在已经发布了一个用于测试  
ropsten： 0x5AC87695F32a447C2D3E8b63B7495a2B5F671048  



## 组织相关操作

### 发布组织

- 服务端生成 deploy 数据
``` typescript
// daosAddress: Daos 合约地址,  orgName: 组织名称
let deployData = Organization.genDeployData([daosAddress, orgName])
```

- 客户端 (调用 metamask)
``` javascript
var tx = {
    value: '0',
    data: deployData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('deploy organization hash:', txhash)
        // TODO 将 txhash 上传到服务端用于验证
    } else {
        console.log(err)
    }
})
```

- 服务端查询交易状态
``` typescript
// 查询交易结果
let result = await ethUtils.getTransactionReceipt(txhash)
// result.status 为 true 表示交易成功， result.contractAddress 为 发布的合约地址


// 查询交易区块确认数
let count = await ethUtils.getConfirmCount(txhash)
```

### 实例化组织对象 (服务端)
``` typescript
let org = new Organization(ethUtils, orgContractAddress)
```

### 添加并设置成员角色 (可批量)
如果成员已经存在即修改成员角色； 只有组织创建者才有权限，合约内有权限验证

- 服务端生成 添加成员角色 数据
``` typescript
// role 字符串长度不能超过32字节
let role1 = ethUtils.web3.utils.fromAscii("R1")
let role2 = ethUtils.web3.utils.fromAscii("R2")
// members 与 roles 按顺序一一对应
let members = [addr1, addr2, addr3]
let roles = [role1, role1, role2]
let setMembersData = await org.genAddOrUpdateMembersData(members, roles)
```

- 客户端 (调用 metamask)
``` javascript
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


### 删除成员 

只有组织创建者才有权限，合约内有权限验证

- 服务端生成 删除成员 交易数据
``` typescript
let removeMemberData = await org.genRemoveMemberData(memberAddress)
```

- 客户端 (调用 metamask)
``` javascript
var tx = {
    value: '0',
    to: orgAddress, // 组织合约地址
    data: removeMemberData
}
web3.eth.sendTransaction(tx, (err, txhash) => {
    if (!err) {
        console.log('remove member hash:', txhash)
        // TODO 将 txhash 上传到服务端 用于验证
    } else {
        console.log(err)
    }
})
```


## OrgToken 相关

待续...