/*
// 1. What will be the output and explain the reason?
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;

// Answer the following with reason after going through the above code:

[10] === [10] // false Becoz they are two Arrays So Both have diff. address.
What is the value of obj? // { surname: 'Stark' }
obj == newObj // false, Becoz of diff. Address.
obj === newObj // false, Becoz of diff. Address.
user === newObj // false, Becoz of diff. Address.
user == newObj // false, Becoz of diff. Address.
user == obj // true, Becoz of same Address.
arr == arr2 // true, Becoz of same Address.
arr === arr2 // true, Becoz of same Address.

// 2. What's will be the value of person1 and person2 ? Explain with reason. Draw the memory representation diagram.

function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); // { name: 'Alex' , age: 30 }
console.log(person2); // { name: 'John', age: 50 }


// 3. What will be the output of the below code:
*/
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //  true, Becoz both have same address.
console.log(user.brothers.length === brothers.length); // true, Becoz both have equal elements.