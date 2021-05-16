console.log('Coding Challenge 2.1')

console.log("Test 1")

let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

console.log(markHigherBMI);

console.log("Test 2")

markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI is " + markBMI);
console.log("John's BMI is " + johnBMI);

console.log(markHigherBMI);
