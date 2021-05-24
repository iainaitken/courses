'use strict';

console.log('------------Lesson------------');

const iain = [
  'Iain',
  'Aitken',
  2021 - 1980,
  'programmer',
  ['Dan', 'Peter', 'Steven'],
];
let length = iain.length;

for(let i = 0; i < length; i++) {
  console.log(iain[i], typeof iain[i]);
}

const types = [];

for(let i = 0; i < length; i++) {
  types.push(typeof iain[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

length = years.length;

for(let i = 0; i < length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

console.log('--Only Strings--');

for(let i = 0; i < length; i++) {
  if (typeof iain[i] !== 'string') continue;
  console.log(iain[i], typeof iain[i]);
}

console.log('--Break with Number--');

for(let i = 0; i < length; i++) {
  if (typeof iain[i] === 'number') break;
  console.log(iain[i], typeof iain[i]);
}


/*

for(let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep} 🏋🏻‍♂️`);
}

const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  birthYear: 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
  },
}

console.log(iain.calcAge());
console.log(iain.age);

console.log(iain.getSummary());

const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  age: 2021 - 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
}

console.log(iain.firstName);
console.log(iain.lastName);
console.log(iain.age);
console.log(iain.job);
console.log(iain.friends);

console.log(iain['firstName']);
console.log(iain['lastName']);
console.log(iain['age']);
console.log(iain['job']);
console.log(iain['friends']);

iain.eyeColour = 'blue';
console.log(iain.eyeColour);

iain['shoeSize'] = 10;
console.log(iain['shoeSize']);
console.log(iain.shoeSize);

console.log(`${iain.firstName} has ${iain.friends.length} friends, and his best friend is ${iain.friends[0]}.`);

const friends = ['Dan', 'Steven', 'Peter'];
let newLength = friends.push('Sarah');
console.log(friends);
console.log(newLength);

newLength = friends.unshift('John');
console.log(friends);
console.log(newLength);

let returnedElement = friends.pop();
console.log(friends);
console.log(returnedElement); 

returnedElement = friends.shift();
console.log(friends);
console.log(returnedElement);

console.log(friends.indexOf('Dan'));

console.log(friends.includes('Peter'));
console.log(friends.includes('Pete'));

const friends = ['Dan', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1995, 2001);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length -1]);
console.log(friends[friends.length -2]);

friends[2] = 'Jim';
console.log(friends);

friends[3] = 'Sarah';
console.log(friends);

const firstName = 'Iain';
const iain = [firstName, 'Aitken', 2021 - 1980, 'programmer', friends];
console.log(iain);

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const y = [1980, 1967, 2002, 2010, 2018];
console.log(y + 10);

const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[2]);
const age4 = calcAge(y[3]);
const age5 = calcAge(y[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[2]), calcAge(y[3]), calcAge(y[4])];
console.log(ages);

const calcAge = function(birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else if (retirement < 0) {
    return `${firstName} has already retired!`;
  } else {
    return `${firstName} retires this year!`;
  }
}

console.log(yearsUntilRetirement(1980, 'Iain'));
console.log(yearsUntilRetirement(1948, 'Bill'));
console.log(yearsUntilRetirement(1956, 'Bob'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(noOfApples, noOfOranges) {
  const applePieces = cutFruitPieces(noOfApples);
  const orangePieces = cutFruitPieces(noOfOranges)
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// Function Expression

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1980);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1980, 'Iain'));

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