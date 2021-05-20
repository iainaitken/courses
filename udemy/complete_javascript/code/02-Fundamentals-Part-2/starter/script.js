'use strict';

console.log('------------Lesson------------');

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

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;