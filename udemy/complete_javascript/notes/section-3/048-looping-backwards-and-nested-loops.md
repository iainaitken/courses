# Looping Backwards, and Nested Loops

## Notes

### Looping backwards

It is easy to loop backwards through an array by adjusting the parameters of the for loop.

```javascript
const iain = [
  'Iain',
  'Aitken',
  2021 - 1980,
  'programmer',
  ['Dan', 'Peter', 'Steven'],
];

let length = iain.length - 1;

for(let i = length; i >= 0; i--) {
  console.log(iain[i]);
}
```

### Nested Loops

A loop within a loop is "nested".

```javascript
for(let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---------Starting Exercise ${exercise}---------`);
  for(let rep = 1; rep <= 5; rep++) {
    console.log(`rep ${rep}`);
  };
}
```
