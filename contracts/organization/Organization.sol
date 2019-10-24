pragma solidity ^0.5.11;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../Daos.sol";


contract Organization is Ownable {

    event SetMemberRole(address member, bytes32 role);
    event RemoveMember(address member);
    event SetToken(address token);

    struct Member {
        bytes32 role;
        bool hasData;
    }

    uint32 public constant version = 1;
    string public name;
    ERC20 public token;
    mapping(address => Member) public members;

    constructor(Daos _daos, string memory _name) public {
        name = _name;
        _daos.register(address(this), _name);

        address[] memory addrs = new address[](1);
        addrs[0] = msg.sender;
        bytes32[] memory rs = new bytes32[](1);
        rs[0] = "owner";
        addOrUpdateMembers(addrs, rs);
    }

    function setToken(ERC20 _token) public onlyManager {
        require(address(token) == address(0), "Organization: Token has been set.");
        token = _token;
        emit SetToken(address(_token));
    }

    function addOrUpdateMembers(address[] memory addresses, bytes32[] memory roles) public onlyOwner {
        require(addresses.length == roles.length, "Organization: addOrUpdateMembers params error.");
        for (uint16 i = 0; i < addresses.length; ++i) {
            members[addresses[i]].hasData = true;
            members[addresses[i]].role = roles[i];
            emit SetMemberRole(addresses[i], roles[i]);
        }
    }

    function removeMember(address _addr) public onlyOwner {
        if (members[_addr].hasData) {
            delete members[_addr];
            emit RemoveMember(_addr);
        }
    }

    function removeMembers(address[] memory _members) public onlyOwner {
        for (uint16 i = 0; i < _members.length; ++i) {
            removeMember(_members[i]);
        }
    }

    function getRole(address _addr) public view returns(bytes32) {
        require(members[_addr].hasData, "Organization: Not a member of the organization.");
        return members[_addr].role;
    }

    modifier onlyManager() {
        require(tx.origin == owner(), "Organization: tx.origin is not the owner");
        _;
    }
}