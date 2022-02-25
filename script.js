let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

let BMIMark = weightMark / heightMark ** 2;

let BMIJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
