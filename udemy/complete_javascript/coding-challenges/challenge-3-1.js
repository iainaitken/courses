'use strict';

console.log('Coding Challenge 2.4')

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= (avgKoalas * 2)) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= (avgDolphins * 2)) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`It's a draw!`);
  }
}

console.log('Test 1');

const dolphinsScore1 = calcAverage(44, 23, 71);
const koalasScore1 = calcAverage(65, 54, 49);
checkWinner(dolphinsScore1, koalasScore1);

console.log('Test 2');

const dolphinsScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);
checkWinner(dolphinsScore2, koalasScore2);
