let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

/*
 1. Add all the values of numbers and userIds array into the new newly created array named `collection`

 //
 let collection = [];
for(let i = 0; i < numbers.length; i++) {
     collection.push(numbers[i]);
}
for(let j = 0; j < userIds.length; j++) {
    collection.push(userIds[j]);
}
console.log(collection);

2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`

//
let evenCollection = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        evenCollection.push(numbers[i]);
    }
}
for(let j = 0; j < userIds.length; j++) {
    if(userIds[j] % 2 == 0) {
        evenCollection.push(userIds[j]);
    }
}
console.log(evenCollection);


3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`

//
let collection = [6, 8, 10, 12, 43, 56, 98, 1230, 234, 1278, 984, 763, 900]
let oddCollection = [];
for(let num of collection) {
    if(num%2 != 0) {
        oddCollection.push(num);
    }
}
console.log(oddCollection);


  @param means parameter

 4. Write a function named times which accepts two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']

// 
let arr = [];
const times = function (num, string) {
    for(let i = 1; i <= num; i++) {
        arr.push(string);
    }
    return arr;
};
console.log(times(3, 'R')); // ['R', 'R', 'R']
console.log(times(0)); // []
console.log(times(5)); // [undefined, undefined, undefined, undefined, undefined]


 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']

    //
let newArr = [];
const revert = function(Arr) {
    for(let i = Arr.length-1; i >= 0; i--) {
        newArr.push(Arr[i]);
    }
    return newArr;
};
console.log(revert([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']


6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

//
/*
let finalArr = [];
const clear = function(array) {
    for(let i of array) {
        if(Boolean(i) === true) {
            finalArr.push(i);
        }
    }
    return finalArr;
}
let result = clear([1, 2, 3, 4, '', 0, null, undefined, 'a', undefined, 'd', 0,  'c', 'b']);
console.log(result);

// OR

const clear = function(array) {
    for(let i = 0; i < array.length; i++) {
        if(Boolean(array[i]) === false) {
            delete array[i];
        }
    }
    array.reverse();
    return array;
}
let result = clear([1, 2, 3, 4, '', 0, null, undefined]);
console.log(result);


 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

//
const obj = {};
const arrayToObj = function(array) {
    for(let i = 0; i < array.length; i++) {
        obj[i] = array[i];
    }
    return obj;
}
console.log(arrayToObj(['a', 'b', 'c', 'd', 21, "op"]));