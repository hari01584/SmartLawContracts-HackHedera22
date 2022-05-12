// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0;

import './OwnerContract.sol';

contract Permissible is Owner
{
  enum MemberType{
    Judge,
    Party,
    OppositeParty,
    Members
  }
  struct Member{
    address addr;
    MemberType mtype;
  }

  Member[] members;

  function setMember(address addr, uint m) public {
    
  }
}