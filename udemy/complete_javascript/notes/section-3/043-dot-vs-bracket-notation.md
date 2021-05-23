# Dot vs Bracket Notation

## Notes

We can retrieve and change data held in objects using dot- and bracket-notation.

### Dot Notation

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  age: 2021 - 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
}

iain.firstName;
iain.lastName;
iain.age;
iain.job;
iain.friends;

// Using dot notation to add a property
iain.eyeColour = 'blue';
```

### Bracket Notation

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  age: 2021 - 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
}

iain['firstName'];
iain['lastName'];
iain['age'];
iain['job'];
iain['friends'];

// Using bracket notation to add a property
iain['shoeSize'] = 10;
```

Bracket notation differs from dot notation in that the code within the brackets is an expression, so we aren't limited to the key in the form of a string. We can use any expression provided that the value produced is a string that matches the key. This is useful, for example, where we are asking the user of a website to provide input, to display data held in an object. We might store that input string as a variable, which we wouldn't be able to use to access the data through dot notation.

If we attempt to access a property that is not there, we get "undefined", which is a falsy value. We can use this (and the converse, where a valid property would have a truthy value (but beware empty strings and zero, which is falsy)) to build logic.

### Accessing Data in Objects

We can perform operations on data held in objects in the same way as data held in variables. For example, we have access to the usual array methods in JS:

```javascript
console.log(`${iain.firstName} has ${iain.friends.length} friends, and his best friend is ${iain.friends[0]}.`);
```

Note - JavaScript precedence comes into play when chaining things together. Dot notation and bracket notation (called "Member Access" and "Computed Member Access" respectively on the MDN precedence table) have high precedence, at 20, and left-associativity so therefore JavaScript processes "iain.friends" before "friends.length".
