console.log('--------Assignments--------');

const country = 'UK';
const continent = 'Europe';
let population = 66650000;
const isIsland = true;
const language = 'English';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log(population / 2);
console.log(population++)

const finlandPopulation = 6000000;

console.log(population > finlandPopulation);

const averagePopulation = 33000000;

console.log(population > averagePopulation);

const description = (country + " is in " + continent + ", and its " + population + " people speak " + language);

console.log(description);

const newDescription = (`The ${country} is a country in ${continent}, and its ${population} people speak ${language}.`)

console.log(newDescription);

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averagePopulation - population} below average`)
}

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border!');
// } else {
//   console.log('No borders!');
// }

if (language === 'English' && population < 50000000 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch(language) {
  case 'Chinese':
  case 'Mandarin':
    console.log('Most number of native speakers');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place in number of native speakers');
    break;
  case 'Hindi':
    console.log('4th place in number of native speakers');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too!');
    break;
}

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);