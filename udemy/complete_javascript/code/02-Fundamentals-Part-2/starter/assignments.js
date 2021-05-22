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
