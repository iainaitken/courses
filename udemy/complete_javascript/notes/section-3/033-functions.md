# Functions

## Notes

Functions are one of the most important aspects of JavaScript. A function is a piece of code that we can reuse over and over again. This is referred to as invoking, calling or running the function.

Functions help us keep our code DRY by ensuring that code is not unnecessarily repeated.

A function is more than just a variable. Variables hold values; functions hold lines of code that accomplish a task.

To create a function we use the function keyword followed by our name for the function, followed by a pair of parentheses and finally followed by a pair of curly braces:

```javascript
function functionName() {

}
```

All the code within the curly braces is known as the function buddy, and all of it is run when we call the function.

Functions can be used to receive and return data that we can use elsewhere in the program.

JavaScript functions require an explicit return statement if you want a return value. The result of the function call can be saved to a variable so that it can be reused elsewhere in the program.

```javascript
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const fruitJuice = fruitProcessor(2, 4);
console.log(fruitJuice);
```
