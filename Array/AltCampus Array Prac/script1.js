//  Declare an empty array and store it in a variable.
let Empt_Array = [];

//  Now check the type of empty array you declared above.
console.log(typeof(Empt_Array)); // object

// Create an array named 'colors' that contains five different colour.
let colors = [ "Red", "Black", "White", "Brown", "Pink" ];

//  Access the first color in the array and print it to the console using 'console.log()'.
console.log(colors[0]); // Red
console.log(colors.slice(0,1)); // Red

//  Access the third in the array and print it to the console.
console.log(colors[2]); // White
console.log(colors.slice(2,3)); // White

//  Access the last in the array and print it to the console.
console.log(colors[4]);
console.log(colors[colors.length - 1]);
console.log(colors.slice(4));

// Write one line of code that change the value of first color to "Blue".
console.log(colors[0] = "Blue");
// console.log(colors.replace("Red","Black"));

// Write one line of code that change the value of last color to "Ultravoilet".
console.log(colors[colors.length - 1] = "Ultravoilet");
console.log(colors);

// Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = colors[3];

// Add another color to the end.
colors.push("Orange");
console.log(colors);
// colors[colors.length] = "Orange";

// Add color in the begining.
colors.unshift("green");
console.log(colors);

// Remove first color.
colors.shift();
console.log(colors);

// Remove the second color from the end.
delete colors[colors.length - 2];
console.log(colors);

// Create a copy of array named colors.
console.log(colors.slice());
// console.log(colors.pop());
// console.log(colors);

// Write a for loop to iterate through every element in the array and print each element.
for( let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// Wrte a for--of loop to iterate through every element and print each one.
for( i of colors) {
    console.log(i);
}
// copying from that loop and print in this format: 0: blue, 1: black,...
for( let i = 0; i < colors.length; i++) {
    console.log(`${i}: ${colors[i]}`);
}
// create a variable named lastColor that will always point the last color of the array.
let lastColor = colors[colors.length-1];
console.log(lastColor);

// Add a new color 'tomato' to the index 45, and check the length. 
colors[45] = "tomato";
console.log(colors);