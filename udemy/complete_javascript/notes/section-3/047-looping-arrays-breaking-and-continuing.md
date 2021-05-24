# Looping Arrays, Breaking and Continuing

## Notes

One of the most used applications of for loops is to iterate through an array.

```javascript
const iain = [
  'Iain',
  'Aitken',
  2021 - 1980,
  'programmer',
  ['Dan', 'Peter', 'Steven'],
];
const length = iain.length;

for(let i = 0; i < length; i++) {
  console.log(iain[i], typeof iain[i]);
}
```

We can also use the for loop to populate an array:

```javascript
const types = [];

for(let i = 0; i < length; i++) {
  types[i] = typeof iain[i];
}

// Alternative syntax

for(let i = 0; i < length; i++) {
  types.push(typeof iain[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

length = years.length;

for(let i = 0; i < length; i++) {
  ages.push(2021 - years[i]);
}
```

### Continue and break statements

The continue statement exits the _current_ iteration of the loop and continue to the next one.

```javascript
for(let i = 0; i < length; i++) {
  if (typeof iain[i] !== 'string') continue;
  console.log(iain[i], typeof iain[i]);
}
```

The break statement terminates the loop entirely.

```javascript
for(let i = 0; i < length; i++) {
  if (typeof iain[i] === 'number') break;
  console.log(iain[i], typeof iain[i]);
}
```
