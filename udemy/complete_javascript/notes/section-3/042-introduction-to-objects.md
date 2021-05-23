# Introduction to Objects

## Notes

Objects are a data structure in JavaScript. They are a way of making use of key-value pairs in JavaScript.

Objects are built using curly braces (as opposed to square brackets for arrays).

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  age: 2021 - 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
}
```

Each key-value pair is a "property", so the above object would have 5 properties. Each value ina  key-value pair can be represented by a value, variable or expression, just like with arrays.

Objects are one of the most fundamental concepts in JavaScript and there are therefore many ways of creating them.

The order in which object properties are set out does not matter - we do not access them by reference to their position within the object. Instead, we access them by reference to their key.
