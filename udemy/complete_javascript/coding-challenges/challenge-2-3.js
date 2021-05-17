console.log('Coding Challenge 2.3')

console.log('Test 1');

let dolphinsAverageScore = (96 + 108 + 89) / 3;
let koalasAverageScore = (88 + 91 + 110) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
  console.log('Dolphins are the winners');
} else if (koalasAverageScore > dolphinsAverageScore) {
  console.log('Koalas are the winners');
} else {
  console.log("It's a draw");
}

console.log('Test 2');

const minimumScore = 100;

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 123) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
  console.log('Dolphins are the winners');
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumScore) {
  console.log('Koalas are the winners');
} else {
  console.log("It's a draw");
}

console.log('Test 3');

dolphinsAverageScore = (97 + 112 + 101) / 3;
koalasAverageScore = (109 + 95 + 106) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore) {
  console.log('Dolphins are the winners');
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= minimumScore) {
  console.log('Koalas are the winners');
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= minimumScore) {
  console.log("It's a draw");
} else {
  console.log('No team has won the trophy');
}
