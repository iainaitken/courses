# Reviewing Functions

## Notes

```javascript
// Function Declaration - this can be used before it is declared

function calcAge(birthYear) {
  return 2021 - birthYear;
}

// Function Expression - a function value stored in a variable

const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

// Arrow Function - from ES6, great for quick one-line functions, has no "this" keyword

const calcAge = birthYear => 2021 - birthYear;

```

The three ways of creating functions all operate in the same way conceptually; they take in data, transform that data, and return the transformed data.
