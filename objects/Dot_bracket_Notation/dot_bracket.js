 let keyValue = 'username';
let charactor = {
  username: 'arya',
};

let keyName = "playedBy";
charactor[keyName] = "Maisie Williams";
console.log(charactor[keyName]); // Maisie Williams
console.log(charactor["keyName"]); // undefined   !Great

/*

charactor["keyValue"] = "Hameed";
charactor[keyValue] = "Hameed";

console.log(charactor["keyValue"]); // Hameed
console.log(charactor[keyValue]); // Hameed Becoz keyValue = 'username' So charactor["username"] = "Hameed";

*/

/* Variable ko Dot(.) lagake access nhi kar sakte Becoz Var. is in Outside of object. */

// 1.
console.log(charactor['keyValue']); // undefined becoz charactor obj me 'keyValue' nam ki key Hi nhi hai So charactor["keyValue"] is "undefined".
// 2.
console.log(charactor[keyValue]); // arya becoz keyValue is a variable & keyValue = 'username' So log the charactor["username"].

/*
2. Why are they different?
    // becoz charactor['keyValue'] is a key and charactor[keyValue] is a Variable.

3. Can I use . dot notation to access the value (using variable name). Explain reason?
    // No, we can't becoz variable is out of the object.
 
4. What is the difference between . dot notation and [] bracket notation. Explain
    // [] : it can compute the value and access also.
    // . : it can only access value.

5. What are situation where we use dot notation and bracket notation.
    // Always use [] Notation to access variable and when obj key has multiple word (i.e. first-Name) and when key is a number.
    // Other then that we can use . Notation
    
*/