
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for(let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
// }
// let avg_marks =  sum / marks.length;
// console.log("Avg marks of class:", avg_marks);    
// console.log(`avg masrks of class: ${avg_marks}`);


// Q2. Price = [250, 645, 300, 900, 50] , offer 10% OFF at all items. store final price on newArray.

let price = [250, 645, 300, 900, 50];

for(let i = 0; i < price.length; i++) {
    let offer = price[i] / 10;
    price[i] = price[i] - offer; 
}
console.log(price);