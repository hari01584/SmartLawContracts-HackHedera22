pragma solidity >=0.7.0;

import "./LegalContractUnit.sol";

contract LegalContract {
  LegalContractUnit[] public contracts;

  // Get Contract Count
  function getContractCount() public view returns(uint contractCount)
  {
    return contracts.length;
  }

  // deploy a new contract (ie a new case)
  function newLegalContractUnit() public returns(address newContract)
  {
    LegalContractUnit c = new LegalContractUnit();
    contracts.push(c);
    return address(c);
  }

  function resolveLegalContract(address contractAddr) public{
      LegalContractUnit c = LegalContractUnit(contractAddr);
      c.resolveContract();
  }
}