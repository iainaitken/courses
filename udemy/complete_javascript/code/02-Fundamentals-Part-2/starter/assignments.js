'use strict';

console.log('----------Assignments----------');

// Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const country1 = describeCountry('The UK', 67, 'London');
const country2 = describeCountry('Tanzania', 58, 'Dodoma');
const country3 = describeCountry('Belgium', 11, 'Brussels');

console.log(country1);
console.log(country2);
console.log(country3);

// Function Declarations vs Function Expressions

function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}

const china = percentageOfWorld1(1441);
console.log(china);

const uk1 = percentageOfWorld1(67);
const nigeria1 = percentageOfWorld1(201);
const canada1 = percentageOfWorld1(38);

console.log(uk1);
console.log(nigeria1);
console.log(canada1);

const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}%`;
}

const uk2 = percentageOfWorld2(67);
const nigeria2 = percentageOfWorld2(201);
const canada2 = percentageOfWorld2(38);

console.log(uk2);
console.log(nigeria2);
console.log(canada2);

// Arrow Functions

const percentageOfWorld3 = population => (population / 7900) * 100;

const uk3 = percentageOfWorld3(67);
const nigeria3 = percentageOfWorld3(201);
const canada3 = percentageOfWorld3(38);

console.log(uk3);
console.log(nigeria3);
console.log(canada3);

// Functions within Functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world.`
}

console.log(describePopulation('The UK', 67));
console.log(describePopulation('India', 1366));
console.log(describePopulation('Vatican City', 0.000825));

// Introduction to Arrays

const populations = new Array(67, 201, 38, 58);
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(67),
  percentageOfWorld1(201),
  percentageOfWorld1(38),
  percentageOfWorld1(58)
];
console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = new Array('Denmark', 'Netherlands', 'Belgium', 'Luxembourg', 'France', 'Switzerland', 'Austria', 'Czechia', 'Poland');
neighbours.push('Utopia');
neighbours.pop();

if (!neighbours.includes('Germany')) {
  console.log("Probably not a Central European Country 😃");
}

const index = neighbours.indexOf('France');
neighbours[index] = 'cheeseEatingSurrenderMonkeys';
console.log(neighbours);

// Introduction to Objects

const myCountry = {
  name: 'Germany',
  population: 83,
  capital: 'Berlin',
  language: 'German',
  neighbours: ['Denmark', 'Netherlands', 'Belgium', 'Luxembourg', 'France', 'Switzerland', 'Austria', 'Czechia', 'Poland'],
}

// Dot vs Bracket Notation

console.log(`${myCountry.name} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods

const myCountry2 = {
  name: 'Germany',
  population: 83,
  capital: 'Berlin',
  language: 'German',
  neighbours: ['Denmark', 'Netherlands', 'Belgium', 'Luxembourg', 'France', 'Switzerland', 'Austria', 'Czechia', 'Poland'],

  describe: function () {
    console.log(`${this.name} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
}

myCountry2.describe();
console.log(myCountry2.checkIsland());

// Iteration - the for loop

for(let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

// Looping Arrays, Breaking and Continuing

const percentages2 = [];
length = populations.length;

for(let i = 0; i < length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);
console.log(percentages2);