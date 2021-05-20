'use strict';

console.log('------------Lesson------------');

// function declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1980);
console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);

/*

function logger() {
  console.log('My name is Iain');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice);

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

const interface = 'Audio';
const private = 534;

*/