'use strict';

console.log('Coding Challenge 3.4')

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let l = bills.length;
for(let i = 0; i < l; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  let l = arr.length;
  for(let i = 0; i < l; i++) {
    sum += arr[i];
  }
  return sum / l;
}

console.log(calcAverage(totals));
