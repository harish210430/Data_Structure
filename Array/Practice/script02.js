//  create array and store some of compnies.
let companies = [ "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company from the array:

// let first_cmpny = companies.shift();
// console.log(first_cmpny); // Bloomberg
// console.log(companies);  // [ "Microsoft", "Uber", "Google", "IBM", "Netflix" ]

// Remove Uber & add Ola in its place.

let replace_cmpny = companies.splice(2,1,"Ola");
console.log(replace_cmpny);
console.log(companies);

// Add Amazone at the end.

console.log(companies.push("Amazone"));
console.log(companies); 