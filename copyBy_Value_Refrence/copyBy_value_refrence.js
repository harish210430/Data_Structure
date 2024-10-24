// Premitive
// it does copy by value. 
let user = "John";

let userName = user;
user = "sam";
console.log(user, "user");
console.log(userName, "userName");


// Non-Premitive 
// It does always copy by refrence in Js And this is the main diff. b/w Premitive and Non-Premitive. 
let data = {
    name: "Arya",
    age: 19
};
let userInfo = data;
userInfo.name = "bran";
console.log(data.name, "data");
console.log(userInfo.name, "userInfo");