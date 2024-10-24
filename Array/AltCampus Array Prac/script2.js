 let numbers = [ 34, 56, 76, 55, 75, 90, 29];

//  Cal. the sum of array items and print it.
let sum = 0;
for(let i of numbers) {
    sum = sum + i;    
}
console.log(`sum of numbers: ${sum}`);

// cal. the avg. of array items and print it.
let avg = sum / numbers.length;
console.log(`Avg of array items: ${avg}`);

// find the heighest no. in array and print it.
 let bigNum = numbers[0];
 for( i = 0; i < numbers.length; i++) {
    if(numbers[i] > bigNum) {
        bigNum = numbers[i];
    }
 }
 console.log(`the biggest number is: ${bigNum}`);

//  for-of loop:
let heighest = numbers[0];
for( number  of numbers ) {
    if(heighest < number) {
        heighest = number;
    }
}
console.log(`Heighest number is: ${heighest}`);

// Find the lowest number in array and print it.
let smallNum = numbers[0];
for(number of numbers) {
    if(smallNum > number) {
        smallNum = number;
    }
}
console.log(`the smallest number is: ${smallNum}`);

// Find the Even numbers and print them.
for( number of numbers ) {
    if(number % 2 === 0) {
        console.log(number);
    }
}
 
// find odd no. and print them.
for(number of numbers){
    if(number % 2 !== 0) {
        console.log(`Odd number: ${number}`);
    }
}

// find numbers devisible by 5.
for(number of numbers) {
    if(number % 5 === 0) {
        console.log(`Numbers that are devisible by 5 are: ${number}`);
    }
}

//  log all the elements.
for(number of numbers) {
    console.log(number);
}

// find the numbers devisible by 3.
for(number of numbers) {
    if(number % 3 === 0) {
        console.log(`Devisible by 3: ${number}`);
    }
}
