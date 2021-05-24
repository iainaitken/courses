# The while loop

## Notes

The while loop is another type of loop in JavaScript. We still need a counter, a condition and we need to increase the counter. However, in a while loop, this is done differently as we can only specify a condition.

```javascript
// For loop
for(let rep = 1; rep <= 10; rep++) {
  console.log(`For: lifting weights repetition ${rep} 🏋🏻‍♂️`);
}

// While loop
let rep = 1;
while(rep <= 10) {
  console.log(`While: lifting weights repetition ${rep} 🏋🏻‍♂️`);
  rep++;
}
```

As you can see above, the components are the same, however the counter is declared before the while loop is implemented, and the counter is incremented in the code that is running in the loop.

While loops are more versatile than for loops, and can be used in a number of scenarios. For example, if we do not need a counter, and the loop should run as long as a certain condition is not met:

```javascript
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('loop is about to end...');
}
```
