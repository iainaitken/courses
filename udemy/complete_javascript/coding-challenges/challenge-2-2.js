console.log('Coding Challenge 2.2')

console.log("Test 1")

let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}!`);
} else {
  console.log(`John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}!`);
}

console.log("Test 2")

markHeight = 1.88;
markWeight = 95;

johnHeight = 1.76;
johnWeight = 85;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}!`);
} else {
  console.log(`John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}!`);
}
