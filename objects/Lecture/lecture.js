
/*
// Premitive DataTypes:
    String, Number, Boolean, Null, undefined
// Non-premitive:
    object: collection of properties,can be diff. data types.
    * Function inside Objects are called methods.
*/
let user = {
    name: "Sam Altman",
    city: "Newyork",
    age: 26
};
    
// Accessing Value with: 
    // .
    // []
    user.city; // "Newyork"
    user["age"]; // 26

// Adding vaue:
    user.company = "open.ai";
    console.log(user);

// Updating value:
    user["age"] = 30;
    console.log(user);

// Deleting value:
    delete user.age;
    console.log(user);

/* Rules for naming the key in an object */
let userInfo = {
    name: "Satya Nadella",
    "first name": "Satya", // if u hv key as two words with spce then put the key in double quotes.
    10: "value1",   // keyName also can be a no. and a special keyWord.
    let: "val2",
    typeof: "val3"
};
//  But we can not access two words key Or no. key with '.' , We can Access them with "[]" 
    userInfo.let;
    userInfo[10];
    userInfo.typeof;
    userInfo["first name"];