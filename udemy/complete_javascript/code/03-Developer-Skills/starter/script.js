// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Problem 2: My solution

const calcAmplitude = function (temps1, temps2) {
  const mergedTempArrays = temps1.concat(temps2);
  const errorMessage = "error";
  const filteredTemps = mergedTempArrays.filter(function (x) {
    return x !== errorMessage;
  });
  let maxTemp = Math.max(...filteredTemps);
  let minTemp = Math.min(...filteredTemps);
  return maxTemp - minTemp;
};

const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, -2, -8, -2, "error", 5, "error", 10, 9, 7, 6, 1];

console.log(calcAmplitude(temperatures1, temperatures2));

// Problem 2: Jonas's solution

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  const length = temps.length;

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
console.log(amplitudeNew);

// Problem 1: My solution

// const calcAmplitude = function (temps) {
//   const errorMessage = "error";
//   const filteredTemps = temps.filter(function (x) {
//     return x !== errorMessage;
//   });
//   let maxTemp = Math.max(...filteredTemps);
//   let minTemp = Math.min(...filteredTemps);
//   return maxTemp - minTemp;
// };

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// console.log(calcAmplitude(temperatures));

// Problem 1: Jonas's Solution

// const calcTempAmplitude = function (temps) {
//   const length = temps.length;
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

/*

const x = 23;
if (x === 23) console.log(23);
const myFunction = (params) => console.log("test");

const testVariable = 89;

console.log(testVariable);

*/
