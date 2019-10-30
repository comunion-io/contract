pragma solidity ^0.5.11;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../Daos.sol";


contract Organization is Ownable {

    event SetMemberRole(address member, bytes32 role);
    event RemoveMember(address member);
    event SetSubAccount(address account, bytes32 desc);
    event RemoveSubAccount(address account);
    event SetToken(address token);

    struct Member {
        bytes32 role;
        bool hasData;
    }

    struct SubAccount {
        bytes32 desc;
        bool hasData;
    }

    uint32 public constant version = 1;
    string public name;
    ERC20 public token;
    mapping(address => Member) public members;
    mapping(address => SubAccount) public subAccounts;

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

    function removeMembers(address[] memory _members) public onlyOwner {
        for (uint16 i = 0; i < _members.length; ++i) {
            _removeMember(_members[i]);
        }
    }

    function getRole(address member) public view returns(bytes32) {
        require(members[member].hasData, "Organization: Not a member of the organization.");
        return members[member].role;
    }

    function addOrUpdateSubAccounts(address[] memory accounts, bytes32[] memory descs) public onlyOwner {
        require(accounts.length == descs.length, "Organization: addOrUpdateSubAccounts params error.");
        for (uint16 i = 0; i < accounts.length; ++i) {
            subAccounts[accounts[i]].hasData = true;
            subAccounts[accounts[i]].desc = descs[i];
            emit SetSubAccount(accounts[i], descs[i]);
        }
    }

    function removeSubAccounts(address[] memory accounts) public onlyOwner {
        for (uint16 i = 0; i < accounts.length; ++i) {
            _removeSubAccount(accounts[i]);
        }
    }

    function getSubAccountDesc(address account) public view returns(bytes32) {
        require(subAccounts[account].hasData, "Organization: account is not a sub-account.");
        return subAccounts[account].desc;
    }

    modifier onlyManager() {
        require(tx.origin == owner(), "Organization: tx.origin is not the owner");
        _;
    }

    function _removeMember(address member) public onlyOwner {
        if (members[member].hasData) {
            delete members[member];
            emit RemoveMember(member);
        }
    }

    function _removeSubAccount(address account) public onlyOwner {
        if (members[account].hasData) {
            delete subAccounts[account];
            emit RemoveSubAccount(account);
        }
    }
}