// Array: collection of similar type of items
// typeof(Array): Object,  iterable -> (string, object, Array)

// Array is mutable (changable) in js.

// let student = [ "Rahul", "Kamal", "Aakash", "Harish", "Rahul", "Shivam"];
// console.log(student);
// console.log(typeof(student)); // object

let actors = [ "Hritik", "Roshan", "Akshay", "Rajpal", "Sahid", "Sahruk", "Aamir" ];
// console.log(actors);
// for loop:
// for(let i = 0; i < actors.length; i++) {
//     console.log(actors[i]);
// }

// for-of loop:
for(let i of actors) {
    console.log(i);
}

// for-of loop:
let cities = [ "Mumbai", "Delhi", "Pune", "Kanpur", "Lucknow"];
for(let city of cities) {
    console.log(city.toUpperCase());
}