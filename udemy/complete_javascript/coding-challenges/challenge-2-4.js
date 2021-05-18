console.log('Coding Challenge 2.4')

console.log('Test 1');

let billValue = 275;
let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}.`);

console.log('Test 2');

billValue = 40;
tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}.`);

console.log('Test 3');

billValue = 430;
tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}.`);