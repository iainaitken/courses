console.log('--------Lesson--------');

const age = 23;

age >= 18 ? console.log('I like to drink wine 🍷') : console.log('No wine for you');

console.log(`Sarah ${age >= 18 ? 'is' : 'is not'} old enough to drink alcohol`);

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰'

console.log(`I like to drink ${drink}`);

/*

const day = 'Monday';

switch(day) {
  case 'Monday':
    console.log('JS course');
    console.log('Go for a walk');
    break;
  case 'Tuesday':
    console.log('Update CV');
    break;
  case 'Wednesday':
    console.log('Finish mini projects');
    break;
  case 'Thursday':
  case 'Friday':
    console.log('Apply for jobs');
    break;
  case 'Saturday':
    console.log('Country Walk');
    break;
  case 'Sunday':
    console.log('Chill');
    break;
  default:
    console.log('Not a vaild day');
}

// Here is the above switch statement, as if/else statements

if (day === 'Monday') {
  console.log('JS course');
  console.log('Go for a walk');
} else if (day === 'Tuesday') {
  console.log('Update CV');
} else if (day === 'Wednesday') {
  console.log('Finish mini projects');
} else if (day === 'Thursday' || day === 'Friday') {
  console.log('Apply for jobs');
} else if (day === 'Saturday') {
  console.log('Country Walk');
} else if (day === 'Sunday') {
  console.log('Chill');
} else {
  console.log('Not a vaild day');
}

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence && hasGoodVision);

if (hasDriversLicence && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive');
}

const isTired = true;

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive');
}

const age = 18;

if (age === 18) console.log('You just became an adult 🎊');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 21) {
  console.log('21 is an amazing number!!');
}

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean('true'));
console.log(Boolean('false'));
console.log(Boolean(14));
console.log(Boolean({}));

const money = 30;
if (money) {
  console.log("Spend it!!!");
} else {
  console.log("Get a job, you bum!");
}

let exist;

if (exist) {
  console.log("Exist is defined");
} else {
  console.log('Exist is undefined!');
}

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

console.log("I am " + 23 + " years old");

console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '3');

console.log('23' > '20');

const age = 15;

if(age >= 18) {
  console.log("Sarah can obtain a driving licence 🚗")
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is not old enough to obtain a driving licence, she must wait another ${yearsLeft} years 😭`)
}

const birthYear = 1980;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const firstName = "Iain";
const job = "programmer";
const birthYear = 1980;
const year = 2021;

const iain = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(iain);

const iainNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(iainNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);

const currentYear = 2021

const ageIain = currentYear - 1980;
const ageSarah = currentYear - 1985;

console.log(currentYear - 1980 > currentYear - 1985);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageIain + ageSarah) / 2;
console.log(ageIain, ageSarah, averageAge);

const currentYear = 2021

const ageIain = currentYear - 1980;
const ageSarah = currentYear - 1985;

console.log(ageIain, ageSarah);

console.log(ageIain * 2, ageIain / 10);

console.log(2 ** 5);

const firstName = "Iain";
const lastName = "Aitken";

console.log(firstName + " " + lastName);

let x = 10 + 5;

console.log(x);

x += 10;

console.log(x);

x *= 4;

console.log(x);

x++;

console.log(x);

console.log(ageIain > ageSarah);

let age = 30;
age = 31;

const birthYear = 1980;

var job = 'solicitor';
job = 'programmer';

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 42);
console.log(typeof 'string');

javascriptIsFun = 'YES';

console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let js = 'amazing';

console.log("Bob");
console.log(23);

let firstName = "Iain";

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/