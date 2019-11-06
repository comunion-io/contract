export default {
  "Daos": {
    "1": {
      "contractName": "Daos",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "index",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "version",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "addressIndex",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
            }
          ],
          "name": "daos",
          "outputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameIndex",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "",
              "type": "uint64"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "RegDao",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_addr",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            }
          ],
          "name": "register",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.11+commit.c082d0b4\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"index\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"register\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"addressIndex\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"name\":\"daos\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"nameIndex\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"RegDao\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Daos.sol\":\"Daos\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Daos.sol\":{\"keccak256\":\"0xbf9599f3b6ba78adf5153db606ad6d145a5e4c2a65988729b4f4b05f4d74f137\",\"urls\":[\"bzz-raw://21d0366b68b152d56a2971b9485fa74235d0a7be2f27539c048939eabcafcb8b\",\"dweb:/ipfs/QmZ55FMLPN7YM17NT7VgFbcoovnAd4hTdxmuopYk9UZq5o\"]}},\"version\":1}",
      "bytecode": "0x608060405260016000806101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555034801561003957600080fd5b50610aeb806100496000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632986c0e51461006757806332434a2e1461009957806354fd4d5014610174578063935c1fb11461019e5780639ba7adc81461020a578063e5a27979146102ee575b600080fd5b61006f6103d1565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b610172600480360360408110156100af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100ec57600080fd5b8201836020820111156100fe57600080fd5b8035906020019184600183028401116401000000008311171561012057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103ea565b005b61017c6108aa565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6101e0600480360360208110156101b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108af565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b6102406004803603602081101561022057600080fd5b81019080803567ffffffffffffffff1690602001909291905050506108d6565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102b2578082015181840152602081019050610297565b50505050905090810190601f1680156102df5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6103a76004803603602081101561030457600080fd5b810190808035906020019064010000000081111561032157600080fd5b82018360208201111561033357600080fd5b8035906020019184600183028401116401000000008311171561035557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506109b2565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900467ffffffffffffffff1681565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900467ffffffffffffffff16905060008167ffffffffffffffff16146104a5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610a956022913960400191505060405180910390fd5b6003826040518082805190602001908083835b602083106104db57805182526020820191506020810190506020830392506104b8565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900467ffffffffffffffff16905060008167ffffffffffffffff16146105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f546865206e616d6520697320616c726561647920726567697374657265642e0081525060200191505060405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250600160008060009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061066f9291906109ef565b509050506000809054906101000a900467ffffffffffffffff16600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000809054906101000a900467ffffffffffffffff166003836040518082805190602001908083835b6020831061073a5780518252602082019150602081019050602083039250610717565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fa36c6425d992b4e3d6da4e1aadeded1449d5bb10127abe013fc02489dcf8a5f58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561082857808201518184015260208101905061080d565b50505050905090810190601f1680156108555780820380516001836020036101000a031916815260200191505b50935050505060405180910390a160016000808282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b600181565b60026020528060005260406000206000915054906101000a900467ffffffffffffffff1681565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a85780601f1061097d576101008083540402835291602001916109a8565b820191906000526020600020905b81548152906001019060200180831161098b57829003601f168201915b5050505050905082565b6003818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900467ffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a3057805160ff1916838001178555610a5e565b82800160010185558215610a5e579182015b82811115610a5d578251825591602001919060010190610a42565b5b509050610a6b9190610a6f565b5090565b610a9191905b80821115610a8d576000816000905550600101610a75565b5090565b9056fe546865206164647265737320697320616c726561647920726567697374657265642ea265627a7a72315820426ff5ee94f714a6fcad84040683851f03ae6ebccaa96e692d24e6560c963e7864736f6c634300050b0032",
      "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80632986c0e51461006757806332434a2e1461009957806354fd4d5014610174578063935c1fb11461019e5780639ba7adc81461020a578063e5a27979146102ee575b600080fd5b61006f6103d1565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b610172600480360360408110156100af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156100ec57600080fd5b8201836020820111156100fe57600080fd5b8035906020019184600183028401116401000000008311171561012057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506103ea565b005b61017c6108aa565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6101e0600480360360208110156101b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108af565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b6102406004803603602081101561022057600080fd5b81019080803567ffffffffffffffff1690602001909291905050506108d6565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102b2578082015181840152602081019050610297565b50505050905090810190601f1680156102df5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6103a76004803603602081101561030457600080fd5b810190808035906020019064010000000081111561032157600080fd5b82018360208201111561033357600080fd5b8035906020019184600183028401116401000000008311171561035557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506109b2565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900467ffffffffffffffff1681565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900467ffffffffffffffff16905060008167ffffffffffffffff16146104a5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610a956022913960400191505060405180910390fd5b6003826040518082805190602001908083835b602083106104db57805182526020820191506020810190506020830392506104b8565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900467ffffffffffffffff16905060008167ffffffffffffffff16146105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f546865206e616d6520697320616c726561647920726567697374657265642e0081525060200191505060405180910390fd5b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250600160008060009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061066f9291906109ef565b509050506000809054906101000a900467ffffffffffffffff16600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000809054906101000a900467ffffffffffffffff166003836040518082805190602001908083835b6020831061073a5780518252602082019150602081019050602083039250610717565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fa36c6425d992b4e3d6da4e1aadeded1449d5bb10127abe013fc02489dcf8a5f58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561082857808201518184015260208101905061080d565b50505050905090810190601f1680156108555780820380516001836020036101000a031916815260200191505b50935050505060405180910390a160016000808282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550505050565b600181565b60026020528060005260406000206000915054906101000a900467ffffffffffffffff1681565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a85780601f1061097d576101008083540402835291602001916109a8565b820191906000526020600020905b81548152906001019060200180831161098b57829003601f168201915b5050505050905082565b6003818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900467ffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a3057805160ff1916838001178555610a5e565b82800160010185558215610a5e579182015b82811115610a5d578251825591602001919060010190610a42565b5b509050610a6b9190610a6f565b5090565b610a9191905b80821115610a8d576000816000905550600101610a75565b5090565b9056fe546865206164647265737320697320616c726561647920726567697374657265642ea265627a7a72315820426ff5ee94f714a6fcad84040683851f03ae6ebccaa96e692d24e6560c963e7864736f6c634300050b0032",
      "sourceMap": "27:777:0:-;;;223:1;201:23;;;;;;;;;;;;;;;;;;;;27:777;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:777:0;;;;;;;",
      "deployedSourceMap": "27:777:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:777:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;201:23;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;371:431;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;371:431:0;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;371:431:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;371:431:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;371:431:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;371:431:0;;;;;;;;;;;;;;;:::i;:::-;;161:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;270:46;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;270:46:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;230:34;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;230:34:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;230:34:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;322:42;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;322:42:0;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;322:42:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;322:42:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;322:42:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;322:42:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;201:23;;;;;;;;;;;;;:::o;371:431::-;442:8;453:12;:19;466:5;453:19;;;;;;;;;;;;;;;;;;;;;;;;;442:30;;495:1;490;:6;;;482:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;549:9;559:5;549:16;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;549:16:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;545:20;;588:1;583;:6;;;575:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;650:17;;;;;;;;654:5;650:17;;;;;;661:5;650:17;;;636:4;:11;641:5;;;;;;;;;;;636:11;;;;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;699:5;;;;;;;;;;;677:12;:19;690:5;677:19;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;733:5;;;;;;;;;;;714:9;724:5;714:16;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;714:16:0;;;;;;;;;;;;;;;;;;;;;;:24;;;;;;;;;;;;;;;;;;754:20;761:5;768;754:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;754:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;794:1;785:5;;:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:431;;;:::o;161:34::-;194:1;161:34;:::o;270:46::-;;;;;;;;;;;;;;;;;;;;;;:::o;230:34::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;322:42::-;;;28:7:-1;22:14;169:4;160:7;156:18;147:7;143:32;204:13;198:20;246:8;231:13;224:31;316:4;307:7;303:18;296:4;287:7;283:18;273:49;350:9;335:13;328:32;378:4;366:16;;0:388;;;;322:42:0;;;;;;;;;;;;;:::o;27:777::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
      "source": "pragma solidity ^0.5.11;\n\n\ncontract Daos {\n\n    event RegDao(address addr, string name);\n\n    struct Dao {\n        address addr;\n        string name;\n    }\n\n    uint32 public constant version = 1;\n    uint64 public index = 1;\n    mapping(uint64 => Dao) public daos;\n    mapping(address => uint64) public addressIndex;\n    mapping(string => uint64) public nameIndex;\n\n    function register(address _addr, string memory _name) public {\n        uint64 i = addressIndex[_addr];\n        require(i == 0, \"The address is already registered.\");\n        i = nameIndex[_name];\n        require(i == 0, \"The name is already registered.\");\n\n        daos[index] = Dao(_addr, _name);\n        addressIndex[_addr] = index;\n        nameIndex[_name] = index;\n\n        emit RegDao(_addr, _name);\n\n        index += 1;\n    }\n}",
      "sourcePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Daos.sol",
      "ast": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Daos.sol",
        "exportedSymbols": {
          "Daos": [
            95
          ]
        },
        "id": 96,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 1,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:0"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 95,
            "linearizedBaseContracts": [
              95
            ],
            "name": "Daos",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "anonymous": false,
                "documentation": null,
                "id": 7,
                "name": "RegDao",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 6,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 3,
                      "indexed": false,
                      "name": "addr",
                      "nodeType": "VariableDeclaration",
                      "scope": 7,
                      "src": "61:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "61:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 5,
                      "indexed": false,
                      "name": "name",
                      "nodeType": "VariableDeclaration",
                      "scope": 7,
                      "src": "75:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 4,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "75:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "60:27:0"
                },
                "src": "48:40:0"
              },
              {
                "canonicalName": "Daos.Dao",
                "id": 12,
                "members": [
                  {
                    "constant": false,
                    "id": 9,
                    "name": "addr",
                    "nodeType": "VariableDeclaration",
                    "scope": 12,
                    "src": "115:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 8,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "115:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 11,
                    "name": "name",
                    "nodeType": "VariableDeclaration",
                    "scope": 12,
                    "src": "137:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 10,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "137:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "Dao",
                "nodeType": "StructDefinition",
                "scope": 95,
                "src": "94:61:0",
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 15,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "161:34:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 13,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "161:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 14,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "194:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 18,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "201:23:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 16,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "201:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 17,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "223:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 22,
                "name": "daos",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "230:34:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                  "typeString": "mapping(uint64 => struct Daos.Dao)"
                },
                "typeName": {
                  "id": 21,
                  "keyType": {
                    "id": 19,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "230:22:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                    "typeString": "mapping(uint64 => struct Daos.Dao)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 20,
                    "name": "Dao",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 12,
                    "src": "248:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Dao_$12_storage_ptr",
                      "typeString": "struct Daos.Dao"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 26,
                "name": "addressIndex",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "270:46:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                  "typeString": "mapping(address => uint64)"
                },
                "typeName": {
                  "id": 25,
                  "keyType": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "270:26:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                    "typeString": "mapping(address => uint64)"
                  },
                  "valueType": {
                    "id": 24,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 30,
                "name": "nameIndex",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "322:42:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                  "typeString": "mapping(string => uint64)"
                },
                "typeName": {
                  "id": 29,
                  "keyType": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "322:25:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                    "typeString": "mapping(string => uint64)"
                  },
                  "valueType": {
                    "id": 28,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 93,
                  "nodeType": "Block",
                  "src": "432:370:0",
                  "statements": [
                    {
                      "assignments": [
                        38
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 38,
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "scope": 93,
                          "src": "442:8:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          },
                          "typeName": {
                            "id": 37,
                            "name": "uint64",
                            "nodeType": "ElementaryTypeName",
                            "src": "442:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 42,
                      "initialValue": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "addressIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "453:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                            "typeString": "mapping(address => uint64)"
                          }
                        },
                        "id": 41,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "_addr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "466:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "453:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "442:30:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            },
                            "id": 46,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 44,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "490:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 45,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "495:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "490:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "546865206164647265737320697320616c726561647920726567697374657265642e",
                            "id": 47,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "498:36:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_db5d0d8a745d68377b7d172feda73953ea92928cdc38fb4526cb4730d6b59279",
                              "typeString": "literal_string \"The address is already registered.\""
                            },
                            "value": "The address is already registered."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_db5d0d8a745d68377b7d172feda73953ea92928cdc38fb4526cb4730d6b59279",
                              "typeString": "literal_string \"The address is already registered.\""
                            }
                          ],
                          "id": 43,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1308,
                            1309
                          ],
                          "referencedDeclaration": 1309,
                          "src": "482:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 48,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "482:53:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 49,
                      "nodeType": "ExpressionStatement",
                      "src": "482:53:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "545:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "nameIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30,
                            "src": "549:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                              "typeString": "mapping(string memory => uint64)"
                            }
                          },
                          "id": 53,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 52,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "559:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "549:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "545:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 55,
                      "nodeType": "ExpressionStatement",
                      "src": "545:20:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 57,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "583:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 58,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "588:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "583:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "546865206e616d6520697320616c726561647920726567697374657265642e",
                            "id": 60,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "591:33:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_cd65d6386c2bf372349cb0f9a24b9af467aab66c8d0b48d85da393eea4a4aa08",
                              "typeString": "literal_string \"The name is already registered.\""
                            },
                            "value": "The name is already registered."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_cd65d6386c2bf372349cb0f9a24b9af467aab66c8d0b48d85da393eea4a4aa08",
                              "typeString": "literal_string \"The name is already registered.\""
                            }
                          ],
                          "id": 56,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1308,
                            1309
                          ],
                          "referencedDeclaration": 1309,
                          "src": "575:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "575:50:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 62,
                      "nodeType": "ExpressionStatement",
                      "src": "575:50:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "daos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "636:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                              "typeString": "mapping(uint64 => struct Daos.Dao storage ref)"
                            }
                          },
                          "id": 65,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "641:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "636:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Dao_$12_storage",
                            "typeString": "struct Daos.Dao storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 67,
                              "name": "_addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32,
                              "src": "654:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 68,
                              "name": "_name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34,
                              "src": "661:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 66,
                            "name": "Dao",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "650:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Dao_$12_storage_ptr_$",
                              "typeString": "type(struct Daos.Dao storage pointer)"
                            }
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "650:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Dao_$12_memory",
                            "typeString": "struct Daos.Dao memory"
                          }
                        },
                        "src": "636:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Dao_$12_storage",
                          "typeString": "struct Daos.Dao storage ref"
                        }
                      },
                      "id": 71,
                      "nodeType": "ExpressionStatement",
                      "src": "636:31:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 76,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 72,
                            "name": "addressIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "677:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                              "typeString": "mapping(address => uint64)"
                            }
                          },
                          "id": 74,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 73,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "690:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "677:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 75,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "699:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "677:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 77,
                      "nodeType": "ExpressionStatement",
                      "src": "677:27:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 78,
                            "name": "nameIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30,
                            "src": "714:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                              "typeString": "mapping(string memory => uint64)"
                            }
                          },
                          "id": 80,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "724:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "714:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "733:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "714:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 83,
                      "nodeType": "ExpressionStatement",
                      "src": "714:24:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 85,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "761:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "768:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 84,
                          "name": "RegDao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "754:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (address,string memory)"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "754:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 88,
                      "nodeType": "EmitStatement",
                      "src": "749:25:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 89,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "785:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 90,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "794:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "785:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 92,
                      "nodeType": "ExpressionStatement",
                      "src": "785:10:0"
                    }
                  ]
                },
                "documentation": null,
                "id": 94,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "register",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 35,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 32,
                      "name": "_addr",
                      "nodeType": "VariableDeclaration",
                      "scope": 94,
                      "src": "389:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "389:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 34,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 94,
                      "src": "404:19:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "404:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "388:36:0"
                },
                "returnParameters": {
                  "id": 36,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "432:0:0"
                },
                "scope": 95,
                "src": "371:431:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 96,
            "src": "27:777:0"
          }
        ],
        "src": "0:804:0"
      },
      "legacyAST": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Daos.sol",
        "exportedSymbols": {
          "Daos": [
            95
          ]
        },
        "id": 96,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 1,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:0"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 95,
            "linearizedBaseContracts": [
              95
            ],
            "name": "Daos",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "anonymous": false,
                "documentation": null,
                "id": 7,
                "name": "RegDao",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 6,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 3,
                      "indexed": false,
                      "name": "addr",
                      "nodeType": "VariableDeclaration",
                      "scope": 7,
                      "src": "61:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 2,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "61:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 5,
                      "indexed": false,
                      "name": "name",
                      "nodeType": "VariableDeclaration",
                      "scope": 7,
                      "src": "75:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 4,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "75:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "60:27:0"
                },
                "src": "48:40:0"
              },
              {
                "canonicalName": "Daos.Dao",
                "id": 12,
                "members": [
                  {
                    "constant": false,
                    "id": 9,
                    "name": "addr",
                    "nodeType": "VariableDeclaration",
                    "scope": 12,
                    "src": "115:12:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 8,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "115:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 11,
                    "name": "name",
                    "nodeType": "VariableDeclaration",
                    "scope": 12,
                    "src": "137:11:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 10,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "137:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "Dao",
                "nodeType": "StructDefinition",
                "scope": 95,
                "src": "94:61:0",
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 15,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "161:34:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 13,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "161:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 14,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "194:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 18,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "201:23:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 16,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "201:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 17,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "223:1:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 22,
                "name": "daos",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "230:34:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                  "typeString": "mapping(uint64 => struct Daos.Dao)"
                },
                "typeName": {
                  "id": 21,
                  "keyType": {
                    "id": 19,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "230:22:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                    "typeString": "mapping(uint64 => struct Daos.Dao)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 20,
                    "name": "Dao",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 12,
                    "src": "248:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Dao_$12_storage_ptr",
                      "typeString": "struct Daos.Dao"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 26,
                "name": "addressIndex",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "270:46:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                  "typeString": "mapping(address => uint64)"
                },
                "typeName": {
                  "id": 25,
                  "keyType": {
                    "id": 23,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "278:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "270:26:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                    "typeString": "mapping(address => uint64)"
                  },
                  "valueType": {
                    "id": 24,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 30,
                "name": "nameIndex",
                "nodeType": "VariableDeclaration",
                "scope": 95,
                "src": "322:42:0",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                  "typeString": "mapping(string => uint64)"
                },
                "typeName": {
                  "id": 29,
                  "keyType": {
                    "id": 27,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "322:25:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                    "typeString": "mapping(string => uint64)"
                  },
                  "valueType": {
                    "id": 28,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 93,
                  "nodeType": "Block",
                  "src": "432:370:0",
                  "statements": [
                    {
                      "assignments": [
                        38
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 38,
                          "name": "i",
                          "nodeType": "VariableDeclaration",
                          "scope": 93,
                          "src": "442:8:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          },
                          "typeName": {
                            "id": 37,
                            "name": "uint64",
                            "nodeType": "ElementaryTypeName",
                            "src": "442:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 42,
                      "initialValue": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 39,
                          "name": "addressIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "453:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                            "typeString": "mapping(address => uint64)"
                          }
                        },
                        "id": 41,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "_addr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 32,
                          "src": "466:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "453:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "442:30:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            },
                            "id": 46,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 44,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "490:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 45,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "495:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "490:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "546865206164647265737320697320616c726561647920726567697374657265642e",
                            "id": 47,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "498:36:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_db5d0d8a745d68377b7d172feda73953ea92928cdc38fb4526cb4730d6b59279",
                              "typeString": "literal_string \"The address is already registered.\""
                            },
                            "value": "The address is already registered."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_db5d0d8a745d68377b7d172feda73953ea92928cdc38fb4526cb4730d6b59279",
                              "typeString": "literal_string \"The address is already registered.\""
                            }
                          ],
                          "id": 43,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1308,
                            1309
                          ],
                          "referencedDeclaration": 1309,
                          "src": "482:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 48,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "482:53:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 49,
                      "nodeType": "ExpressionStatement",
                      "src": "482:53:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 54,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 50,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "545:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 51,
                            "name": "nameIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30,
                            "src": "549:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                              "typeString": "mapping(string memory => uint64)"
                            }
                          },
                          "id": 53,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 52,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "559:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "549:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "545:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 55,
                      "nodeType": "ExpressionStatement",
                      "src": "545:20:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            },
                            "id": 59,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 57,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 38,
                              "src": "583:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint64",
                                "typeString": "uint64"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 58,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "588:1:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "583:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "546865206e616d6520697320616c726561647920726567697374657265642e",
                            "id": 60,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "591:33:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_cd65d6386c2bf372349cb0f9a24b9af467aab66c8d0b48d85da393eea4a4aa08",
                              "typeString": "literal_string \"The name is already registered.\""
                            },
                            "value": "The name is already registered."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_cd65d6386c2bf372349cb0f9a24b9af467aab66c8d0b48d85da393eea4a4aa08",
                              "typeString": "literal_string \"The name is already registered.\""
                            }
                          ],
                          "id": 56,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1308,
                            1309
                          ],
                          "referencedDeclaration": 1309,
                          "src": "575:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 61,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "575:50:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 62,
                      "nodeType": "ExpressionStatement",
                      "src": "575:50:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 70,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 63,
                            "name": "daos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 22,
                            "src": "636:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint64_$_t_struct$_Dao_$12_storage_$",
                              "typeString": "mapping(uint64 => struct Daos.Dao storage ref)"
                            }
                          },
                          "id": 65,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "641:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint64",
                              "typeString": "uint64"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "636:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Dao_$12_storage",
                            "typeString": "struct Daos.Dao storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 67,
                              "name": "_addr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 32,
                              "src": "654:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 68,
                              "name": "_name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34,
                              "src": "661:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 66,
                            "name": "Dao",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12,
                            "src": "650:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Dao_$12_storage_ptr_$",
                              "typeString": "type(struct Daos.Dao storage pointer)"
                            }
                          },
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "650:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Dao_$12_memory",
                            "typeString": "struct Daos.Dao memory"
                          }
                        },
                        "src": "636:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Dao_$12_storage",
                          "typeString": "struct Daos.Dao storage ref"
                        }
                      },
                      "id": 71,
                      "nodeType": "ExpressionStatement",
                      "src": "636:31:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 76,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 72,
                            "name": "addressIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 26,
                            "src": "677:12:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint64_$",
                              "typeString": "mapping(address => uint64)"
                            }
                          },
                          "id": 74,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 73,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "690:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "677:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 75,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "699:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "677:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 77,
                      "nodeType": "ExpressionStatement",
                      "src": "677:27:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 78,
                            "name": "nameIndex",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 30,
                            "src": "714:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_uint64_$",
                              "typeString": "mapping(string memory => uint64)"
                            }
                          },
                          "id": 80,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 79,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "724:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "714:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "733:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "714:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 83,
                      "nodeType": "ExpressionStatement",
                      "src": "714:24:0"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 85,
                            "name": "_addr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 32,
                            "src": "761:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 86,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "768:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 84,
                          "name": "RegDao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "754:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (address,string memory)"
                          }
                        },
                        "id": 87,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "754:20:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 88,
                      "nodeType": "EmitStatement",
                      "src": "749:25:0"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 89,
                          "name": "index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 18,
                          "src": "785:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 90,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "794:1:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "785:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "id": 92,
                      "nodeType": "ExpressionStatement",
                      "src": "785:10:0"
                    }
                  ]
                },
                "documentation": null,
                "id": 94,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "register",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 35,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 32,
                      "name": "_addr",
                      "nodeType": "VariableDeclaration",
                      "scope": 94,
                      "src": "389:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 31,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "389:7:0",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 34,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 94,
                      "src": "404:19:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "404:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "388:36:0"
                },
                "returnParameters": {
                  "id": 36,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "432:0:0"
                },
                "scope": 95,
                "src": "371:431:0",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 96,
            "src": "27:777:0"
          }
        ],
        "src": "0:804:0"
      },
      "compiler": {
        "name": "solc",
        "version": "0.5.11+commit.c082d0b4.Emscripten.clang"
      },
      "networks": {},
      "schemaVersion": "3.0.15",
      "updatedAt": "2019-10-24T07:55:40.571Z",
      "devdoc": {
        "methods": {}
      },
      "userdoc": {
        "methods": {}
      }
    }
  },
  "Organization": {
    "1": {
      "contractName": "Organization",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "members",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "bool",
              "name": "hasData",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "version",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "subAccounts",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "desc",
              "type": "bytes32"
            },
            {
              "internalType": "bool",
              "name": "hasData",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "token",
          "outputs": [
            {
              "internalType": "contract ERC20",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract Daos",
              "name": "_daos",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "member",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "SetMemberRole",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "member",
              "type": "address"
            }
          ],
          "name": "RemoveMember",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "token",
              "type": "address"
            }
          ],
          "name": "SetToken",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "contract ERC20",
              "name": "_token",
              "type": "address"
            }
          ],
          "name": "setToken",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "addresses",
              "type": "address[]"
            },
            {
              "internalType": "bytes32[]",
              "name": "roles",
              "type": "bytes32[]"
            }
          ],
          "name": "addOrUpdateMembers",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "_members",
              "type": "address[]"
            }
          ],
          "name": "removeMembers",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "member",
              "type": "address"
            }
          ],
          "name": "getRole",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "member",
              "type": "address"
            }
          ],
          "name": "_removeMember",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.11+commit.c082d0b4\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"members\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"hasData\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"setToken\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"member\",\"type\":\"address\"}],\"name\":\"getRole\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_members\",\"type\":\"address[]\"}],\"name\":\"removeMembers\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"addresses\",\"type\":\"address[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"roles\",\"type\":\"bytes32[]\"}],\"name\":\"addOrUpdateMembers\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"subAccounts\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"desc\",\"type\":\"bytes32\"},{\"internalType\":\"bool\",\"name\":\"hasData\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"member\",\"type\":\"address\"}],\"name\":\"_removeMember\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Daos\",\"name\":\"_daos\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"member\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"SetMemberRole\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"member\",\"type\":\"address\"}],\"name\":\"RemoveMember\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SetToken\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol\":\"Organization\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/Daos.sol\":{\"keccak256\":\"0xbf9599f3b6ba78adf5153db606ad6d145a5e4c2a65988729b4f4b05f4d74f137\",\"urls\":[\"bzz-raw://21d0366b68b152d56a2971b9485fa74235d0a7be2f27539c048939eabcafcb8b\",\"dweb:/ipfs/QmZ55FMLPN7YM17NT7VgFbcoovnAd4hTdxmuopYk9UZq5o\"]},\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol\":{\"keccak256\":\"0x75659bbe70f00546a86ac3b3a98fcf3f132084c471a29fa6b00634f50808ba48\",\"urls\":[\"bzz-raw://eec968a7aa6717fd8bf863967f1d12343894f2a1e40687d0b7debef3f96d6f2c\",\"dweb:/ipfs/QmbW1N1L6EYve55MD4LgkMKJtprfGCrSQzyrrdh7zDwthj\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzz-raw://d62d769b2219d5de39013093412623e624fa887f871826ea3bae6052ee893610\",\"dweb:/ipfs/QmV3yVktya1s617QmuzQR2CfuJgUi3dR2xEZY9ecmqZ2G1\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xf79fb10e8235770eb4aea7249034076a3cc9f9119ad944fc48705bae9c9d20dc\",\"urls\":[\"bzz-raw://cd3429aa9a4878dcf6c73faa32c3722f4013d4be012ece543b246faa6b50f55c\",\"dweb:/ipfs/QmS55hgTvNEAKinus19m65CB4wcymN8EiUPFpRx5tYJ1i2\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x852793a3c2f86d336a683b30d688ec3dcfc57451af5a2bf5975cda3b7191a901\",\"urls\":[\"bzz-raw://4f5b57664069671648fb81f55b0082faecdf1b2f159eec6b1fa6cef9b7d73bc5\",\"dweb:/ipfs/QmcyytaLs7zFdb4Uu7C5PmQRhQdB3wA3fUdkV6mkYfdDFH\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzz-raw://d0abb99bb8bfc2bc0a89902b8ed1dc0442ad08cc78cee64c291b3df6a27bcccc\",\"dweb:/ipfs/QmP5NaEwZthQeM2ESz4WTT3osrP7jhbvu7ocbttBi2JAw6\"]}},\"version\":1}",
      "bytecode": "0x60806040523480156200001157600080fd5b5060405162001b4338038062001b43833981810160405260408110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a38060019080519060200190620001d6929190620006cc565b508173ffffffffffffffffffffffffffffffffffffffff166332434a2e30836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620002785780820151818401526020810190506200025b565b50505050905090810190601f168015620002a65780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b158015620002c757600080fd5b505af1158015620002dc573d6000803e3d6000fd5b5050505060606001604051908082528060200260200182016040528015620003135781602001602082028038833980820191505090505b50905033816000815181106200032557fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060606001604051908082528060200260200182016040528015620003925781602001602082028038833980820191505090505b5090507f6f776e657200000000000000000000000000000000000000000000000000000081600081518110620003c457fe5b602002602001018181525050620003e28282620003ec60201b60201c565b505050506200077b565b620003fc6200067560201b60201c565b6200046f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8051825114620004cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018062001b15602e913960400191505060405180910390fd5b60008090505b82518161ffff1610156200067057600160036000858461ffff1681518110620004f657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff021916908315150217905550818161ffff16815181106200056357fe5b602002602001015160036000858461ffff16815181106200058057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f5dd27703e52ce4468cbaa14d83e36ddda4b69c759bc1546d9788e1da0a1be0a3838261ffff1681518110620005fb57fe5b6020026020010151838361ffff16815181106200061457fe5b6020026020010151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1806001019050620004d1565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200070f57805160ff191683800117855562000740565b8280016001018555821562000740579182015b828111156200073f57825182559160200191906001019062000722565b5b5090506200074f919062000753565b5090565b6200077891905b80821115620007745760008160009055506001016200075a565b5090565b90565b61138a806200078b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638a799a221161008c578063da34250c11610066578063da34250c14610515578063f2fde38b14610578578063fbc990d0146105bc578063fc0c546a14610600576100ea565b80638a799a221461035d5780638da5cb5b146104a95780638f32d59b146104f3576100ea565b806344276733116100c8578063442767331461021957806346ee84b01461027157806354fd4d5014610329578063715018a614610353576100ea565b806306fdde03146100ef57806308ae4b0c14610172578063144fa6d7146101d5575b600080fd5b6100f761064a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013757808201518184015260208101905061011c565b50505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b46004803603602081101561018857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106e8565b60405180838152602001821515151581526020019250505060405180910390f35b610217600480360360208110156101eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610719565b005b61025b6004803603602081101561022f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f2565b6040518082815260200191505060405180910390f35b6103276004803603602081101561028757600080fd5b81019080803590602001906401000000008111156102a457600080fd5b8201836020820111156102b657600080fd5b803590602001918460208302840111640100000000831117156102d857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506109e3565b005b610331610a9f565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b61035b610aa4565b005b6104a76004803603604081101561037357600080fd5b810190808035906020019064010000000081111561039057600080fd5b8201836020820111156103a257600080fd5b803590602001918460208302840111640100000000831117156103c457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561042457600080fd5b82018360208201111561043657600080fd5b8035906020019184602083028401116401000000008311171561045857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610bdd565b005b6104b1610e54565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104fb610e7d565b604051808215151515815260200191505060405180910390f35b6105576004803603602081101561052b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed4565b60405180838152602001821515151581526020019250505060405180910390f35b6105ba6004803603602081101561058e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f05565b005b6105fe600480360360208110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f8b565b005b61060861111f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106e05780601f106106b5576101008083540402835291602001916106e0565b820191906000526020600020905b8154815290600101906020018083116106c357829003601f168201915b505050505081565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b610721610e54565b73ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146107a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806112d16028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461084b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061128a6021913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fefc1fd16ea80a922086ee4e995739d59b025c1bcea6d1f67855747480c83214b81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611327602f913960400191505060405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6109eb610e7d565b610a5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b81518161ffff161015610a9b57610a90828261ffff1681518110610a8357fe5b6020026020010151610f8b565b806001019050610a63565b5050565b600181565b610aac610e7d565b610b1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610be5610e7d565b610c57576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8051825114610cb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806112f9602e913960400191505060405180910390fd5b60008090505b82518161ffff161015610e4f57600160036000858461ffff1681518110610cda57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff021916908315150217905550818161ffff1681518110610d4657fe5b602002602001015160036000858461ffff1681518110610d6257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f5dd27703e52ce4468cbaa14d83e36ddda4b69c759bc1546d9788e1da0a1be0a3838261ffff1681518110610ddc57fe5b6020026020010151838361ffff1681518110610df457fe5b6020026020010151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1806001019050610cb7565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60046020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b610f0d610e7d565b610f7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610f8881611145565b50565b610f93610e7d565b611005576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561111c57600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160006101000a81549060ff021916905550507f7693a3e9eac51f172f145e6f54bc5554168997a1f4efb40f3fad091aa7cfb0e781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112ab6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f7267616e697a6174696f6e3a20546f6b656e20686173206265656e207365742e4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f7267616e697a6174696f6e3a2074782e6f726967696e206973206e6f7420746865206f776e65724f7267616e697a6174696f6e3a206164644f725570646174654d656d6265727320706172616d73206572726f722e4f7267616e697a6174696f6e3a204e6f742061206d656d626572206f6620746865206f7267616e697a6174696f6e2ea265627a7a723158208b8566866ab22b7469e0152f20f7765dde6d82d4f692001ec3536ab436e08d5f64736f6c634300050b00324f7267616e697a6174696f6e3a206164644f725570646174654d656d6265727320706172616d73206572726f722e",
      "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638a799a221161008c578063da34250c11610066578063da34250c14610515578063f2fde38b14610578578063fbc990d0146105bc578063fc0c546a14610600576100ea565b80638a799a221461035d5780638da5cb5b146104a95780638f32d59b146104f3576100ea565b806344276733116100c8578063442767331461021957806346ee84b01461027157806354fd4d5014610329578063715018a614610353576100ea565b806306fdde03146100ef57806308ae4b0c14610172578063144fa6d7146101d5575b600080fd5b6100f761064a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013757808201518184015260208101905061011c565b50505050905090810190601f1680156101645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b46004803603602081101561018857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106e8565b60405180838152602001821515151581526020019250505060405180910390f35b610217600480360360208110156101eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610719565b005b61025b6004803603602081101561022f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f2565b6040518082815260200191505060405180910390f35b6103276004803603602081101561028757600080fd5b81019080803590602001906401000000008111156102a457600080fd5b8201836020820111156102b657600080fd5b803590602001918460208302840111640100000000831117156102d857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506109e3565b005b610331610a9f565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b61035b610aa4565b005b6104a76004803603604081101561037357600080fd5b810190808035906020019064010000000081111561039057600080fd5b8201836020820111156103a257600080fd5b803590602001918460208302840111640100000000831117156103c457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561042457600080fd5b82018360208201111561043657600080fd5b8035906020019184602083028401116401000000008311171561045857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610bdd565b005b6104b1610e54565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104fb610e7d565b604051808215151515815260200191505060405180910390f35b6105576004803603602081101561052b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed4565b60405180838152602001821515151581526020019250505060405180910390f35b6105ba6004803603602081101561058e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f05565b005b6105fe600480360360208110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f8b565b005b61060861111f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106e05780601f106106b5576101008083540402835291602001916106e0565b820191906000526020600020905b8154815290600101906020018083116106c357829003601f168201915b505050505081565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b610721610e54565b73ffffffffffffffffffffffffffffffffffffffff163273ffffffffffffffffffffffffffffffffffffffff16146107a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806112d16028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461084b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061128a6021913960400191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fefc1fd16ea80a922086ee4e995739d59b025c1bcea6d1f67855747480c83214b81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180611327602f913960400191505060405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b6109eb610e7d565b610a5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b81518161ffff161015610a9b57610a90828261ffff1681518110610a8357fe5b6020026020010151610f8b565b806001019050610a63565b5050565b600181565b610aac610e7d565b610b1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610be5610e7d565b610c57576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8051825114610cb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806112f9602e913960400191505060405180910390fd5b60008090505b82518161ffff161015610e4f57600160036000858461ffff1681518110610cda57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff021916908315150217905550818161ffff1681518110610d4657fe5b602002602001015160036000858461ffff1681518110610d6257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055507f5dd27703e52ce4468cbaa14d83e36ddda4b69c759bc1546d9788e1da0a1be0a3838261ffff1681518110610ddc57fe5b6020026020010151838361ffff1681518110610df457fe5b6020026020010151604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1806001019050610cb7565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60046020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16905082565b610f0d610e7d565b610f7f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610f8881611145565b50565b610f93610e7d565b611005576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561111c57600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160006101000a81549060ff021916905550507f7693a3e9eac51f172f145e6f54bc5554168997a1f4efb40f3fad091aa7cfb0e781604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112ab6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe4f7267616e697a6174696f6e3a20546f6b656e20686173206265656e207365742e4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f7267616e697a6174696f6e3a2074782e6f726967696e206973206e6f7420746865206f776e65724f7267616e697a6174696f6e3a206164644f725570646174654d656d6265727320706172616d73206572726f722e4f7267616e697a6174696f6e3a204e6f742061206d656d626572206f6620746865206f7267616e697a6174696f6e2ea265627a7a723158208b8566866ab22b7469e0152f20f7765dde6d82d4f692001ec3536ab436e08d5f64736f6c634300050b0032",
      "sourceMap": "178:2192:4:-;;;686:322;8:9:-1;5:2;;;30:1;27;20:12;5:2;686:322:4;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;686:322:4;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;686:322:4;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;686:322:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:10:6;657:6;;:19;;;;;;;;;;;;;;;;;;724:6;;;;;;;;;;;691:40;;720:1;691:40;;;;;;;;;;;;755:5:4;748:4;:12;;;;;;;;;;;;:::i;:::-;;770:5;:14;;;793:4;800:5;770:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;770:36:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;770:36:4;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;770:36:4;;;;817:22;856:1;842:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;842:16:4;;;;817:41;;879:10;868:5;874:1;868:8;;;;;;;;;;;;;:21;;;;;;;;;;;899:19;935:1;921:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;921:16:4;;;;899:38;;947:15;:2;950:1;947:5;;;;;;;;;;;;;:15;;;;;972:29;991:5;998:2;972:18;;;:29;;:::i;:::-;686:322;;;;178:2192;;1226:428;1018:9:6;:7;;;:9;;:::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1361:5:4;:12;1341:9;:16;:32;1333:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1439:8;1450:1;1439:12;;1434:214;1457:9;:16;1453:1;:20;;;1434:214;;;1526:4;1494:7;:21;1502:9;1512:1;1502:12;;;;;;;;;;;;;;;;1494:21;;;;;;;;;;;;;;;:29;;;:36;;;;;;;;;;;;;;;;;;1573:5;1579:1;1573:8;;;;;;;;;;;;;;;;1544:7;:21;1552:9;1562:1;1552:12;;;;;;;;;;;;;;;;1544:21;;;;;;;;;;;;;;;:26;;:37;;;;1600;1614:9;1624:1;1614:12;;;;;;;;;;;;;;;;1628:5;1634:1;1628:8;;;;;;;;;;;;;;;;1600:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;1475:3;;;;;1434:214;;;;1226:428;;:::o;1165:90:6:-;1205:4;1242:6;;;;;;;;;;;1228:20;;:10;:20;;;1221:27;;1165:90;:::o;178:2192:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "deployedSourceMap": "178:2192:4:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;178:2192:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;535:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;535:18:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;583:41;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;583:41:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1014:206;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1014:206:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;1845:199;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1845:199:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1660:179;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1660:179:4;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1660:179:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1660:179:4;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1660:179:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1660:179:4;;;;;;;;;;;;;;;:::i;:::-;;495:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1599:137:6;;;:::i;:::-;;1226:428:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1226:428:4;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1226:428:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1226:428:4;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1226:428:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1226:428:4;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1226:428:4;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1226:428:4;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1226:428:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1226:428:4;;;;;;;;;;;;;;;:::i;:::-;;814:77:6;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1165:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;630:49:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;630:49:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1885:107:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1885:107:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;2180:187:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2180:187:4;;;;;;;;;;;;;;;;;;;:::i;:::-;;559:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;535;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;583:41::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1014:206::-;2104:7;:5;:7::i;:::-;2091:20;;:9;:20;;;2083:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1109:1;1083:28;;1091:5;;;;;;;;;;;1083:28;;;1075:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1167:6;1159:5;;:14;;;;;;;;;;;;;;;;;;1188:25;1205:6;1188:25;;;;;;;;;;;;;;;;;;;;;;1014:206;:::o;1845:199::-;1898:7;1925;:15;1933:6;1925:15;;;;;;;;;;;;;;;:23;;;;;;;;;;;;1917:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2017:7;:15;2025:6;2017:15;;;;;;;;;;;;;;;:20;;;2010:27;;1845:199;;;:::o;1660:179::-;1018:9:6;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1742:8:4;1753:1;1742:12;;1737:96;1760:8;:15;1756:1;:19;;;1737:96;;;1796:26;1810:8;1819:1;1810:11;;;;;;;;;;;;;;;;1796:13;:26::i;:::-;1777:3;;;;;1737:96;;;;1660:179;:::o;495:34::-;528:1;495:34;:::o;1599:137:6:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1697:1;1660:40;;1681:6;;;;;;;;;;;1660:40;;;;;;;;;;;;1727:1;1710:6;;:19;;;;;;;;;;;;;;;;;;1599:137::o;1226:428:4:-;1018:9:6;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1361:5:4;:12;1341:9;:16;:32;1333:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1439:8;1450:1;1439:12;;1434:214;1457:9;:16;1453:1;:20;;;1434:214;;;1526:4;1494:7;:21;1502:9;1512:1;1502:12;;;;;;;;;;;;;;;;1494:21;;;;;;;;;;;;;;;:29;;;:36;;;;;;;;;;;;;;;;;;1573:5;1579:1;1573:8;;;;;;;;;;;;;;;;1544:7;:21;1552:9;1562:1;1552:12;;;;;;;;;;;;;;;;1544:21;;;;;;;;;;;;;;;:26;;:37;;;;1600;1614:9;1624:1;1614:12;;;;;;;;;;;;;;;;1628:5;1634:1;1628:8;;;;;;;;;;;;;;;;1600:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;1475:3;;;;;1434:214;;;;1226:428;;:::o;814:77:6:-;852:7;878:6;;;;;;;;;;;871:13;;814:77;:::o;1165:90::-;1205:4;1242:6;;;;;;;;;;;1228:20;;:10;:20;;;1221:27;;1165:90;:::o;630:49:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1885:107:6:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:28;1976:8;1957:18;:28::i;:::-;1885:107;:::o;2180:187:4:-;1018:9:6;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2250:7:4;:15;2258:6;2250:15;;;;;;;;;;;;;;;:23;;;;;;;;;;;;2246:115;;;2296:7;:15;2304:6;2296:15;;;;;;;;;;;;;;;;2289:22;;;;;;;;;;;;;;;;;;;;;;;2330:20;2343:6;2330:20;;;;;;;;;;;;;;;;;;;;;;2246:115;2180:187;:::o;559:18::-;;;;;;;;;;;;;:::o;2093:225:6:-;2186:1;2166:22;;:8;:22;;;;2158:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2275:8;2246:38;;2267:6;;;;;;;;;;;2246:38;;;;;;;;;;;;2303:8;2294:6;;:17;;;;;;;;;;;;;;;;;;2093:225;:::o",
      "source": "pragma solidity ^0.5.11;\n\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"../Daos.sol\";\n\n\ncontract Organization is Ownable {\n\n    event SetMemberRole(address member, bytes32 role);\n    event RemoveMember(address member);\n    event SetToken(address token);\n\n    struct Member {\n        bytes32 role;\n        bool hasData;\n    }\n\n    struct SubAccount {\n        bytes32 desc;\n        bool hasData;\n    }\n\n    uint32 public constant version = 1;\n    string public name;\n    ERC20 public token;\n    mapping(address => Member) public members;\n    mapping(address => SubAccount) public subAccounts;\n\n    constructor(Daos _daos, string memory _name) public {\n        name = _name;\n        _daos.register(address(this), _name);\n\n        address[] memory addrs = new address[](1);\n        addrs[0] = msg.sender;\n        bytes32[] memory rs = new bytes32[](1);\n        rs[0] = \"owner\";\n        addOrUpdateMembers(addrs, rs);\n    }\n\n    function setToken(ERC20 _token) public onlyManager {\n        require(address(token) == address(0), \"Organization: Token has been set.\");\n        token = _token;\n        emit SetToken(address(_token));\n    }\n\n    function addOrUpdateMembers(address[] memory addresses, bytes32[] memory roles) public onlyOwner {\n        require(addresses.length == roles.length, \"Organization: addOrUpdateMembers params error.\");\n        for (uint16 i = 0; i < addresses.length; ++i) {\n            members[addresses[i]].hasData = true;\n            members[addresses[i]].role = roles[i];\n            emit SetMemberRole(addresses[i], roles[i]);\n        }\n    }\n\n    function removeMembers(address[] memory _members) public onlyOwner {\n        for (uint16 i = 0; i < _members.length; ++i) {\n            _removeMember(_members[i]);\n        }\n    }\n\n    function getRole(address member) public view returns(bytes32) {\n        require(members[member].hasData, \"Organization: Not a member of the organization.\");\n        return members[member].role;\n    }\n\n    modifier onlyManager() {\n        require(tx.origin == owner(), \"Organization: tx.origin is not the owner\");\n        _;\n    }\n\n    function _removeMember(address member) public onlyOwner {\n        if (members[member].hasData) {\n            delete members[member];\n            emit RemoveMember(member);\n        }\n    }\n\n}",
      "sourcePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol",
      "ast": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol",
        "exportedSymbols": {
          "Organization": [
            651
          ]
        },
        "id": 652,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 370,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:4"
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "id": 371,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 896,
            "src": "26:63:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "id": 372,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 1293,
            "src": "90:63:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/Daos.sol",
            "file": "../Daos.sol",
            "id": 373,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 96,
            "src": "154:21:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 374,
                  "name": "Ownable",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 895,
                  "src": "203:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Ownable_$895",
                    "typeString": "contract Ownable"
                  }
                },
                "id": 375,
                "nodeType": "InheritanceSpecifier",
                "src": "203:7:4"
              }
            ],
            "contractDependencies": [
              895
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 651,
            "linearizedBaseContracts": [
              651,
              895
            ],
            "name": "Organization",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "anonymous": false,
                "documentation": null,
                "id": 381,
                "name": "SetMemberRole",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 380,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 377,
                      "indexed": false,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 381,
                      "src": "238:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 376,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "238:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 379,
                      "indexed": false,
                      "name": "role",
                      "nodeType": "VariableDeclaration",
                      "scope": 381,
                      "src": "254:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 378,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "254:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "237:30:4"
                },
                "src": "218:50:4"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 385,
                "name": "RemoveMember",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 384,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 383,
                      "indexed": false,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "292:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 382,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "292:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "291:16:4"
                },
                "src": "273:35:4"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 389,
                "name": "SetToken",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 388,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 387,
                      "indexed": false,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 389,
                      "src": "328:13:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 386,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "328:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "327:15:4"
                },
                "src": "313:30:4"
              },
              {
                "canonicalName": "Organization.Member",
                "id": 394,
                "members": [
                  {
                    "constant": false,
                    "id": 391,
                    "name": "role",
                    "nodeType": "VariableDeclaration",
                    "scope": 394,
                    "src": "373:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 390,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "373:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 393,
                    "name": "hasData",
                    "nodeType": "VariableDeclaration",
                    "scope": 394,
                    "src": "395:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 392,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "395:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "Member",
                "nodeType": "StructDefinition",
                "scope": 651,
                "src": "349:65:4",
                "visibility": "public"
              },
              {
                "canonicalName": "Organization.SubAccount",
                "id": 399,
                "members": [
                  {
                    "constant": false,
                    "id": 396,
                    "name": "desc",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "448:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 395,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "448:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 398,
                    "name": "hasData",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "470:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 397,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "470:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "SubAccount",
                "nodeType": "StructDefinition",
                "scope": 651,
                "src": "420:69:4",
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 402,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "495:34:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 400,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "495:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 401,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "528:1:4",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 404,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "535:18:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 403,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "535:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 406,
                "name": "token",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "559:18:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC20_$1292",
                  "typeString": "contract ERC20"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 405,
                  "name": "ERC20",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1292,
                  "src": "559:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$1292",
                    "typeString": "contract ERC20"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 410,
                "name": "members",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "583:41:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                  "typeString": "mapping(address => struct Organization.Member)"
                },
                "typeName": {
                  "id": 409,
                  "keyType": {
                    "id": 407,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "583:26:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                    "typeString": "mapping(address => struct Organization.Member)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 408,
                    "name": "Member",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 394,
                    "src": "602:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Member_$394_storage_ptr",
                      "typeString": "struct Organization.Member"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 414,
                "name": "subAccounts",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "630:49:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_SubAccount_$399_storage_$",
                  "typeString": "mapping(address => struct Organization.SubAccount)"
                },
                "typeName": {
                  "id": 413,
                  "keyType": {
                    "id": 411,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "630:30:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_SubAccount_$399_storage_$",
                    "typeString": "mapping(address => struct Organization.SubAccount)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 412,
                    "name": "SubAccount",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 399,
                    "src": "649:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SubAccount_$399_storage_ptr",
                      "typeString": "struct Organization.SubAccount"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 472,
                  "nodeType": "Block",
                  "src": "738:270:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 404,
                          "src": "748:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 422,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 418,
                          "src": "755:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "748:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 424,
                      "nodeType": "ExpressionStatement",
                      "src": "748:12:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 429,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1433,
                                "src": "793:4:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Organization_$651",
                                  "typeString": "contract Organization"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Organization_$651",
                                  "typeString": "contract Organization"
                                }
                              ],
                              "id": 428,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "785:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "785:13:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 418,
                            "src": "800:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 425,
                            "name": "_daos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 416,
                            "src": "770:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Daos_$95",
                              "typeString": "contract Daos"
                            }
                          },
                          "id": 427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "register",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 94,
                          "src": "770:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (address,string memory) external"
                          }
                        },
                        "id": 432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "770:36:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 433,
                      "nodeType": "ExpressionStatement",
                      "src": "770:36:4"
                    },
                    {
                      "assignments": [
                        437
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 437,
                          "name": "addrs",
                          "nodeType": "VariableDeclaration",
                          "scope": 472,
                          "src": "817:22:4",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[]"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 435,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "817:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 436,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "817:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                              "typeString": "address[]"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 443,
                      "initialValue": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 441,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "856:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "id": 440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "842:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                            "typeString": "function (uint256) pure returns (address[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 438,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "846:7:4",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 439,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "846:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                              "typeString": "address[]"
                            }
                          }
                        },
                        "id": 442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "842:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory",
                          "typeString": "address[] memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "817:41:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 444,
                            "name": "addrs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 437,
                            "src": "868:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 446,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "874:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "868:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 447,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1407,
                            "src": "879:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "879:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "868:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 450,
                      "nodeType": "ExpressionStatement",
                      "src": "868:21:4"
                    },
                    {
                      "assignments": [
                        454
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 454,
                          "name": "rs",
                          "nodeType": "VariableDeclaration",
                          "scope": 472,
                          "src": "899:19:4",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[]"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 452,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "899:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 453,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "899:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                              "typeString": "bytes32[]"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 460,
                      "initialValue": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "935:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "id": 457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "921:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_$",
                            "typeString": "function (uint256) pure returns (bytes32[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 455,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "925:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 456,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "925:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                              "typeString": "bytes32[]"
                            }
                          }
                        },
                        "id": 459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "921:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "899:38:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 461,
                            "name": "rs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "947:2:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 463,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 462,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "950:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "947:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "6f776e6572",
                          "id": 464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "955:7:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                            "typeString": "literal_string \"owner\""
                          },
                          "value": "owner"
                        },
                        "src": "947:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 466,
                      "nodeType": "ExpressionStatement",
                      "src": "947:15:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 468,
                            "name": "addrs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 437,
                            "src": "991:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 469,
                            "name": "rs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "998:2:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "id": 467,
                          "name": "addOrUpdateMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 565,
                          "src": "972:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$__$",
                            "typeString": "function (address[] memory,bytes32[] memory)"
                          }
                        },
                        "id": 470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "972:29:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 471,
                      "nodeType": "ExpressionStatement",
                      "src": "972:29:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 473,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 419,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 416,
                      "name": "_daos",
                      "nodeType": "VariableDeclaration",
                      "scope": 473,
                      "src": "698:10:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Daos_$95",
                        "typeString": "contract Daos"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 415,
                        "name": "Daos",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 95,
                        "src": "698:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Daos_$95",
                          "typeString": "contract Daos"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 418,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 473,
                      "src": "710:19:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 417,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "710:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "697:33:4"
                },
                "returnParameters": {
                  "id": 420,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "738:0:4"
                },
                "scope": 651,
                "src": "686:322:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 501,
                  "nodeType": "Block",
                  "src": "1065:155:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 487,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 482,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 406,
                                  "src": "1091:5:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$1292",
                                    "typeString": "contract ERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC20_$1292",
                                    "typeString": "contract ERC20"
                                  }
                                ],
                                "id": 481,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1083:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 483,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1083:14:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 485,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1109:1:4",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 484,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1101:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 486,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1101:10:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1083:28:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a20546f6b656e20686173206265656e207365742e",
                            "id": 488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1113:35:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1d058d440f56030934ab9e4f7fea07f4dae5a10b664b6b74c2593bd1306b5604",
                              "typeString": "literal_string \"Organization: Token has been set.\""
                            },
                            "value": "Organization: Token has been set."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_1d058d440f56030934ab9e4f7fea07f4dae5a10b664b6b74c2593bd1306b5604",
                              "typeString": "literal_string \"Organization: Token has been set.\""
                            }
                          ],
                          "id": 480,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1075:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1075:74:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 490,
                      "nodeType": "ExpressionStatement",
                      "src": "1075:74:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 491,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 406,
                          "src": "1159:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1292",
                            "typeString": "contract ERC20"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 492,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "1167:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1292",
                            "typeString": "contract ERC20"
                          }
                        },
                        "src": "1159:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1292",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 494,
                      "nodeType": "ExpressionStatement",
                      "src": "1159:14:4"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 497,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 475,
                                "src": "1205:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$1292",
                                  "typeString": "contract ERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC20_$1292",
                                  "typeString": "contract ERC20"
                                }
                              ],
                              "id": 496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1197:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 498,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1197:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 495,
                          "name": "SetToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 389,
                          "src": "1188:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                            "typeString": "function (address)"
                          }
                        },
                        "id": 499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1188:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 500,
                      "nodeType": "EmitStatement",
                      "src": "1183:30:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 502,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 478,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 477,
                      "name": "onlyManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 627,
                      "src": "1053:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1053:11:4"
                  }
                ],
                "name": "setToken",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 476,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 475,
                      "name": "_token",
                      "nodeType": "VariableDeclaration",
                      "scope": 502,
                      "src": "1032:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$1292",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 474,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1292,
                        "src": "1032:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1292",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1031:14:4"
                },
                "returnParameters": {
                  "id": 479,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1065:0:4"
                },
                "scope": 651,
                "src": "1014:206:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 564,
                  "nodeType": "Block",
                  "src": "1323:331:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 514,
                                "name": "addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 505,
                                "src": "1341:9:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1341:16:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 516,
                                "name": "roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 508,
                                "src": "1361:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 517,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1361:12:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1341:32:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a206164644f725570646174654d656d6265727320706172616d73206572726f722e",
                            "id": 519,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1375:48:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_55ddcb371c564fd1cfd1f444a3906500632f37e3a0d295a05a7e4b2c452a1848",
                              "typeString": "literal_string \"Organization: addOrUpdateMembers params error.\""
                            },
                            "value": "Organization: addOrUpdateMembers params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_55ddcb371c564fd1cfd1f444a3906500632f37e3a0d295a05a7e4b2c452a1848",
                              "typeString": "literal_string \"Organization: addOrUpdateMembers params error.\""
                            }
                          ],
                          "id": 513,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1333:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1333:91:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 521,
                      "nodeType": "ExpressionStatement",
                      "src": "1333:91:4"
                    },
                    {
                      "body": {
                        "id": 562,
                        "nodeType": "Block",
                        "src": "1480:168:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 540,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 533,
                                    "name": "members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 410,
                                    "src": "1494:7:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                      "typeString": "mapping(address => struct Organization.Member storage ref)"
                                    }
                                  },
                                  "id": 537,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 534,
                                      "name": "addresses",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 505,
                                      "src": "1502:9:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                      }
                                    },
                                    "id": 536,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 535,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 523,
                                      "src": "1512:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1502:12:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1494:21:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Member_$394_storage",
                                    "typeString": "struct Organization.Member storage ref"
                                  }
                                },
                                "id": 538,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "memberName": "hasData",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 393,
                                "src": "1494:29:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 539,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1526:4:4",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "src": "1494:36:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 541,
                            "nodeType": "ExpressionStatement",
                            "src": "1494:36:4"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 551,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 542,
                                    "name": "members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 410,
                                    "src": "1544:7:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                      "typeString": "mapping(address => struct Organization.Member storage ref)"
                                    }
                                  },
                                  "id": 546,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 543,
                                      "name": "addresses",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 505,
                                      "src": "1552:9:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                      }
                                    },
                                    "id": 545,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 544,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 523,
                                      "src": "1562:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1552:12:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1544:21:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Member_$394_storage",
                                    "typeString": "struct Organization.Member storage ref"
                                  }
                                },
                                "id": 547,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "memberName": "role",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 391,
                                "src": "1544:26:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 548,
                                  "name": "roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 508,
                                  "src": "1573:5:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 550,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 549,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 523,
                                  "src": "1579:1:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1573:8:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "src": "1544:37:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 552,
                            "nodeType": "ExpressionStatement",
                            "src": "1544:37:4"
                          },
                          {
                            "eventCall": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 554,
                                    "name": "addresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 505,
                                    "src": "1614:9:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 556,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 555,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 523,
                                    "src": "1624:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1614:12:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 557,
                                    "name": "roles",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 508,
                                    "src": "1628:5:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  "id": 559,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 558,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 523,
                                    "src": "1634:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1628:8:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 553,
                                "name": "SetMemberRole",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 381,
                                "src": "1600:13:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                                  "typeString": "function (address,bytes32)"
                                }
                              },
                              "id": 560,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1600:37:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 561,
                            "nodeType": "EmitStatement",
                            "src": "1595:42:4"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 526,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "1453:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 527,
                            "name": "addresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 505,
                            "src": "1457:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1457:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1453:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 563,
                      "initializationExpression": {
                        "assignments": [
                          523
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 523,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 563,
                            "src": "1439:8:4",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            },
                            "typeName": {
                              "id": 522,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "1439:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 525,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1450:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1439:12:4"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 531,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1475:3:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 530,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "1477:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "id": 532,
                        "nodeType": "ExpressionStatement",
                        "src": "1475:3:4"
                      },
                      "nodeType": "ForStatement",
                      "src": "1434:214:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 565,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 511,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 510,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "1313:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1313:9:4"
                  }
                ],
                "name": "addOrUpdateMembers",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 509,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 505,
                      "name": "addresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 565,
                      "src": "1254:26:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 503,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1254:7:4",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 504,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1254:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 508,
                      "name": "roles",
                      "nodeType": "VariableDeclaration",
                      "scope": 565,
                      "src": "1282:22:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 506,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1282:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 507,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1282:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1253:52:4"
                },
                "returnParameters": {
                  "id": 512,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1323:0:4"
                },
                "scope": 651,
                "src": "1226:428:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 592,
                  "nodeType": "Block",
                  "src": "1727:112:4",
                  "statements": [
                    {
                      "body": {
                        "id": 590,
                        "nodeType": "Block",
                        "src": "1782:51:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 585,
                                    "name": "_members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 568,
                                    "src": "1810:8:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 587,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 586,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 574,
                                    "src": "1819:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1810:11:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 584,
                                "name": "_removeMember",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 650,
                                "src": "1796:13:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                  "typeString": "function (address)"
                                }
                              },
                              "id": 588,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1796:26:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 589,
                            "nodeType": "ExpressionStatement",
                            "src": "1796:26:4"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 577,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 574,
                          "src": "1756:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 578,
                            "name": "_members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 568,
                            "src": "1760:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1756:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 591,
                      "initializationExpression": {
                        "assignments": [
                          574
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 574,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 591,
                            "src": "1742:8:4",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            },
                            "typeName": {
                              "id": 573,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "1742:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 576,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 575,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1753:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1742:12:4"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1777:3:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 581,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 574,
                            "src": "1779:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "id": 583,
                        "nodeType": "ExpressionStatement",
                        "src": "1777:3:4"
                      },
                      "nodeType": "ForStatement",
                      "src": "1737:96:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 593,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 571,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 570,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "1717:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1717:9:4"
                  }
                ],
                "name": "removeMembers",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 569,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 568,
                      "name": "_members",
                      "nodeType": "VariableDeclaration",
                      "scope": 593,
                      "src": "1683:25:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 566,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1683:7:4",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 567,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1683:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1682:27:4"
                },
                "returnParameters": {
                  "id": 572,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1727:0:4"
                },
                "scope": 651,
                "src": "1660:179:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 613,
                  "nodeType": "Block",
                  "src": "1907:137:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 601,
                                "name": "members",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 410,
                                "src": "1925:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                  "typeString": "mapping(address => struct Organization.Member storage ref)"
                                }
                              },
                              "id": 603,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 602,
                                "name": "member",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 595,
                                "src": "1933:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1925:15:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Member_$394_storage",
                                "typeString": "struct Organization.Member storage ref"
                              }
                            },
                            "id": 604,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hasData",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 393,
                            "src": "1925:23:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a204e6f742061206d656d626572206f6620746865206f7267616e697a6174696f6e2e",
                            "id": 605,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1950:49:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9d54d81c0d4dabf37bb57d25c0ac5c07e9075cc0e20b4c0935502d5d2333d53c",
                              "typeString": "literal_string \"Organization: Not a member of the organization.\""
                            },
                            "value": "Organization: Not a member of the organization."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_9d54d81c0d4dabf37bb57d25c0ac5c07e9075cc0e20b4c0935502d5d2333d53c",
                              "typeString": "literal_string \"Organization: Not a member of the organization.\""
                            }
                          ],
                          "id": 600,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1917:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1917:83:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 607,
                      "nodeType": "ExpressionStatement",
                      "src": "1917:83:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 608,
                            "name": "members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 410,
                            "src": "2017:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                              "typeString": "mapping(address => struct Organization.Member storage ref)"
                            }
                          },
                          "id": 610,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 609,
                            "name": "member",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 595,
                            "src": "2025:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2017:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Member_$394_storage",
                            "typeString": "struct Organization.Member storage ref"
                          }
                        },
                        "id": 611,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "role",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 391,
                        "src": "2017:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "functionReturnParameters": 599,
                      "id": 612,
                      "nodeType": "Return",
                      "src": "2010:27:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 614,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "getRole",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 596,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 595,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 614,
                      "src": "1862:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 594,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1862:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1861:16:4"
                },
                "returnParameters": {
                  "id": 599,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 598,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 614,
                      "src": "1898:7:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 597,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1898:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1897:9:4"
                },
                "scope": 651,
                "src": "1845:199:4",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 626,
                  "nodeType": "Block",
                  "src": "2073:101:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 617,
                                "name": "tx",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1419,
                                "src": "2091:2:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_transaction",
                                  "typeString": "tx"
                                }
                              },
                              "id": 618,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "origin",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2091:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 619,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 818,
                                "src": "2104:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 620,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2104:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2091:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a2074782e6f726967696e206973206e6f7420746865206f776e6572",
                            "id": 622,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2113:42:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_4e9f676274972057c73ad9e3b50fe192c1b5696f49dae4e27e959ec45afb42f7",
                              "typeString": "literal_string \"Organization: tx.origin is not the owner\""
                            },
                            "value": "Organization: tx.origin is not the owner"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_4e9f676274972057c73ad9e3b50fe192c1b5696f49dae4e27e959ec45afb42f7",
                              "typeString": "literal_string \"Organization: tx.origin is not the owner\""
                            }
                          ],
                          "id": 616,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "2083:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2083:73:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 624,
                      "nodeType": "ExpressionStatement",
                      "src": "2083:73:4"
                    },
                    {
                      "id": 625,
                      "nodeType": "PlaceholderStatement",
                      "src": "2166:1:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 627,
                "name": "onlyManager",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 615,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2070:2:4"
                },
                "src": "2050:124:4",
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 649,
                  "nodeType": "Block",
                  "src": "2236:131:4",
                  "statements": [
                    {
                      "condition": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 410,
                            "src": "2250:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                              "typeString": "mapping(address => struct Organization.Member storage ref)"
                            }
                          },
                          "id": 636,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 635,
                            "name": "member",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 629,
                            "src": "2258:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2250:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Member_$394_storage",
                            "typeString": "struct Organization.Member storage ref"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "hasData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 393,
                        "src": "2250:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": null,
                      "id": 648,
                      "nodeType": "IfStatement",
                      "src": "2246:115:4",
                      "trueBody": {
                        "id": 647,
                        "nodeType": "Block",
                        "src": "2275:86:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 641,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "delete",
                              "prefix": true,
                              "src": "2289:22:4",
                              "subExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 638,
                                  "name": "members",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 410,
                                  "src": "2296:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                    "typeString": "mapping(address => struct Organization.Member storage ref)"
                                  }
                                },
                                "id": 640,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 639,
                                  "name": "member",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 629,
                                  "src": "2304:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "2296:15:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Member_$394_storage",
                                  "typeString": "struct Organization.Member storage ref"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 642,
                            "nodeType": "ExpressionStatement",
                            "src": "2289:22:4"
                          },
                          {
                            "eventCall": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 644,
                                  "name": "member",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 629,
                                  "src": "2343:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 643,
                                "name": "RemoveMember",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 385,
                                "src": "2330:12:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                  "typeString": "function (address)"
                                }
                              },
                              "id": 645,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2330:20:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 646,
                            "nodeType": "EmitStatement",
                            "src": "2325:25:4"
                          }
                        ]
                      }
                    }
                  ]
                },
                "documentation": null,
                "id": 650,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 632,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 631,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "2226:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2226:9:4"
                  }
                ],
                "name": "_removeMember",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 630,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 629,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 650,
                      "src": "2203:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 628,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2203:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2202:16:4"
                },
                "returnParameters": {
                  "id": 633,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2236:0:4"
                },
                "scope": 651,
                "src": "2180:187:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 652,
            "src": "178:2192:4"
          }
        ],
        "src": "0:2370:4"
      },
      "legacyAST": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol",
        "exportedSymbols": {
          "Organization": [
            651
          ]
        },
        "id": 652,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 370,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:4"
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "id": 371,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 896,
            "src": "26:63:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "id": 372,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 1293,
            "src": "90:63:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/Daos.sol",
            "file": "../Daos.sol",
            "id": 373,
            "nodeType": "ImportDirective",
            "scope": 652,
            "sourceUnit": 96,
            "src": "154:21:4",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 374,
                  "name": "Ownable",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 895,
                  "src": "203:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Ownable_$895",
                    "typeString": "contract Ownable"
                  }
                },
                "id": 375,
                "nodeType": "InheritanceSpecifier",
                "src": "203:7:4"
              }
            ],
            "contractDependencies": [
              895
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 651,
            "linearizedBaseContracts": [
              651,
              895
            ],
            "name": "Organization",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "anonymous": false,
                "documentation": null,
                "id": 381,
                "name": "SetMemberRole",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 380,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 377,
                      "indexed": false,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 381,
                      "src": "238:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 376,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "238:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 379,
                      "indexed": false,
                      "name": "role",
                      "nodeType": "VariableDeclaration",
                      "scope": 381,
                      "src": "254:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 378,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "254:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "237:30:4"
                },
                "src": "218:50:4"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 385,
                "name": "RemoveMember",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 384,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 383,
                      "indexed": false,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 385,
                      "src": "292:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 382,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "292:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "291:16:4"
                },
                "src": "273:35:4"
              },
              {
                "anonymous": false,
                "documentation": null,
                "id": 389,
                "name": "SetToken",
                "nodeType": "EventDefinition",
                "parameters": {
                  "id": 388,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 387,
                      "indexed": false,
                      "name": "token",
                      "nodeType": "VariableDeclaration",
                      "scope": 389,
                      "src": "328:13:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 386,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "328:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "327:15:4"
                },
                "src": "313:30:4"
              },
              {
                "canonicalName": "Organization.Member",
                "id": 394,
                "members": [
                  {
                    "constant": false,
                    "id": 391,
                    "name": "role",
                    "nodeType": "VariableDeclaration",
                    "scope": 394,
                    "src": "373:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 390,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "373:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 393,
                    "name": "hasData",
                    "nodeType": "VariableDeclaration",
                    "scope": 394,
                    "src": "395:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 392,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "395:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "Member",
                "nodeType": "StructDefinition",
                "scope": 651,
                "src": "349:65:4",
                "visibility": "public"
              },
              {
                "canonicalName": "Organization.SubAccount",
                "id": 399,
                "members": [
                  {
                    "constant": false,
                    "id": 396,
                    "name": "desc",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "448:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 395,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "448:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 398,
                    "name": "hasData",
                    "nodeType": "VariableDeclaration",
                    "scope": 399,
                    "src": "470:12:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 397,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "470:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "name": "SubAccount",
                "nodeType": "StructDefinition",
                "scope": 651,
                "src": "420:69:4",
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 402,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "495:34:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 400,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "495:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 401,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "528:1:4",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 404,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "535:18:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 403,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "535:6:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 406,
                "name": "token",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "559:18:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC20_$1292",
                  "typeString": "contract ERC20"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 405,
                  "name": "ERC20",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1292,
                  "src": "559:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$1292",
                    "typeString": "contract ERC20"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 410,
                "name": "members",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "583:41:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                  "typeString": "mapping(address => struct Organization.Member)"
                },
                "typeName": {
                  "id": 409,
                  "keyType": {
                    "id": 407,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "591:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "583:26:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                    "typeString": "mapping(address => struct Organization.Member)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 408,
                    "name": "Member",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 394,
                    "src": "602:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Member_$394_storage_ptr",
                      "typeString": "struct Organization.Member"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 414,
                "name": "subAccounts",
                "nodeType": "VariableDeclaration",
                "scope": 651,
                "src": "630:49:4",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_SubAccount_$399_storage_$",
                  "typeString": "mapping(address => struct Organization.SubAccount)"
                },
                "typeName": {
                  "id": 413,
                  "keyType": {
                    "id": 411,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "638:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "630:30:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_SubAccount_$399_storage_$",
                    "typeString": "mapping(address => struct Organization.SubAccount)"
                  },
                  "valueType": {
                    "contractScope": null,
                    "id": 412,
                    "name": "SubAccount",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 399,
                    "src": "649:10:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_SubAccount_$399_storage_ptr",
                      "typeString": "struct Organization.SubAccount"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 472,
                  "nodeType": "Block",
                  "src": "738:270:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 423,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 421,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 404,
                          "src": "748:4:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 422,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 418,
                          "src": "755:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "748:12:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 424,
                      "nodeType": "ExpressionStatement",
                      "src": "748:12:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 429,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1433,
                                "src": "793:4:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Organization_$651",
                                  "typeString": "contract Organization"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Organization_$651",
                                  "typeString": "contract Organization"
                                }
                              ],
                              "id": 428,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "785:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "785:13:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 418,
                            "src": "800:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 425,
                            "name": "_daos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 416,
                            "src": "770:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Daos_$95",
                              "typeString": "contract Daos"
                            }
                          },
                          "id": 427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "register",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 94,
                          "src": "770:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (address,string memory) external"
                          }
                        },
                        "id": 432,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "770:36:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 433,
                      "nodeType": "ExpressionStatement",
                      "src": "770:36:4"
                    },
                    {
                      "assignments": [
                        437
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 437,
                          "name": "addrs",
                          "nodeType": "VariableDeclaration",
                          "scope": 472,
                          "src": "817:22:4",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                            "typeString": "address[]"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 435,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "817:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 436,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "817:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                              "typeString": "address[]"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 443,
                      "initialValue": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 441,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "856:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "id": 440,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "842:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                            "typeString": "function (uint256) pure returns (address[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 438,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "846:7:4",
                              "stateMutability": "nonpayable",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 439,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "846:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                              "typeString": "address[]"
                            }
                          }
                        },
                        "id": 442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "842:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_memory",
                          "typeString": "address[] memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "817:41:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 444,
                            "name": "addrs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 437,
                            "src": "868:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 446,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 445,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "874:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "868:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 447,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1407,
                            "src": "879:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 448,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "879:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "868:21:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 450,
                      "nodeType": "ExpressionStatement",
                      "src": "868:21:4"
                    },
                    {
                      "assignments": [
                        454
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 454,
                          "name": "rs",
                          "nodeType": "VariableDeclaration",
                          "scope": 472,
                          "src": "899:19:4",
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                            "typeString": "bytes32[]"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 452,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "899:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 453,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "899:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                              "typeString": "bytes32[]"
                            }
                          },
                          "value": null,
                          "visibility": "internal"
                        }
                      ],
                      "id": 460,
                      "initialValue": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "935:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            }
                          ],
                          "id": 457,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "NewExpression",
                          "src": "921:13:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_bytes32_$dyn_memory_$",
                            "typeString": "function (uint256) pure returns (bytes32[] memory)"
                          },
                          "typeName": {
                            "baseType": {
                              "id": 455,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "925:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 456,
                            "length": null,
                            "nodeType": "ArrayTypeName",
                            "src": "925:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                              "typeString": "bytes32[]"
                            }
                          }
                        },
                        "id": 459,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "921:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_memory",
                          "typeString": "bytes32[] memory"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "899:38:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 461,
                            "name": "rs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "947:2:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          },
                          "id": 463,
                          "indexExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 462,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "950:1:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "947:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "hexValue": "6f776e6572",
                          "id": 464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "955:7:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                            "typeString": "literal_string \"owner\""
                          },
                          "value": "owner"
                        },
                        "src": "947:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 466,
                      "nodeType": "ExpressionStatement",
                      "src": "947:15:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 468,
                            "name": "addrs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 437,
                            "src": "991:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 469,
                            "name": "rs",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 454,
                            "src": "998:2:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                              "typeString": "bytes32[] memory"
                            }
                          ],
                          "id": 467,
                          "name": "addOrUpdateMembers",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 565,
                          "src": "972:18:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$__$",
                            "typeString": "function (address[] memory,bytes32[] memory)"
                          }
                        },
                        "id": 470,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "972:29:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 471,
                      "nodeType": "ExpressionStatement",
                      "src": "972:29:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 473,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 419,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 416,
                      "name": "_daos",
                      "nodeType": "VariableDeclaration",
                      "scope": 473,
                      "src": "698:10:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Daos_$95",
                        "typeString": "contract Daos"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 415,
                        "name": "Daos",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 95,
                        "src": "698:4:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Daos_$95",
                          "typeString": "contract Daos"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 418,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 473,
                      "src": "710:19:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 417,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "710:6:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "697:33:4"
                },
                "returnParameters": {
                  "id": 420,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "738:0:4"
                },
                "scope": 651,
                "src": "686:322:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 501,
                  "nodeType": "Block",
                  "src": "1065:155:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 487,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 482,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 406,
                                  "src": "1091:5:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$1292",
                                    "typeString": "contract ERC20"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC20_$1292",
                                    "typeString": "contract ERC20"
                                  }
                                ],
                                "id": 481,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1083:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 483,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1083:14:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 485,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1109:1:4",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  }
                                ],
                                "id": 484,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1101:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 486,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1101:10:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1083:28:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a20546f6b656e20686173206265656e207365742e",
                            "id": 488,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1113:35:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_1d058d440f56030934ab9e4f7fea07f4dae5a10b664b6b74c2593bd1306b5604",
                              "typeString": "literal_string \"Organization: Token has been set.\""
                            },
                            "value": "Organization: Token has been set."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_1d058d440f56030934ab9e4f7fea07f4dae5a10b664b6b74c2593bd1306b5604",
                              "typeString": "literal_string \"Organization: Token has been set.\""
                            }
                          ],
                          "id": 480,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1075:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 489,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1075:74:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 490,
                      "nodeType": "ExpressionStatement",
                      "src": "1075:74:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 491,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 406,
                          "src": "1159:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1292",
                            "typeString": "contract ERC20"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 492,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 475,
                          "src": "1167:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$1292",
                            "typeString": "contract ERC20"
                          }
                        },
                        "src": "1159:14:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1292",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 494,
                      "nodeType": "ExpressionStatement",
                      "src": "1159:14:4"
                    },
                    {
                      "eventCall": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 497,
                                "name": "_token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 475,
                                "src": "1205:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$1292",
                                  "typeString": "contract ERC20"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_ERC20_$1292",
                                  "typeString": "contract ERC20"
                                }
                              ],
                              "id": 496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1197:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 498,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1197:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 495,
                          "name": "SetToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 389,
                          "src": "1188:8:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                            "typeString": "function (address)"
                          }
                        },
                        "id": 499,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1188:25:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 500,
                      "nodeType": "EmitStatement",
                      "src": "1183:30:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 502,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 478,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 477,
                      "name": "onlyManager",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 627,
                      "src": "1053:11:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1053:11:4"
                  }
                ],
                "name": "setToken",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 476,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 475,
                      "name": "_token",
                      "nodeType": "VariableDeclaration",
                      "scope": 502,
                      "src": "1032:12:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$1292",
                        "typeString": "contract ERC20"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 474,
                        "name": "ERC20",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 1292,
                        "src": "1032:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$1292",
                          "typeString": "contract ERC20"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1031:14:4"
                },
                "returnParameters": {
                  "id": 479,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1065:0:4"
                },
                "scope": 651,
                "src": "1014:206:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 564,
                  "nodeType": "Block",
                  "src": "1323:331:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 518,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 514,
                                "name": "addresses",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 505,
                                "src": "1341:9:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1341:16:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 516,
                                "name": "roles",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 508,
                                "src": "1361:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                  "typeString": "bytes32[] memory"
                                }
                              },
                              "id": 517,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1361:12:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1341:32:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a206164644f725570646174654d656d6265727320706172616d73206572726f722e",
                            "id": 519,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1375:48:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_55ddcb371c564fd1cfd1f444a3906500632f37e3a0d295a05a7e4b2c452a1848",
                              "typeString": "literal_string \"Organization: addOrUpdateMembers params error.\""
                            },
                            "value": "Organization: addOrUpdateMembers params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_55ddcb371c564fd1cfd1f444a3906500632f37e3a0d295a05a7e4b2c452a1848",
                              "typeString": "literal_string \"Organization: addOrUpdateMembers params error.\""
                            }
                          ],
                          "id": 513,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1333:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1333:91:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 521,
                      "nodeType": "ExpressionStatement",
                      "src": "1333:91:4"
                    },
                    {
                      "body": {
                        "id": 562,
                        "nodeType": "Block",
                        "src": "1480:168:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 540,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 533,
                                    "name": "members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 410,
                                    "src": "1494:7:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                      "typeString": "mapping(address => struct Organization.Member storage ref)"
                                    }
                                  },
                                  "id": 537,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 534,
                                      "name": "addresses",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 505,
                                      "src": "1502:9:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                      }
                                    },
                                    "id": 536,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 535,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 523,
                                      "src": "1512:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1502:12:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1494:21:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Member_$394_storage",
                                    "typeString": "struct Organization.Member storage ref"
                                  }
                                },
                                "id": 538,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "memberName": "hasData",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 393,
                                "src": "1494:29:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "hexValue": "74727565",
                                "id": 539,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1526:4:4",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "true"
                              },
                              "src": "1494:36:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 541,
                            "nodeType": "ExpressionStatement",
                            "src": "1494:36:4"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 551,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 542,
                                    "name": "members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 410,
                                    "src": "1544:7:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                      "typeString": "mapping(address => struct Organization.Member storage ref)"
                                    }
                                  },
                                  "id": 546,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 543,
                                      "name": "addresses",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 505,
                                      "src": "1552:9:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                      }
                                    },
                                    "id": 545,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 544,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 523,
                                      "src": "1562:1:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint16",
                                        "typeString": "uint16"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1552:12:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1544:21:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Member_$394_storage",
                                    "typeString": "struct Organization.Member storage ref"
                                  }
                                },
                                "id": 547,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "memberName": "role",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 391,
                                "src": "1544:26:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 548,
                                  "name": "roles",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 508,
                                  "src": "1573:5:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                    "typeString": "bytes32[] memory"
                                  }
                                },
                                "id": 550,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 549,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 523,
                                  "src": "1579:1:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1573:8:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              "src": "1544:37:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "id": 552,
                            "nodeType": "ExpressionStatement",
                            "src": "1544:37:4"
                          },
                          {
                            "eventCall": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 554,
                                    "name": "addresses",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 505,
                                    "src": "1614:9:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 556,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 555,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 523,
                                    "src": "1624:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1614:12:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 557,
                                    "name": "roles",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 508,
                                    "src": "1628:5:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                      "typeString": "bytes32[] memory"
                                    }
                                  },
                                  "id": 559,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 558,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 523,
                                    "src": "1634:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1628:8:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                ],
                                "id": 553,
                                "name": "SetMemberRole",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 381,
                                "src": "1600:13:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes32_$returns$__$",
                                  "typeString": "function (address,bytes32)"
                                }
                              },
                              "id": 560,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1600:37:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 561,
                            "nodeType": "EmitStatement",
                            "src": "1595:42:4"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 526,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 523,
                          "src": "1453:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 527,
                            "name": "addresses",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 505,
                            "src": "1457:9:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1457:16:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1453:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 563,
                      "initializationExpression": {
                        "assignments": [
                          523
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 523,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 563,
                            "src": "1439:8:4",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            },
                            "typeName": {
                              "id": 522,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "1439:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 525,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1450:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1439:12:4"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 531,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1475:3:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 530,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 523,
                            "src": "1477:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "id": 532,
                        "nodeType": "ExpressionStatement",
                        "src": "1475:3:4"
                      },
                      "nodeType": "ForStatement",
                      "src": "1434:214:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 565,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 511,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 510,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "1313:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1313:9:4"
                  }
                ],
                "name": "addOrUpdateMembers",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 509,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 505,
                      "name": "addresses",
                      "nodeType": "VariableDeclaration",
                      "scope": 565,
                      "src": "1254:26:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 503,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1254:7:4",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 504,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1254:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 508,
                      "name": "roles",
                      "nodeType": "VariableDeclaration",
                      "scope": 565,
                      "src": "1282:22:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                        "typeString": "bytes32[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 506,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "1282:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "id": 507,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1282:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                          "typeString": "bytes32[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1253:52:4"
                },
                "returnParameters": {
                  "id": 512,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1323:0:4"
                },
                "scope": 651,
                "src": "1226:428:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 592,
                  "nodeType": "Block",
                  "src": "1727:112:4",
                  "statements": [
                    {
                      "body": {
                        "id": 590,
                        "nodeType": "Block",
                        "src": "1782:51:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 585,
                                    "name": "_members",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 568,
                                    "src": "1810:8:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 587,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 586,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 574,
                                    "src": "1819:1:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint16",
                                      "typeString": "uint16"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1810:11:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 584,
                                "name": "_removeMember",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 650,
                                "src": "1796:13:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                                  "typeString": "function (address)"
                                }
                              },
                              "id": 588,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1796:26:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 589,
                            "nodeType": "ExpressionStatement",
                            "src": "1796:26:4"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 580,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 577,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 574,
                          "src": "1756:1:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 578,
                            "name": "_members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 568,
                            "src": "1760:8:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 579,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1760:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1756:19:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 591,
                      "initializationExpression": {
                        "assignments": [
                          574
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 574,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 591,
                            "src": "1742:8:4",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            },
                            "typeName": {
                              "id": 573,
                              "name": "uint16",
                              "nodeType": "ElementaryTypeName",
                              "src": "1742:6:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 576,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 575,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1753:1:4",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1742:12:4"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1777:3:4",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 581,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 574,
                            "src": "1779:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        },
                        "id": 583,
                        "nodeType": "ExpressionStatement",
                        "src": "1777:3:4"
                      },
                      "nodeType": "ForStatement",
                      "src": "1737:96:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 593,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 571,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 570,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "1717:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "1717:9:4"
                  }
                ],
                "name": "removeMembers",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 569,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 568,
                      "name": "_members",
                      "nodeType": "VariableDeclaration",
                      "scope": 593,
                      "src": "1683:25:4",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 566,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1683:7:4",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 567,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1683:9:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1682:27:4"
                },
                "returnParameters": {
                  "id": 572,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "1727:0:4"
                },
                "scope": 651,
                "src": "1660:179:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 613,
                  "nodeType": "Block",
                  "src": "1907:137:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 601,
                                "name": "members",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 410,
                                "src": "1925:7:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                  "typeString": "mapping(address => struct Organization.Member storage ref)"
                                }
                              },
                              "id": 603,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 602,
                                "name": "member",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 595,
                                "src": "1933:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "1925:15:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Member_$394_storage",
                                "typeString": "struct Organization.Member storage ref"
                              }
                            },
                            "id": 604,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "hasData",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 393,
                            "src": "1925:23:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a204e6f742061206d656d626572206f6620746865206f7267616e697a6174696f6e2e",
                            "id": 605,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1950:49:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_9d54d81c0d4dabf37bb57d25c0ac5c07e9075cc0e20b4c0935502d5d2333d53c",
                              "typeString": "literal_string \"Organization: Not a member of the organization.\""
                            },
                            "value": "Organization: Not a member of the organization."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_9d54d81c0d4dabf37bb57d25c0ac5c07e9075cc0e20b4c0935502d5d2333d53c",
                              "typeString": "literal_string \"Organization: Not a member of the organization.\""
                            }
                          ],
                          "id": 600,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1917:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1917:83:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 607,
                      "nodeType": "ExpressionStatement",
                      "src": "1917:83:4"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 608,
                            "name": "members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 410,
                            "src": "2017:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                              "typeString": "mapping(address => struct Organization.Member storage ref)"
                            }
                          },
                          "id": 610,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 609,
                            "name": "member",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 595,
                            "src": "2025:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2017:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Member_$394_storage",
                            "typeString": "struct Organization.Member storage ref"
                          }
                        },
                        "id": 611,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "role",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 391,
                        "src": "2017:20:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "functionReturnParameters": 599,
                      "id": 612,
                      "nodeType": "Return",
                      "src": "2010:27:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 614,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "getRole",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 596,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 595,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 614,
                      "src": "1862:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 594,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1862:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1861:16:4"
                },
                "returnParameters": {
                  "id": 599,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 598,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 614,
                      "src": "1898:7:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 597,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1898:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1897:9:4"
                },
                "scope": 651,
                "src": "1845:199:4",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 626,
                  "nodeType": "Block",
                  "src": "2073:101:4",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 621,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 617,
                                "name": "tx",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1419,
                                "src": "2091:2:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_transaction",
                                  "typeString": "tx"
                                }
                              },
                              "id": 618,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "origin",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2091:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 619,
                                "name": "owner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 818,
                                "src": "2104:5:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                                  "typeString": "function () view returns (address)"
                                }
                              },
                              "id": 620,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2104:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2091:20:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267616e697a6174696f6e3a2074782e6f726967696e206973206e6f7420746865206f776e6572",
                            "id": 622,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2113:42:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_4e9f676274972057c73ad9e3b50fe192c1b5696f49dae4e27e959ec45afb42f7",
                              "typeString": "literal_string \"Organization: tx.origin is not the owner\""
                            },
                            "value": "Organization: tx.origin is not the owner"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_4e9f676274972057c73ad9e3b50fe192c1b5696f49dae4e27e959ec45afb42f7",
                              "typeString": "literal_string \"Organization: tx.origin is not the owner\""
                            }
                          ],
                          "id": 616,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "2083:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2083:73:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 624,
                      "nodeType": "ExpressionStatement",
                      "src": "2083:73:4"
                    },
                    {
                      "id": 625,
                      "nodeType": "PlaceholderStatement",
                      "src": "2166:1:4"
                    }
                  ]
                },
                "documentation": null,
                "id": 627,
                "name": "onlyManager",
                "nodeType": "ModifierDefinition",
                "parameters": {
                  "id": 615,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2070:2:4"
                },
                "src": "2050:124:4",
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 649,
                  "nodeType": "Block",
                  "src": "2236:131:4",
                  "statements": [
                    {
                      "condition": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "members",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 410,
                            "src": "2250:7:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                              "typeString": "mapping(address => struct Organization.Member storage ref)"
                            }
                          },
                          "id": 636,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 635,
                            "name": "member",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 629,
                            "src": "2258:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2250:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Member_$394_storage",
                            "typeString": "struct Organization.Member storage ref"
                          }
                        },
                        "id": 637,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "hasData",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 393,
                        "src": "2250:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": null,
                      "id": 648,
                      "nodeType": "IfStatement",
                      "src": "2246:115:4",
                      "trueBody": {
                        "id": 647,
                        "nodeType": "Block",
                        "src": "2275:86:4",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 641,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "delete",
                              "prefix": true,
                              "src": "2289:22:4",
                              "subExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 638,
                                  "name": "members",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 410,
                                  "src": "2296:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Member_$394_storage_$",
                                    "typeString": "mapping(address => struct Organization.Member storage ref)"
                                  }
                                },
                                "id": 640,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 639,
                                  "name": "member",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 629,
                                  "src": "2304:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": true,
                                "nodeType": "IndexAccess",
                                "src": "2296:15:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Member_$394_storage",
                                  "typeString": "struct Organization.Member storage ref"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 642,
                            "nodeType": "ExpressionStatement",
                            "src": "2289:22:4"
                          },
                          {
                            "eventCall": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 644,
                                  "name": "member",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 629,
                                  "src": "2343:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 643,
                                "name": "RemoveMember",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 385,
                                "src": "2330:12:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                  "typeString": "function (address)"
                                }
                              },
                              "id": 645,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2330:20:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 646,
                            "nodeType": "EmitStatement",
                            "src": "2325:25:4"
                          }
                        ]
                      }
                    }
                  ]
                },
                "documentation": null,
                "id": 650,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 632,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 631,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "2226:9:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "2226:9:4"
                  }
                ],
                "name": "_removeMember",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 630,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 629,
                      "name": "member",
                      "nodeType": "VariableDeclaration",
                      "scope": 650,
                      "src": "2203:14:4",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 628,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2203:7:4",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2202:16:4"
                },
                "returnParameters": {
                  "id": 633,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "2236:0:4"
                },
                "scope": 651,
                "src": "2180:187:4",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 652,
            "src": "178:2192:4"
          }
        ],
        "src": "0:2370:4"
      },
      "compiler": {
        "name": "solc",
        "version": "0.5.11+commit.c082d0b4.Emscripten.clang"
      },
      "networks": {},
      "schemaVersion": "3.0.15",
      "updatedAt": "2019-11-05T03:22:27.816Z",
      "devdoc": {
        "methods": {
          "isOwner()": {
            "details": "Returns true if the caller is the current owner."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        }
      },
      "userdoc": {
        "methods": {}
      }
    }
  },
  "OrgToken": {
    "1": {
      "contractName": "OrgToken",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "version",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "isOwner",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "contract Organization",
              "name": "_org",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_totalSupply",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "mint",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "transferExt",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address[]",
              "name": "spenders",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "name": "approveExt",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "recipients",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "name": "transferFromExt",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.11+commit.c082d0b4\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"spenders\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"approveExt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address[]\",\"name\":\"recipients\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"transferFromExt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"recipients\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"}],\"name\":\"transferExt\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Organization\",\"name\":\"_org\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_totalSupply\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See `IERC20.allowance`.\"},\"approve(address,uint256)\":{\"details\":\"See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See `IERC20.balanceOf`.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"isOwner()\":{\"details\":\"Returns true if the caller is the current owner.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"totalSupply()\":{\"details\":\"See `IERC20.totalSupply`.\"},\"transfer(address,uint256)\":{\"details\":\"See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/OrgToken.sol\":\"OrgToken\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/Daos.sol\":{\"keccak256\":\"0xbf9599f3b6ba78adf5153db606ad6d145a5e4c2a65988729b4f4b05f4d74f137\",\"urls\":[\"bzz-raw://21d0366b68b152d56a2971b9485fa74235d0a7be2f27539c048939eabcafcb8b\",\"dweb:/ipfs/QmZ55FMLPN7YM17NT7VgFbcoovnAd4hTdxmuopYk9UZq5o\"]},\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/OrgToken.sol\":{\"keccak256\":\"0x34851c67bf3aa0aad20aedeff586484897340cc426da804744ebfa34de0c9254\",\"urls\":[\"bzz-raw://5b1a7a3b7bd21c5b738458ff80d76d9c34a7f0880b934f9748d5922447093523\",\"dweb:/ipfs/QmZPF8bg1HygqQRetVxgbhgf9bkAdgmuqbUZWaeo3Dqupz\"]},\"/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol\":{\"keccak256\":\"0x75659bbe70f00546a86ac3b3a98fcf3f132084c471a29fa6b00634f50808ba48\",\"urls\":[\"bzz-raw://eec968a7aa6717fd8bf863967f1d12343894f2a1e40687d0b7debef3f96d6f2c\",\"dweb:/ipfs/QmbW1N1L6EYve55MD4LgkMKJtprfGCrSQzyrrdh7zDwthj\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x4ccf2d7b51873db1ccfd54ca2adae5eac3b184f9699911ed4490438419f1c690\",\"urls\":[\"bzz-raw://d62d769b2219d5de39013093412623e624fa887f871826ea3bae6052ee893610\",\"dweb:/ipfs/QmV3yVktya1s617QmuzQR2CfuJgUi3dR2xEZY9ecmqZ2G1\"]},\"openzeppelin-solidity/contracts/ownership/Ownable.sol\":{\"keccak256\":\"0xf79fb10e8235770eb4aea7249034076a3cc9f9119ad944fc48705bae9c9d20dc\",\"urls\":[\"bzz-raw://cd3429aa9a4878dcf6c73faa32c3722f4013d4be012ece543b246faa6b50f55c\",\"dweb:/ipfs/QmS55hgTvNEAKinus19m65CB4wcymN8EiUPFpRx5tYJ1i2\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x852793a3c2f86d336a683b30d688ec3dcfc57451af5a2bf5975cda3b7191a901\",\"urls\":[\"bzz-raw://4f5b57664069671648fb81f55b0082faecdf1b2f159eec6b1fa6cef9b7d73bc5\",\"dweb:/ipfs/QmcyytaLs7zFdb4Uu7C5PmQRhQdB3wA3fUdkV6mkYfdDFH\"]},\"openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol\":{\"keccak256\":\"0xa5ebf3344a36eb60e723e0764d85251c496e15e4b2d737b56415502b559a1765\",\"urls\":[\"bzz-raw://c543fd1fc299b7d32c658c86118ff2d0e7897a7c8b9d5f576fe6c0271c28961b\",\"dweb:/ipfs/QmNMrjLnsC4JP54aXLHhpra5NPTAs8rrd2bgXfYYYdJMhS\"]},\"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x90e8c2521653bbb1768b05889c5760031e688d9cd361f167489b89215e201b95\",\"urls\":[\"bzz-raw://d0abb99bb8bfc2bc0a89902b8ed1dc0442ad08cc78cee64c291b3df6a27bcccc\",\"dweb:/ipfs/QmP5NaEwZthQeM2ESz4WTT3osrP7jhbvu7ocbttBi2JAw6\"]}},\"version\":1}",
      "bytecode": "0x60806040523480156200001157600080fd5b50604051620024e3380380620024e3833981810160405260808110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011f57600080fd5b838201915060208201858111156200013657600080fd5b82518660018202830111640100000000821117156200015457600080fd5b8083526020830192505050908051906020019080838360005b838110156200018a5780820151818401526020810190506200016d565b50505050905090810190601f168015620001b85780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a38260049080519060200190620002a2929190620005c4565b508160059080519060200190620002bb929190620005c4565b50620002ce33826200037160201b60201c565b8373ffffffffffffffffffffffffffffffffffffffff1663144fa6d7306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156200034e57600080fd5b505af115801562000363573d6000803e3d6000fd5b505050505050505062000673565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b62000431816002546200053b60201b620019821790919060201c565b6002819055506200048f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200053b60201b620019821790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080828401905083811015620005ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200060757805160ff191683800117855562000638565b8280016001018555821562000638579182015b82811115620006375782518255916020019190600101906200061a565b5b5090506200064791906200064b565b5090565b6200067091905b808211156200066c57600081600090555060010162000652565b5090565b90565b611e6080620006836000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad57806398ae6aab1161007157806398ae6aab14610811578063a457c2d714610975578063a9059cbb146109db578063dd62ed3e14610a41578063f2fde38b14610ab95761012c565b806370a08231146106c0578063715018a6146107185780638da5cb5b146107225780638f32d59b1461076c57806395d89b411461078e5761012c565b8063313ce567116100f4578063313ce56714610422578063395093511461044657806340c10f19146104ac5780634fe1d0e41461051257806354fd4d50146106965761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a57806323b872dd146102385780632971c307146102be575b600080fd5b610139610afd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b9b565b604051808215151515815260200191505060405180910390f35b610222610bb2565b6040518082815260200191505060405180910390f35b6102a46004803603606081101561024e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bbc565b604051808215151515815260200191505060405180910390f35b610408600480360360408110156102d457600080fd5b81019080803590602001906401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184602083028401116401000000008311171561032557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561038557600080fd5b82018360208201111561039757600080fd5b803590602001918460208302840111640100000000831117156103b957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c6d565b604051808215151515815260200191505060405180910390f35b61042a610d31565b604051808260ff1660ff16815260200191505060405180910390f35b6104926004803603604081101561045c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d36565b604051808215151515815260200191505060405180910390f35b6104f8600480360360408110156104c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ddb565b604051808215151515815260200191505060405180910390f35b61067c6004803603606081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561056557600080fd5b82018360208201111561057757600080fd5b8035906020019184602083028401116401000000008311171561059957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105f957600080fd5b82018360208201111561060b57600080fd5b8035906020019184602083028401116401000000008311171561062d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610e6b565b604051808215151515815260200191505060405180910390f35b61069e610f31565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b610702600480360360208110156106d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f36565b6040518082815260200191505060405180910390f35b610720610f7e565b005b61072a6110b9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107746110e3565b604051808215151515815260200191505060405180910390f35b61079661113b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107d65780820151818401526020810190506107bb565b50505050905090810190601f1680156108035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61095b6004803603604081101561082757600080fd5b810190808035906020019064010000000081111561084457600080fd5b82018360208201111561085657600080fd5b8035906020019184602083028401116401000000008311171561087857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156108d857600080fd5b8201836020820111156108ea57600080fd5b8035906020019184602083028401116401000000008311171561090c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506111d9565b604051808215151515815260200191505060405180910390f35b6109c16004803603604081101561098b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061129d565b604051808215151515815260200191505060405180910390f35b610a27600480360360408110156109f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611342565b604051808215151515815260200191505060405180910390f35b610aa360048036036040811015610a5757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611359565b6040518082815260200191505060405180910390f35b610afb60048036036020811015610acf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e0565b005b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b505050505081565b6000610ba8338484611466565b6001905092915050565b6000600254905090565b6000610bc984848461165d565b610c628433610c5d85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b611466565b600190509392505050565b60008151835114610cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d776022913960400191505060405180910390fd5b60008090505b83518163ffffffff161015610d2657610d1a848263ffffffff1681518110610cf357fe5b6020026020010151848363ffffffff1681518110610d0d57fe5b6020026020010151610b9b565b50806001019050610ccf565b506001905092915050565b601281565b6000610dd13384610dcc85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b611466565b6001905092915050565b6000610de56110e3565b610e57576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610e618383611a0a565b6001905092915050565b60008151835114610ec7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180611d996027913960400191505060405180910390fd5b60008090505b83518163ffffffff161015610f2557610f1985858363ffffffff1681518110610ef257fe5b6020026020010151858463ffffffff1681518110610f0c57fe5b6020026020010151610bbc565b50806001019050610ecd565b50600190509392505050565b600181565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610f866110e3565b610ff8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d15780601f106111a6576101008083540402835291602001916111d1565b820191906000526020600020905b8154815290600101906020018083116111b457829003601f168201915b505050505081565b60008151835114611235576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611e096023913960400191505060405180910390fd5b60008090505b83518163ffffffff16101561129257611286848263ffffffff168151811061125f57fe5b6020026020010151848363ffffffff168151811061127957fe5b6020026020010151611342565b5080600101905061123b565b506001905092915050565b6000611338338461133385600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b611466565b6001905092915050565b600061134f33848461165d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6113e86110e3565b61145a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61146381611bc5565b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611de56024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611572576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d556022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611dc06025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611769576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611d0c6023913960400191505060405180910390fd5b6117ba816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061184d816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600082821115611971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015611a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611ac28160025461198290919063ffffffff16565b600281905550611b19816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611d2f6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734f7267546f6b656e3a20617070726f766545787420706172616d73206572726f722e4f7267546f6b656e3a207472616e7366657246726f6d45787420706172616d73206572726f722e45524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573734f7267546f6b656e3a207472616e7366657245787420706172616d73206572726f722ea265627a7a72315820811b69341cd1ed6044d37ac7c33dd362c69980a4436b260bed6f8736febc4ca964736f6c634300050b0032",
      "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad57806398ae6aab1161007157806398ae6aab14610811578063a457c2d714610975578063a9059cbb146109db578063dd62ed3e14610a41578063f2fde38b14610ab95761012c565b806370a08231146106c0578063715018a6146107185780638da5cb5b146107225780638f32d59b1461076c57806395d89b411461078e5761012c565b8063313ce567116100f4578063313ce56714610422578063395093511461044657806340c10f19146104ac5780634fe1d0e41461051257806354fd4d50146106965761012c565b806306fdde0314610131578063095ea7b3146101b457806318160ddd1461021a57806323b872dd146102385780632971c307146102be575b600080fd5b610139610afd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610200600480360360408110156101ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b9b565b604051808215151515815260200191505060405180910390f35b610222610bb2565b6040518082815260200191505060405180910390f35b6102a46004803603606081101561024e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bbc565b604051808215151515815260200191505060405180910390f35b610408600480360360408110156102d457600080fd5b81019080803590602001906401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184602083028401116401000000008311171561032557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561038557600080fd5b82018360208201111561039757600080fd5b803590602001918460208302840111640100000000831117156103b957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610c6d565b604051808215151515815260200191505060405180910390f35b61042a610d31565b604051808260ff1660ff16815260200191505060405180910390f35b6104926004803603604081101561045c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d36565b604051808215151515815260200191505060405180910390f35b6104f8600480360360408110156104c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ddb565b604051808215151515815260200191505060405180910390f35b61067c6004803603606081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561056557600080fd5b82018360208201111561057757600080fd5b8035906020019184602083028401116401000000008311171561059957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156105f957600080fd5b82018360208201111561060b57600080fd5b8035906020019184602083028401116401000000008311171561062d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610e6b565b604051808215151515815260200191505060405180910390f35b61069e610f31565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b610702600480360360208110156106d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f36565b6040518082815260200191505060405180910390f35b610720610f7e565b005b61072a6110b9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107746110e3565b604051808215151515815260200191505060405180910390f35b61079661113b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107d65780820151818401526020810190506107bb565b50505050905090810190601f1680156108035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61095b6004803603604081101561082757600080fd5b810190808035906020019064010000000081111561084457600080fd5b82018360208201111561085657600080fd5b8035906020019184602083028401116401000000008311171561087857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156108d857600080fd5b8201836020820111156108ea57600080fd5b8035906020019184602083028401116401000000008311171561090c57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192905050506111d9565b604051808215151515815260200191505060405180910390f35b6109c16004803603604081101561098b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061129d565b604051808215151515815260200191505060405180910390f35b610a27600480360360408110156109f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611342565b604051808215151515815260200191505060405180910390f35b610aa360048036036040811015610a5757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611359565b6040518082815260200191505060405180910390f35b610afb60048036036020811015610acf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113e0565b005b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b505050505081565b6000610ba8338484611466565b6001905092915050565b6000600254905090565b6000610bc984848461165d565b610c628433610c5d85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b611466565b600190509392505050565b60008151835114610cc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d776022913960400191505060405180910390fd5b60008090505b83518163ffffffff161015610d2657610d1a848263ffffffff1681518110610cf357fe5b6020026020010151848363ffffffff1681518110610d0d57fe5b6020026020010151610b9b565b50806001019050610ccf565b506001905092915050565b601281565b6000610dd13384610dcc85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b611466565b6001905092915050565b6000610de56110e3565b610e57576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610e618383611a0a565b6001905092915050565b60008151835114610ec7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180611d996027913960400191505060405180910390fd5b60008090505b83518163ffffffff161015610f2557610f1985858363ffffffff1681518110610ef257fe5b6020026020010151858463ffffffff1681518110610f0c57fe5b6020026020010151610bbc565b50806001019050610ecd565b50600190509392505050565b600181565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610f866110e3565b610ff8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d15780601f106111a6576101008083540402835291602001916111d1565b820191906000526020600020905b8154815290600101906020018083116111b457829003601f168201915b505050505081565b60008151835114611235576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611e096023913960400191505060405180910390fd5b60008090505b83518163ffffffff16101561129257611286848263ffffffff168151811061125f57fe5b6020026020010151848363ffffffff168151811061127957fe5b6020026020010151611342565b5080600101905061123b565b506001905092915050565b6000611338338461133385600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b611466565b6001905092915050565b600061134f33848461165d565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6113e86110e3565b61145a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61146381611bc5565b50565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611de56024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611572576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611d556022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180611dc06025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611769576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611d0c6023913960400191505060405180910390fd5b6117ba816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118f990919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061184d816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600082821115611971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015611a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611aad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611ac28160025461198290919063ffffffff16565b600281905550611b19816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461198290919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611d2f6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734f7267546f6b656e3a20617070726f766545787420706172616d73206572726f722e4f7267546f6b656e3a207472616e7366657246726f6d45787420706172616d73206572726f722e45524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573734f7267546f6b656e3a207472616e7366657245787420706172616d73206572726f722ea265627a7a72315820811b69341cd1ed6044d37ac7c33dd362c69980a4436b260bed6f8736febc4ca964736f6c634300050b0032",
      "sourceMap": "257:1590:3:-;;;432:229;8:9:-1;5:2;;;30:1;27;20:12;5:2;432:229:3;;;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;432:229:3;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;432:229:3;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;432:229:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;432:229:3;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;432:229:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:10:6;657:6;;:19;;;;;;;;;;;;;;;;;;724:6;;;;;;;;;;;691:40;;720:1;691:40;;;;;;;;;;;;553:5:3;546:4;:12;;;;;;;;;;;;:::i;:::-;;577:7;568:6;:16;;;;;;;;;;;;:::i;:::-;;594:31;600:10;612:12;594:5;;;:31;;:::i;:::-;635:4;:13;;;649:4;635:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;635:19:3;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;635:19:3;;;;432:229;;;;257:1590;;5771:302:7;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;;;;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;834:176:5:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;257:1590:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "deployedSourceMap": "257:1590:3:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;257:1590:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;300:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;300:18:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2453:145:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2453:145:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1514:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3055:252;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3055:252:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1147:321:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1147:321:3;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1147:321:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1147:321:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1147:321:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1147:321:3;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1147:321:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1147:321:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1147:321:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1147:321:3;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;350:35;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3702:203:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3702:203:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;667:133:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;667:133:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1474:371;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1474:371:3;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1474:371:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1474:371:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1474:371:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1474:371:3;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1474:371:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1474:371:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;1474:371:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1474:371:3;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;391:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1661:108:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1661:108:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1599:137:6;;;:::i;:::-;;814:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1165:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;324:20:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;324:20:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;806:335;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;806:335:3;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;806:335:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;806:335:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;806:335:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;806:335:3;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;806:335:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;806:335:3;;;;;;101:9:-1;95:2;81:12;77:21;67:8;63:36;60:51;39:11;25:12;22:29;11:108;8:2;;;132:1;129;122:12;8:2;806:335:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;806:335:3;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4392:213:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4392:213:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1972:153;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1972:153:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2183:132;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2183:132:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1885:107:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1885:107:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;300:18:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2453:145:7:-;2518:4;2534:36;2543:10;2555:7;2564:5;2534:8;:36::i;:::-;2587:4;2580:11;;2453:145;;;;:::o;1514:89::-;1558:7;1584:12;;1577:19;;1514:89;:::o;3055:252::-;3144:4;3160:36;3170:6;3178:9;3189:6;3160:9;:36::i;:::-;3206:73;3215:6;3223:10;3235:43;3271:6;3235:11;:19;3247:6;3235:19;;;;;;;;;;;;;;;:31;3255:10;3235:31;;;;;;;;;;;;;;;;:35;;:43;;;;:::i;:::-;3206:8;:73::i;:::-;3296:4;3289:11;;3055:252;;;;;:::o;1147:321:3:-;1235:4;1278:6;:13;1259:8;:15;:32;1251:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1345:8;1356:1;1345:12;;1340:101;1363:8;:15;1359:1;:19;;;1340:101;;;1399:31;1407:8;1416:1;1407:11;;;;;;;;;;;;;;;;1420:6;1427:1;1420:9;;;;;;;;;;;;;;;;1399:7;:31::i;:::-;;1380:3;;;;;1340:101;;;;1457:4;1450:11;;1147:321;;;;:::o;350:35::-;383:2;350:35;:::o;3702:203:7:-;3782:4;3798:79;3807:10;3819:7;3828:48;3865:10;3828:11;:23;3840:10;3828:23;;;;;;;;;;;;;;;:32;3852:7;3828:32;;;;;;;;;;;;;;;;:36;;:48;;;;:::i;:::-;3798:8;:79::i;:::-;3894:4;3887:11;;3702:203;;;;:::o;667:133:3:-;737:4;1018:9:6;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;753:19:3;759:3;764:7;753:5;:19::i;:::-;789:4;782:11;;667:133;;;;:::o;1474:371::-;1586:4;1631:7;:14;1610:10;:17;:35;1602:87;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1704:8;1715:1;1704:12;;1699:119;1722:10;:17;1718:1;:21;;;1699:119;;;1760:47;1773:6;1781:10;1792:1;1781:13;;;;;;;;;;;;;;;;1796:7;1804:1;1796:10;;;;;;;;;;;;;;;;1760:12;:47::i;:::-;;1741:3;;;;;1699:119;;;;1834:4;1827:11;;1474:371;;;;;:::o;391:34::-;424:1;391:34;:::o;1661:108:7:-;1718:7;1744:9;:18;1754:7;1744:18;;;;;;;;;;;;;;;;1737:25;;1661:108;;;:::o;1599:137:6:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1697:1;1660:40;;1681:6;;;;;;;;;;;1660:40;;;;;;;;;;;;1727:1;1710:6;;:19;;;;;;;;;;;;;;;;;;1599:137::o;814:77::-;852:7;878:6;;;;;;;;;;;871:13;;814:77;:::o;1165:90::-;1205:4;1242:6;;;;;;;;;;;1228:20;;:10;:20;;;1221:27;;1165:90;:::o;324:20:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;806:335::-;898:4;943:7;:14;922:10;:17;:35;914:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1012:8;1023:1;1012:12;;1007:107;1030:10;:17;1026:1;:21;;;1007:107;;;1068:35;1077:10;1088:1;1077:13;;;;;;;;;;;;;;;;1092:7;1100:1;1092:10;;;;;;;;;;;;;;;;1068:8;:35::i;:::-;;1049:3;;;;;1007:107;;;;1130:4;1123:11;;806:335;;;;:::o;4392:213:7:-;4477:4;4493:84;4502:10;4514:7;4523:53;4560:15;4523:11;:23;4535:10;4523:23;;;;;;;;;;;;;;;:32;4547:7;4523:32;;;;;;;;;;;;;;;;:36;;:53;;;;:::i;:::-;4493:8;:84::i;:::-;4594:4;4587:11;;4392:213;;;;:::o;1972:153::-;2041:4;2057:40;2067:10;2079:9;2090:6;2057:9;:40::i;:::-;2114:4;2107:11;;1972:153;;;;:::o;2183:132::-;2255:7;2281:11;:18;2293:5;2281:18;;;;;;;;;;;;;;;:27;2300:7;2281:27;;;;;;;;;;;;;;;;2274:34;;2183:132;;;;:::o;1885:107:6:-;1018:9;:7;:9::i;:::-;1010:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:28;1976:8;1957:18;:28::i;:::-;1885:107;:::o;7117:329:7:-;7226:1;7209:19;;:5;:19;;;;7201:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7306:1;7287:21;;:7;:21;;;;7279:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7388:5;7358:11;:18;7370:5;7358:18;;;;;;;;;;;;;;;:27;7377:7;7358:27;;;;;;;;;;;;;;;:35;;;;7424:7;7408:31;;7417:5;7408:31;;;7433:5;7408:31;;;;;;;;;;;;;;;;;;7117:329;;;:::o;5079:422::-;5194:1;5176:20;;:6;:20;;;;5168:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5277:1;5256:23;;:9;:23;;;;5248:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5350:29;5372:6;5350:9;:17;5360:6;5350:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;5330:9;:17;5340:6;5330:17;;;;;;;;;;;;;;;:49;;;;5412:32;5437:6;5412:9;:20;5422:9;5412:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5389:9;:20;5399:9;5389:20;;;;;;;;;;;;;;;:55;;;;5476:9;5459:35;;5468:6;5459:35;;;5487:6;5459:35;;;;;;;;;;;;;;;;;;5079:422;;;:::o;1274:179:5:-;1332:7;1364:1;1359;:6;;1351:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1410:9;1426:1;1422;:5;1410:17;;1445:1;1438:8;;;1274:179;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;5771:302:7:-;5865:1;5846:21;;:7;:21;;;;5838:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5929:24;5946:6;5929:12;;:16;;:24;;;;:::i;:::-;5914:12;:39;;;;5984:30;6007:6;5984:9;:18;5994:7;5984:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;5963:9;:18;5973:7;5963:18;;;;;;;;;;;;;;;:51;;;;6050:7;6029:37;;6046:1;6029:37;;;6059:6;6029:37;;;;;;;;;;;;;;;;;;5771:302;;:::o;2093:225:6:-;2186:1;2166:22;;:8;:22;;;;2158:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2275:8;2246:38;;2267:6;;;;;;;;;;;2246:38;;;;;;;;;;;;2303:8;2294:6;;:17;;;;;;;;;;;;;;;;;;2093:225;:::o",
      "source": "pragma solidity ^0.5.11;\n\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol\";\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\nimport \"./Organization.sol\";\n\n\ncontract OrgToken is ERC20, Ownable {\n\n    string public name;\n    string public symbol;\n    uint8 public constant decimals = 18;\n    uint32 public constant version = 1;\n\n    constructor(Organization _org, string memory _name, string memory _symbol, uint256 _totalSupply) public {\n        name = _name;\n        symbol = _symbol;\n        _mint(msg.sender, _totalSupply);\n        _org.setToken(this);\n    }\n\n    function mint(address _to, uint256 _amount) public onlyOwner returns (bool) {\n        _mint(_to, _amount);\n        return true;\n    }\n\n    function transferExt(address[] memory recipients, uint256[] memory amounts) public returns (bool) {\n        require(recipients.length == amounts.length, \"OrgToken: transferExt params error.\");\n        for (uint32 i = 0; i < recipients.length; ++i) {\n            transfer(recipients[i], amounts[i]);\n        }\n        return true;\n    }\n\n    function approveExt(address[] memory spenders, uint256[] memory values) public returns (bool) {\n        require(spenders.length == values.length, \"OrgToken: approveExt params error.\");\n        for (uint32 i = 0; i < spenders.length; ++i) {\n            approve(spenders[i], values[i]);\n        }\n        return true;\n    }\n\n    function transferFromExt(address sender, address[] memory recipients, uint256[] memory amounts) public returns (bool) {\n        require(recipients.length == amounts.length, \"OrgToken: transferFromExt params error.\");\n        for (uint32 i = 0; i < recipients.length; ++i) {\n            transferFrom(sender, recipients[i], amounts[i]);\n        }\n        return true;\n    }\n}\n",
      "sourcePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/OrgToken.sol",
      "ast": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/OrgToken.sol",
        "exportedSymbols": {
          "OrgToken": [
            368
          ]
        },
        "id": 369,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 160,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:3"
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
            "id": 161,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 1324,
            "src": "26:71:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "id": 162,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 1293,
            "src": "98:63:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "id": 163,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 896,
            "src": "162:63:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol",
            "file": "./Organization.sol",
            "id": 164,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 652,
            "src": "226:28:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 165,
                  "name": "ERC20",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1292,
                  "src": "278:5:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$1292",
                    "typeString": "contract ERC20"
                  }
                },
                "id": 166,
                "nodeType": "InheritanceSpecifier",
                "src": "278:5:3"
              },
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 167,
                  "name": "Ownable",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 895,
                  "src": "285:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Ownable_$895",
                    "typeString": "contract Ownable"
                  }
                },
                "id": 168,
                "nodeType": "InheritanceSpecifier",
                "src": "285:7:3"
              }
            ],
            "contractDependencies": [
              895,
              1292,
              1392
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 368,
            "linearizedBaseContracts": [
              368,
              895,
              1292,
              1392
            ],
            "name": "OrgToken",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 170,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "300:18:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 169,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "300:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 172,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "324:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 171,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "324:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 175,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "350:35:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 173,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "350:5:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "3138",
                  "id": 174,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "383:2:3",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_18_by_1",
                    "typeString": "int_const 18"
                  },
                  "value": "18"
                },
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 178,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "391:34:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 176,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "391:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 177,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "424:1:3",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "body": {
                  "id": 209,
                  "nodeType": "Block",
                  "src": "536:125:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 189,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 170,
                          "src": "546:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 190,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "553:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "546:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 192,
                      "nodeType": "ExpressionStatement",
                      "src": "546:12:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 193,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 172,
                          "src": "568:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 194,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 184,
                          "src": "577:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "568:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 196,
                      "nodeType": "ExpressionStatement",
                      "src": "568:16:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1407,
                              "src": "600:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "600:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 200,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "612:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 197,
                          "name": "_mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "594:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "594:31:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 202,
                      "nodeType": "ExpressionStatement",
                      "src": "594:31:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 206,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1435,
                            "src": "649:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OrgToken_$368",
                              "typeString": "contract OrgToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OrgToken_$368",
                              "typeString": "contract OrgToken"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 203,
                            "name": "_org",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 180,
                            "src": "635:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Organization_$651",
                              "typeString": "contract Organization"
                            }
                          },
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "setToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 502,
                          "src": "635:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_contract$_ERC20_$1292_$returns$__$",
                            "typeString": "function (contract ERC20) external"
                          }
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "635:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 208,
                      "nodeType": "ExpressionStatement",
                      "src": "635:19:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 210,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 187,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 180,
                      "name": "_org",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "444:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Organization_$651",
                        "typeString": "contract Organization"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 179,
                        "name": "Organization",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 651,
                        "src": "444:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Organization_$651",
                          "typeString": "contract Organization"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 182,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "463:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 181,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "463:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 184,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "484:21:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 183,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "484:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 186,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "507:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 185,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "507:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "443:85:3"
                },
                "returnParameters": {
                  "id": 188,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "536:0:3"
                },
                "scope": 368,
                "src": "432:229:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 228,
                  "nodeType": "Block",
                  "src": "743:57:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 222,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 212,
                            "src": "759:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 223,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "764:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 221,
                          "name": "_mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "753:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "753:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 225,
                      "nodeType": "ExpressionStatement",
                      "src": "753:19:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "789:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 220,
                      "id": 227,
                      "nodeType": "Return",
                      "src": "782:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 229,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 217,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "718:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "718:9:3"
                  }
                ],
                "name": "mint",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 215,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 212,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "681:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 211,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "681:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 214,
                      "name": "_amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "694:15:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 213,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "694:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "680:30:3"
                },
                "returnParameters": {
                  "id": 220,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 219,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "737:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 218,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "737:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "736:6:3"
                },
                "scope": 368,
                "src": "667:133:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 273,
                  "nodeType": "Block",
                  "src": "904:237:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "recipients",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 232,
                                "src": "922:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "922:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 243,
                                "name": "amounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 235,
                                "src": "943:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "943:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "922:35:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a207472616e7366657245787420706172616d73206572726f722e",
                            "id": 246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "959:37:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f50d71f88340c27e01fadb53c22f718b6fa5952b46084b2d8a75c5c23116bdf5",
                              "typeString": "literal_string \"OrgToken: transferExt params error.\""
                            },
                            "value": "OrgToken: transferExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_f50d71f88340c27e01fadb53c22f718b6fa5952b46084b2d8a75c5c23116bdf5",
                              "typeString": "literal_string \"OrgToken: transferExt params error.\""
                            }
                          ],
                          "id": 240,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "914:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "914:83:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 248,
                      "nodeType": "ExpressionStatement",
                      "src": "914:83:3"
                    },
                    {
                      "body": {
                        "id": 269,
                        "nodeType": "Block",
                        "src": "1054:60:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 261,
                                    "name": "recipients",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 232,
                                    "src": "1077:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 263,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 262,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 250,
                                    "src": "1088:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1077:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 264,
                                    "name": "amounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 235,
                                    "src": "1092:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 266,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 265,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 250,
                                    "src": "1100:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1092:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 260,
                                "name": "transfer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 955,
                                "src": "1068:8:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1068:35:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 268,
                            "nodeType": "ExpressionStatement",
                            "src": "1068:35:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 253,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 250,
                          "src": "1026:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "recipients",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 232,
                            "src": "1030:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1030:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1026:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 270,
                      "initializationExpression": {
                        "assignments": [
                          250
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 250,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 270,
                            "src": "1012:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 249,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1012:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 252,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1023:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1012:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1049:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 257,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 250,
                            "src": "1051:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 259,
                        "nodeType": "ExpressionStatement",
                        "src": "1049:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1007:107:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1130:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 239,
                      "id": 272,
                      "nodeType": "Return",
                      "src": "1123:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 274,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "transferExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 236,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 232,
                      "name": "recipients",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "827:27:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 230,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "827:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 231,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "827:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 235,
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "856:24:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 233,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "856:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 234,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "856:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "826:55:3"
                },
                "returnParameters": {
                  "id": 239,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 238,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "898:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 237,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "898:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "897:6:3"
                },
                "scope": 368,
                "src": "806:335:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 318,
                  "nodeType": "Block",
                  "src": "1241:227:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 286,
                                "name": "spenders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 277,
                                "src": "1259:8:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1259:15:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 288,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 280,
                                "src": "1278:6:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 289,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1278:13:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1259:32:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a20617070726f766545787420706172616d73206572726f722e",
                            "id": 291,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1293:36:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_72fa65d470771c1cde78522b6481b4e0657bbc61c800a6021e332d3f60889057",
                              "typeString": "literal_string \"OrgToken: approveExt params error.\""
                            },
                            "value": "OrgToken: approveExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_72fa65d470771c1cde78522b6481b4e0657bbc61c800a6021e332d3f60889057",
                              "typeString": "literal_string \"OrgToken: approveExt params error.\""
                            }
                          ],
                          "id": 285,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1251:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 292,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1251:79:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 293,
                      "nodeType": "ExpressionStatement",
                      "src": "1251:79:3"
                    },
                    {
                      "body": {
                        "id": 314,
                        "nodeType": "Block",
                        "src": "1385:56:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 306,
                                    "name": "spenders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 277,
                                    "src": "1407:8:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 308,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 307,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 295,
                                    "src": "1416:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1407:11:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 309,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 280,
                                    "src": "1420:6:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 311,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 310,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 295,
                                    "src": "1427:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1420:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 305,
                                "name": "approve",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 990,
                                "src": "1399:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 312,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1399:31:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 313,
                            "nodeType": "ExpressionStatement",
                            "src": "1399:31:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 298,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 295,
                          "src": "1359:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 299,
                            "name": "spenders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 277,
                            "src": "1363:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1363:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1359:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 315,
                      "initializationExpression": {
                        "assignments": [
                          295
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 295,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 315,
                            "src": "1345:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 294,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1345:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 297,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1356:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1345:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1380:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 295,
                            "src": "1382:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 304,
                        "nodeType": "ExpressionStatement",
                        "src": "1380:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1340:101:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 316,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1457:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 284,
                      "id": 317,
                      "nodeType": "Return",
                      "src": "1450:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 319,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "approveExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 281,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 277,
                      "name": "spenders",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1167:25:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 275,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1167:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 276,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1167:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 280,
                      "name": "values",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1194:23:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 278,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1194:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 279,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1194:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1166:52:3"
                },
                "returnParameters": {
                  "id": 284,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 283,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1235:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 282,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1235:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1234:6:3"
                },
                "scope": 368,
                "src": "1147:321:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 366,
                  "nodeType": "Block",
                  "src": "1592:253:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 333,
                                "name": "recipients",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 324,
                                "src": "1610:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1610:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 335,
                                "name": "amounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 327,
                                "src": "1631:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 336,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1631:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1610:35:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a207472616e7366657246726f6d45787420706172616d73206572726f722e",
                            "id": 338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1647:41:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_7adc58b1d800a5b9a987e274041b7ba9ce2cb9d263c5fcc3f2e77d315eb765fb",
                              "typeString": "literal_string \"OrgToken: transferFromExt params error.\""
                            },
                            "value": "OrgToken: transferFromExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_7adc58b1d800a5b9a987e274041b7ba9ce2cb9d263c5fcc3f2e77d315eb765fb",
                              "typeString": "literal_string \"OrgToken: transferFromExt params error.\""
                            }
                          ],
                          "id": 332,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1602:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1602:87:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 340,
                      "nodeType": "ExpressionStatement",
                      "src": "1602:87:3"
                    },
                    {
                      "body": {
                        "id": 362,
                        "nodeType": "Block",
                        "src": "1746:72:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 353,
                                  "name": "sender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 321,
                                  "src": "1773:6:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 354,
                                    "name": "recipients",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 324,
                                    "src": "1781:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 356,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 355,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 342,
                                    "src": "1792:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1781:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 357,
                                    "name": "amounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 327,
                                    "src": "1796:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 359,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 358,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 342,
                                    "src": "1804:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1796:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 352,
                                "name": "transferFrom",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1025,
                                "src": "1760:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,address,uint256) returns (bool)"
                                }
                              },
                              "id": 360,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1760:47:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 361,
                            "nodeType": "ExpressionStatement",
                            "src": "1760:47:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 345,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 342,
                          "src": "1718:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 346,
                            "name": "recipients",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 324,
                            "src": "1722:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1722:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1718:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 363,
                      "initializationExpression": {
                        "assignments": [
                          342
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 342,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 363,
                            "src": "1704:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 341,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1704:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 344,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1715:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1704:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 350,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1741:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 349,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1743:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 351,
                        "nodeType": "ExpressionStatement",
                        "src": "1741:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1699:119:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1834:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 331,
                      "id": 365,
                      "nodeType": "Return",
                      "src": "1827:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 367,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "transferFromExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 328,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 321,
                      "name": "sender",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1499:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 320,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1499:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 324,
                      "name": "recipients",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1515:27:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 322,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1515:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 323,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1515:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 327,
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1544:24:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 325,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1544:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 326,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1544:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1498:71:3"
                },
                "returnParameters": {
                  "id": 331,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 330,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1586:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 329,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1586:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1585:6:3"
                },
                "scope": 368,
                "src": "1474:371:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 369,
            "src": "257:1590:3"
          }
        ],
        "src": "0:1848:3"
      },
      "legacyAST": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/OrgToken.sol",
        "exportedSymbols": {
          "OrgToken": [
            368
          ]
        },
        "id": 369,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 160,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:3"
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol",
            "id": 161,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 1324,
            "src": "26:71:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
            "id": 162,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 1293,
            "src": "98:63:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "file": "openzeppelin-solidity/contracts/ownership/Ownable.sol",
            "id": 163,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 896,
            "src": "162:63:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "absolutePath": "/Users/guoping/Documents/gp/proj/comunion/contract/dao/contracts/organization/Organization.sol",
            "file": "./Organization.sol",
            "id": 164,
            "nodeType": "ImportDirective",
            "scope": 369,
            "sourceUnit": 652,
            "src": "226:28:3",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 165,
                  "name": "ERC20",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1292,
                  "src": "278:5:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$1292",
                    "typeString": "contract ERC20"
                  }
                },
                "id": 166,
                "nodeType": "InheritanceSpecifier",
                "src": "278:5:3"
              },
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 167,
                  "name": "Ownable",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 895,
                  "src": "285:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Ownable_$895",
                    "typeString": "contract Ownable"
                  }
                },
                "id": 168,
                "nodeType": "InheritanceSpecifier",
                "src": "285:7:3"
              }
            ],
            "contractDependencies": [
              895,
              1292,
              1392
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 368,
            "linearizedBaseContracts": [
              368,
              895,
              1292,
              1392
            ],
            "name": "OrgToken",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": false,
                "id": 170,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "300:18:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 169,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "300:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 172,
                "name": "symbol",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "324:20:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 171,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "324:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 175,
                "name": "decimals",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "350:35:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 173,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "350:5:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "3138",
                  "id": 174,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "383:2:3",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_18_by_1",
                    "typeString": "int_const 18"
                  },
                  "value": "18"
                },
                "visibility": "public"
              },
              {
                "constant": true,
                "id": 178,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 368,
                "src": "391:34:3",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 176,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "391:6:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 177,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "424:1:3",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              },
              {
                "body": {
                  "id": 209,
                  "nodeType": "Block",
                  "src": "536:125:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 189,
                          "name": "name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 170,
                          "src": "546:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 190,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 182,
                          "src": "553:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "546:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 192,
                      "nodeType": "ExpressionStatement",
                      "src": "546:12:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 195,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 193,
                          "name": "symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 172,
                          "src": "568:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 194,
                          "name": "_symbol",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 184,
                          "src": "577:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "568:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 196,
                      "nodeType": "ExpressionStatement",
                      "src": "568:16:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1407,
                              "src": "600:3:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "600:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 200,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 186,
                            "src": "612:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 197,
                          "name": "_mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "594:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "594:31:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 202,
                      "nodeType": "ExpressionStatement",
                      "src": "594:31:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 206,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1435,
                            "src": "649:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_OrgToken_$368",
                              "typeString": "contract OrgToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_OrgToken_$368",
                              "typeString": "contract OrgToken"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 203,
                            "name": "_org",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 180,
                            "src": "635:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Organization_$651",
                              "typeString": "contract Organization"
                            }
                          },
                          "id": 205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "setToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 502,
                          "src": "635:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_contract$_ERC20_$1292_$returns$__$",
                            "typeString": "function (contract ERC20) external"
                          }
                        },
                        "id": 207,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "635:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 208,
                      "nodeType": "ExpressionStatement",
                      "src": "635:19:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 210,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 187,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 180,
                      "name": "_org",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "444:17:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Organization_$651",
                        "typeString": "contract Organization"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 179,
                        "name": "Organization",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 651,
                        "src": "444:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Organization_$651",
                          "typeString": "contract Organization"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 182,
                      "name": "_name",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "463:19:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 181,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "463:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 184,
                      "name": "_symbol",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "484:21:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 183,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "484:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 186,
                      "name": "_totalSupply",
                      "nodeType": "VariableDeclaration",
                      "scope": 210,
                      "src": "507:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 185,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "507:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "443:85:3"
                },
                "returnParameters": {
                  "id": 188,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "536:0:3"
                },
                "scope": 368,
                "src": "432:229:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 228,
                  "nodeType": "Block",
                  "src": "743:57:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 222,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 212,
                            "src": "759:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 223,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 214,
                            "src": "764:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 221,
                          "name": "_mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1178,
                          "src": "753:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "753:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 225,
                      "nodeType": "ExpressionStatement",
                      "src": "753:19:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "789:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 220,
                      "id": 227,
                      "nodeType": "Return",
                      "src": "782:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 229,
                "implemented": true,
                "kind": "function",
                "modifiers": [
                  {
                    "arguments": null,
                    "id": 217,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "onlyOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 828,
                      "src": "718:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_modifier$__$",
                        "typeString": "modifier ()"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "718:9:3"
                  }
                ],
                "name": "mint",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 215,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 212,
                      "name": "_to",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "681:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 211,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "681:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 214,
                      "name": "_amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "694:15:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 213,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "694:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "680:30:3"
                },
                "returnParameters": {
                  "id": 220,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 219,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 229,
                      "src": "737:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 218,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "737:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "736:6:3"
                },
                "scope": 368,
                "src": "667:133:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 273,
                  "nodeType": "Block",
                  "src": "904:237:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 245,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 241,
                                "name": "recipients",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 232,
                                "src": "922:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 242,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "922:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 243,
                                "name": "amounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 235,
                                "src": "943:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 244,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "943:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "922:35:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a207472616e7366657245787420706172616d73206572726f722e",
                            "id": 246,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "959:37:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_f50d71f88340c27e01fadb53c22f718b6fa5952b46084b2d8a75c5c23116bdf5",
                              "typeString": "literal_string \"OrgToken: transferExt params error.\""
                            },
                            "value": "OrgToken: transferExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_f50d71f88340c27e01fadb53c22f718b6fa5952b46084b2d8a75c5c23116bdf5",
                              "typeString": "literal_string \"OrgToken: transferExt params error.\""
                            }
                          ],
                          "id": 240,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "914:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 247,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "914:83:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 248,
                      "nodeType": "ExpressionStatement",
                      "src": "914:83:3"
                    },
                    {
                      "body": {
                        "id": 269,
                        "nodeType": "Block",
                        "src": "1054:60:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 261,
                                    "name": "recipients",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 232,
                                    "src": "1077:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 263,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 262,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 250,
                                    "src": "1088:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1077:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 264,
                                    "name": "amounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 235,
                                    "src": "1092:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 266,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 265,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 250,
                                    "src": "1100:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1092:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 260,
                                "name": "transfer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 955,
                                "src": "1068:8:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1068:35:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 268,
                            "nodeType": "ExpressionStatement",
                            "src": "1068:35:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 256,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 253,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 250,
                          "src": "1026:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 254,
                            "name": "recipients",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 232,
                            "src": "1030:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 255,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1030:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1026:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 270,
                      "initializationExpression": {
                        "assignments": [
                          250
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 250,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 270,
                            "src": "1012:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 249,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1012:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 252,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 251,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1023:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1012:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1049:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 257,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 250,
                            "src": "1051:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 259,
                        "nodeType": "ExpressionStatement",
                        "src": "1049:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1007:107:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 271,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1130:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 239,
                      "id": 272,
                      "nodeType": "Return",
                      "src": "1123:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 274,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "transferExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 236,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 232,
                      "name": "recipients",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "827:27:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 230,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "827:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 231,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "827:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 235,
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "856:24:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 233,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "856:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 234,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "856:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "826:55:3"
                },
                "returnParameters": {
                  "id": 239,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 238,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 274,
                      "src": "898:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 237,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "898:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "897:6:3"
                },
                "scope": 368,
                "src": "806:335:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 318,
                  "nodeType": "Block",
                  "src": "1241:227:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 290,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 286,
                                "name": "spenders",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 277,
                                "src": "1259:8:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 287,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1259:15:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 288,
                                "name": "values",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 280,
                                "src": "1278:6:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 289,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1278:13:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1259:32:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a20617070726f766545787420706172616d73206572726f722e",
                            "id": 291,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1293:36:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_72fa65d470771c1cde78522b6481b4e0657bbc61c800a6021e332d3f60889057",
                              "typeString": "literal_string \"OrgToken: approveExt params error.\""
                            },
                            "value": "OrgToken: approveExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_72fa65d470771c1cde78522b6481b4e0657bbc61c800a6021e332d3f60889057",
                              "typeString": "literal_string \"OrgToken: approveExt params error.\""
                            }
                          ],
                          "id": 285,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1251:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 292,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1251:79:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 293,
                      "nodeType": "ExpressionStatement",
                      "src": "1251:79:3"
                    },
                    {
                      "body": {
                        "id": 314,
                        "nodeType": "Block",
                        "src": "1385:56:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 306,
                                    "name": "spenders",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 277,
                                    "src": "1407:8:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 308,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 307,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 295,
                                    "src": "1416:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1407:11:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 309,
                                    "name": "values",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 280,
                                    "src": "1420:6:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 311,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 310,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 295,
                                    "src": "1427:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1420:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 305,
                                "name": "approve",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 990,
                                "src": "1399:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,uint256) returns (bool)"
                                }
                              },
                              "id": 312,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1399:31:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 313,
                            "nodeType": "ExpressionStatement",
                            "src": "1399:31:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 301,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 298,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 295,
                          "src": "1359:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 299,
                            "name": "spenders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 277,
                            "src": "1363:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 300,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1363:15:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1359:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 315,
                      "initializationExpression": {
                        "assignments": [
                          295
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 295,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 315,
                            "src": "1345:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 294,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1345:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 297,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 296,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1356:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1345:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 303,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1380:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 302,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 295,
                            "src": "1382:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 304,
                        "nodeType": "ExpressionStatement",
                        "src": "1380:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1340:101:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 316,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1457:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 284,
                      "id": 317,
                      "nodeType": "Return",
                      "src": "1450:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 319,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "approveExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 281,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 277,
                      "name": "spenders",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1167:25:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 275,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1167:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 276,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1167:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 280,
                      "name": "values",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1194:23:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 278,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1194:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 279,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1194:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1166:52:3"
                },
                "returnParameters": {
                  "id": 284,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 283,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 319,
                      "src": "1235:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 282,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1235:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1234:6:3"
                },
                "scope": 368,
                "src": "1147:321:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 366,
                  "nodeType": "Block",
                  "src": "1592:253:3",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 337,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 333,
                                "name": "recipients",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 324,
                                "src": "1610:10:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                  "typeString": "address[] memory"
                                }
                              },
                              "id": 334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1610:17:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 335,
                                "name": "amounts",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 327,
                                "src": "1631:7:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                  "typeString": "uint256[] memory"
                                }
                              },
                              "id": 336,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "length",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1631:14:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1610:35:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "4f7267546f6b656e3a207472616e7366657246726f6d45787420706172616d73206572726f722e",
                            "id": 338,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1647:41:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_7adc58b1d800a5b9a987e274041b7ba9ce2cb9d263c5fcc3f2e77d315eb765fb",
                              "typeString": "literal_string \"OrgToken: transferFromExt params error.\""
                            },
                            "value": "OrgToken: transferFromExt params error."
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_7adc58b1d800a5b9a987e274041b7ba9ce2cb9d263c5fcc3f2e77d315eb765fb",
                              "typeString": "literal_string \"OrgToken: transferFromExt params error.\""
                            }
                          ],
                          "id": 332,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1410,
                            1411
                          ],
                          "referencedDeclaration": 1411,
                          "src": "1602:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 339,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1602:87:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 340,
                      "nodeType": "ExpressionStatement",
                      "src": "1602:87:3"
                    },
                    {
                      "body": {
                        "id": 362,
                        "nodeType": "Block",
                        "src": "1746:72:3",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 353,
                                  "name": "sender",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 321,
                                  "src": "1773:6:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 354,
                                    "name": "recipients",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 324,
                                    "src": "1781:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                      "typeString": "address[] memory"
                                    }
                                  },
                                  "id": 356,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 355,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 342,
                                    "src": "1792:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1781:13:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 357,
                                    "name": "amounts",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 327,
                                    "src": "1796:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                      "typeString": "uint256[] memory"
                                    }
                                  },
                                  "id": 359,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 358,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 342,
                                    "src": "1804:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint32",
                                      "typeString": "uint32"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1796:10:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 352,
                                "name": "transferFrom",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1025,
                                "src": "1760:12:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  "typeString": "function (address,address,uint256) returns (bool)"
                                }
                              },
                              "id": 360,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1760:47:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "id": 361,
                            "nodeType": "ExpressionStatement",
                            "src": "1760:47:3"
                          }
                        ]
                      },
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 345,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 342,
                          "src": "1718:1:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 346,
                            "name": "recipients",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 324,
                            "src": "1722:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 347,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1722:17:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1718:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 363,
                      "initializationExpression": {
                        "assignments": [
                          342
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 342,
                            "name": "i",
                            "nodeType": "VariableDeclaration",
                            "scope": 363,
                            "src": "1704:8:3",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            },
                            "typeName": {
                              "id": 341,
                              "name": "uint32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1704:6:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 344,
                        "initialValue": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1715:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1704:12:3"
                      },
                      "loopExpression": {
                        "expression": {
                          "argumentTypes": null,
                          "id": 350,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "1741:3:3",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 349,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 342,
                            "src": "1743:1:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint32",
                              "typeString": "uint32"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "id": 351,
                        "nodeType": "ExpressionStatement",
                        "src": "1741:3:3"
                      },
                      "nodeType": "ForStatement",
                      "src": "1699:119:3"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 364,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1834:4:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "functionReturnParameters": 331,
                      "id": 365,
                      "nodeType": "Return",
                      "src": "1827:11:3"
                    }
                  ]
                },
                "documentation": null,
                "id": 367,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "transferFromExt",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 328,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 321,
                      "name": "sender",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1499:14:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 320,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1499:7:3",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 324,
                      "name": "recipients",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1515:27:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 322,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1515:7:3",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 323,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1515:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 327,
                      "name": "amounts",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1544:24:3",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 325,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1544:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 326,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "1544:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                          "typeString": "uint256[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1498:71:3"
                },
                "returnParameters": {
                  "id": 331,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 330,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 367,
                      "src": "1586:4:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 329,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1586:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1585:6:3"
                },
                "scope": 368,
                "src": "1474:371:3",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 369,
            "src": "257:1590:3"
          }
        ],
        "src": "0:1848:3"
      },
      "compiler": {
        "name": "solc",
        "version": "0.5.11+commit.c082d0b4.Emscripten.clang"
      },
      "networks": {},
      "schemaVersion": "3.0.15",
      "updatedAt": "2019-11-05T03:22:27.809Z",
      "devdoc": {
        "methods": {
          "allowance(address,address)": {
            "details": "See `IERC20.allowance`."
          },
          "approve(address,uint256)": {
            "details": "See `IERC20.approve`.     * Requirements:     * - `spender` cannot be the zero address."
          },
          "balanceOf(address)": {
            "details": "See `IERC20.balanceOf`."
          },
          "decreaseAllowance(address,uint256)": {
            "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
          },
          "increaseAllowance(address,uint256)": {
            "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to `approve` that can be used as a mitigation for problems described in `IERC20.approve`.     * Emits an `Approval` event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
          },
          "isOwner()": {
            "details": "Returns true if the caller is the current owner."
          },
          "owner()": {
            "details": "Returns the address of the current owner."
          },
          "renounceOwnership()": {
            "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * > Note: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
          },
          "totalSupply()": {
            "details": "See `IERC20.totalSupply`."
          },
          "transfer(address,uint256)": {
            "details": "See `IERC20.transfer`.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
          },
          "transferFrom(address,address,uint256)": {
            "details": "See `IERC20.transferFrom`.     * Emits an `Approval` event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of `ERC20`;     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `value`. - the caller must have allowance for `sender`'s tokens of at least `amount`."
          },
          "transferOwnership(address)": {
            "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
          }
        }
      },
      "userdoc": {
        "methods": {}
      }
    }
  },
  "Version": {
    "1": {
      "contractName": "Version",
      "abi": [
        {
          "constant": true,
          "inputs": [],
          "name": "version",
          "outputs": [
            {
              "internalType": "uint32",
              "name": "",
              "type": "uint32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.11+commit.c082d0b4\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Version.sol\":\"Version\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Version.sol\":{\"keccak256\":\"0x1d6531638906aa20663cb5d51ae36a2793485378550691f9cf061ec9a67bf249\",\"urls\":[\"bzz-raw://8b99b671ef07518ce1ed5b24448b99874fcc5c98320256f44019a6f79568596f\",\"dweb:/ipfs/QmSXK3NH5B4VUJPeJbaXwVZebq1gspMsuVMKKEcqbBAQRN\"]}},\"version\":1}",
      "bytecode": "0x6080604052348015600f57600080fd5b50608f8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806354fd4d5014602d575b600080fd5b60336055565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b60018156fea265627a7a7231582045a3be1e7ff37a0021e50f40518e6aa184cb23d256e0f0d59793368d795514c964736f6c634300050b0032",
      "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c806354fd4d5014602d575b600080fd5b60336055565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b60018156fea265627a7a7231582045a3be1e7ff37a0021e50f40518e6aa184cb23d256e0f0d59793368d795514c964736f6c634300050b0032",
      "sourceMap": "26:60:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:60:2;;;;;;;",
      "deployedSourceMap": "26:60:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:60:2;;;;;;;;;;;;;;;;;;;49:34;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;82:1;49:34;:::o",
      "source": "pragma solidity ^0.5.11;\n\ncontract Version {\n    uint32 public constant version = 1;\n}",
      "sourcePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Version.sol",
      "ast": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Version.sol",
        "exportedSymbols": {
          "Version": [
            147
          ]
        },
        "id": 148,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 143,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:2"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 147,
            "linearizedBaseContracts": [
              147
            ],
            "name": "Version",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": true,
                "id": 146,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 147,
                "src": "49:34:2",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 144,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "49:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 145,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "82:1:2",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              }
            ],
            "scope": 148,
            "src": "26:60:2"
          }
        ],
        "src": "0:86:2"
      },
      "legacyAST": {
        "absolutePath": "/Users/guoping/Documents/gp/proj/solidity/comunion/dao/contracts/Version.sol",
        "exportedSymbols": {
          "Version": [
            147
          ]
        },
        "id": 148,
        "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 143,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".11"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:24:2"
          },
          {
            "baseContracts": [],
            "contractDependencies": [],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 147,
            "linearizedBaseContracts": [
              147
            ],
            "name": "Version",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "constant": true,
                "id": 146,
                "name": "version",
                "nodeType": "VariableDeclaration",
                "scope": 147,
                "src": "49:34:2",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint32",
                  "typeString": "uint32"
                },
                "typeName": {
                  "id": 144,
                  "name": "uint32",
                  "nodeType": "ElementaryTypeName",
                  "src": "49:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "31",
                  "id": 145,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "82:1:2",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_1_by_1",
                    "typeString": "int_const 1"
                  },
                  "value": "1"
                },
                "visibility": "public"
              }
            ],
            "scope": 148,
            "src": "26:60:2"
          }
        ],
        "src": "0:86:2"
      },
      "compiler": {
        "name": "solc",
        "version": "0.5.11+commit.c082d0b4.Emscripten.clang"
      },
      "networks": {},
      "schemaVersion": "3.0.15",
      "updatedAt": "2019-09-18T10:01:43.371Z",
      "devdoc": {
        "methods": {}
      },
      "userdoc": {
        "methods": {}
      }
    }
  }
}