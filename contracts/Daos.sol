pragma solidity ^0.5.11;

contract Daos {

    struct Dao {
        address addr;
        string name;
    }

    uint32 public constant version = 1;
    uint64 public index = 1;
    mapping(uint64 => Dao) public daos;
    mapping(address => uint64) public addressIndex;
    mapping(string => uint64) public nameIndex;

    function register(address _addr, string memory _name) public {
        uint64 i = addressIndex[_addr];
        require(i == 0, "The address is already registered.");
        i = nameIndex[_name];
        require(i == 0, "The name is already registered.");

        daos[index] = Dao(_addr, _name);
        addressIndex[_addr] = index;
        nameIndex[_name] = index;

        index += 1;
    }
}