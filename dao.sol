pragma solidity >=0.4.22 <0.6.0;
contract Dao {
    struct Member {
        address id;
        string email;
        string description;
        string role;
    }
    
    struct Organization {
        address organization;
        string name;
        string email;
        string website;
        string mission;
        string description;
        string logo;
        string linkedin;
        string twitter;
        mapping(address => address) in_members;
        string time;
    }

    address chairperson;
    mapping(address => Organization) organizations;
    mapping(address => Member) members;
    
    /// Create a new DAO.
    constructor() public {
        chairperson = msg.sender;
    }
    
    function registerOrganization(string memory name, 
        string memory email, 
        string memory website, 
        string memory mission, 
        string memory description, 
        string memory logo, 
        string memory linkedin, 
        string memory twitter, 
        string memory time) public {
        Organization storage ori = organizations[msg.sender];
        if (ori.organization == address(0)) {
            ori.organization = msg.sender;
            ori.name = name;
            ori.email = email;
            ori.website = website;
            ori.mission = mission;
            ori.description = description;
            ori.logo = logo;
            ori.linkedin = linkedin;
            ori.twitter = twitter;
            ori.time = time;
        }
    }
    
    function registerMember(string memory email, 
        string memory description, 
        string memory role) public {
        Member storage mem = members[msg.sender];
        if (mem.id == address(0)) {
            mem.id = msg.sender;
            mem.email = email;
            mem.description = description;
            mem.role = role;
        }
    }
    
    function attachTo(address organization) public {
        Member storage mem = members[msg.sender];
        Organization storage ori = organizations[organization];
        if (mem.id != address(0) && ori.organization != address(0)) {
            ori.in_members[msg.sender] = msg.sender;
        }
    }
    
    function getOrganization(address id) public view returns(string memory) {
        return organizations[id].name;
    }
    
    function getMember(address id) public view returns(string memory) {
        return members[id].email;
    }
}
