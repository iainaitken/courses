console.log('----------Assignments----------');

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const country1 = describeCountry('The UK', 66, 'London');
const country2 = describeCountry('Tanzania', 58, 'Dodoma');
const country3 = describeCountry('Belgium', 11, 'Brussels');

console.log(country1);
console.log(country2);
console.log(country3);
