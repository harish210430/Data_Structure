
let user = {
    name: 'Arya',
    sibling: ['Robb', 'Ryan', 'John'],
  };
  let allBrothers = ['Robb', 'Ryan', 'John'];
  let brothersCopy = user.sibling;
  let usename = user.name;
  let newUser = user;

// Answer the following with reason:
user == newUser; // true Becoz they have same address.
user === newUser; // true Becoz they have same address.
user.name === newUser.name; // true Becoz Both are having same address.
user.name == newUser.name; // true Becoz Both are having same address.
user.sibling == newUser.sibling; // true Becoz Both are having same address.
user.sibling === newUser.sibling; // true Becoz Both are having same address.
user.sibling == allBrothers; // false Becoz Both are having different address.
user.sibling === allBrothers; // false Becoz Both are having different address.
brothersCopy === allBrothers; // false Becoz Both are having different address.
brothersCopy == allBrothers; // false Becoz Both are having different address.
brothersCopy == user.sibling; // true Becoz Both are having same address.
brothersCopy === user.sibling; // true Becoz Both are having same address.
brothersCopy[0] === user.sibling[0]; // true Becoz Both are having same address.
brothersCopy[1] === user.sibling[1]; // true Becoz Both are having same address.
user.sibling[1] === newUser.sibling[1]; // true Becoz Both user and newUser have same address