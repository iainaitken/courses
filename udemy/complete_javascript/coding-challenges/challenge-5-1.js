"use strict";

console.log("Coding Challenge 5.1");

const printForecast = function (temps) {
  const length = temps.length;
  let outputArray = ["... "];

  for (let i = 0; i < length; i++) {
    let day = i + 1;
    let text = ` ${temps[i]}°C in ${day} days ...`;
    outputArray.push(text);
  }

  const output = outputArray.join("");
  return output;
};

console.log("Test 1");

const temps1 = [17, 21, 23];
const test1 = printForecast(temps1);
console.log(test1);

console.log("Test 2");

const temps2 = [12, 5, -5, 0, 4];
const test2 = printForecast(temps2);
console.log(test2);

// Note - can also do the following (improved, fewer steps to get result)

const printForecast2 = function (temps) {
  const length = temps.length;
  let output = "... ";

  for (let i = 0; i < length; i++) {
    let day = i + 1;
    let text = ` ${temps[i]}°C in ${day} days ...`;
    output += text;
  }

  return output;
};

console.log("Test 1A");

const temps1A = [17, 21, 23];
const test1A = printForecast2(temps1A);
console.log(test1A);

console.log("Test 2A");

const temps2A = [12, 5, -5, 0, 4];
const test2A = printForecast2(temps2A);
console.log(test2A);
