// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0;
import './OwnerContract.sol';

contract LegalContractUnit is Owner
{
  address party;
  address opposing_party;

  bool private resolved;

  uint256 time;

  constructor(){
    // Check if Owner is a Valid Judge
    // TODO Write logic here, pref. create Judges contract and verify if owner address in judges list.

    resolved = false;
    time = block.timestamp;
  }

  function resolveContract() public {
    // TODO ADD resolution conditions and verify it.
    resolved = true;
  }
}