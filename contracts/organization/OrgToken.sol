pragma solidity ^0.5.11;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Organization.sol";


contract OrgToken is ERC20, Ownable {

    string public name;
    string public symbol;
    uint8 public constant decimals = 18;
    uint32 public constant version = 1;

    constructor(Organization _org, string memory _name, string memory _symbol, uint256 _totalSupply) public {
        name = _name;
        symbol = _symbol;
        _mint(msg.sender, _totalSupply);
        _org.setToken(this);
    }

    function mint(address _to, uint256 _amount) public onlyOwner returns (bool) {
        _mint(_to, _amount);
        return true;
    }

    function transferExt(address[] memory recipients, uint256[] memory amounts) public returns (bool) {
        require(recipients.length == amounts.length, "params error.");
        for (uint32 i = 0; i < recipients.length; ++i) {
            transfer(recipients[i], amounts[i]);
        }
        return true;
    }
}
