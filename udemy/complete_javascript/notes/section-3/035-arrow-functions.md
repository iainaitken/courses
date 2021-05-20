# Arrow Functions

## Notes

A third type of function, added in ES6, is the arrow function. It is a special form of function expression that is shorter and faster to run.

At its simplest, _where we have a single parameter and a single line of code_, an arrow function is typed as follows:

```javascript
birthYear => 2037 - birthYear;
```

Normally we would assign the return value to a variable:

```javascript
const calcAge3 = birthYear => 2037 - birthYear;
```

The first birthYear is the parameter; the second is the argument we have passed in to the function.

The arrow function is a form of function expression, because it is a value and we can assign it to a variable. Arrow functions with a single line of code also have implicit returns and do not require curly braces, which is why arrow functions are very useful for single-line functions.

Multi-line arrow functions are possible, but require curly braces and explicit returns.

```javascript
const yearsUntilRetirement = birthYear => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return retirement;
}
```

If we have multiple parameters, then we need to wrap the parameters in parentheses:

```javascript
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
}
```

__Arrow functions do not get a "this" keyword - see later in the course.__
