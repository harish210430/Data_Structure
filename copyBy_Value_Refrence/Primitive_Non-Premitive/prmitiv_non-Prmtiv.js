// Premitive Vs Non-Premitive

/*
1. List all the primitive and non-primitive data types in JavaScript.

// Premitive: They can contian one/single Value and non-mutable(not changable only replace or reassign value), does copy by value.
Exp: Number, String, Boolean, undefined, null, symbol

// Non-Premitive: contain collection of diff. type of values, can be changable/mutable, does copy/pass by refrence.
Exp: Array, Objects, Function 

2. Explain the difference between Primitive and Non-Primitive with examples.
3. Explain copy by value and copy by reference with examples.

*/
// Premitive: copy by value Becoz In premitive variable always "store a value".
// copy by value: it can't update/change the value, only can replace or reassign.
 let user = "tony";
 let userName = user;
 user = "IronMan";
 
 console.log(user, "user"); // IronMan
 console.log(userName, "userName"); // tony

// Non-Premitive: copy by refrence Becoz In non-premitive Objects get created somewhere outside, in memory And variable just holds the refrence/Address of that memory.
let userInfo = {
    name: "capton",
    role: "Leader",
};
let avenger = userInfo;
avenger.name = "Mr.Stark";
console.log(avenger.name); // Mr.Stark
console.log(userInfo.name); // Mr.Stark