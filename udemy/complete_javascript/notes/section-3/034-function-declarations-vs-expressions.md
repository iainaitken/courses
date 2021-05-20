# Function Declarations vs. Expressions

## Notes

There are different ways of writing functions in JavaScript.

A function declaration is as seen in the last lesson, using the function keyword:

```javascript
function functionName(parameters) {
  // code goes here
}
```

Remember that a parameter is the placeholder in the function, an argument is the value that we pass in to the function.

Function expressions are different.

We still use the function keyword, but we do not give it a name. Instead, we store the function as a variable, which becomes the function. An un-named function is known as an anonymous function. The function is an expression; it produces a value which we can store as a variable. To call the function, we use the same syntax.

```javascript
// function declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1980);
console.log(age1);

// function expression

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);
```

Important: __In JavaScript, a function is a value.__ It is not a data type (like strings, numbers etc) but it is a value, so we can assign that value to a variable.

Differences between function declarations and function expressions:

* Function declarations can be called __before__ they are defined in the code. Function expressions cannot. This is due to a process called _hoisting_.

Which type to use? Mainly, personal preference. For example, some programmers prefer to use function expressions, as it forces them to define the functions at the top of the code, thus improving readability. Also, some prefer to store everything in variables.
