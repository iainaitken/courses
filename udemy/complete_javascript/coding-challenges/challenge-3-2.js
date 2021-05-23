'use strict';

console.log('Coding Challenge 3.2')

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = new Array(125, 555, 44)
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Test 1');

console.log(calcTip(100));

console.log('Test 2');

console.log(bills);
console.log(tips);
console.log(totals);
