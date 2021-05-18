# The Conditional (Ternary) Operator

## Notes

As well as if/else and switch statements, we have a third way of writing conditionals: the ternary operator.

It is similar to an if-else statement, but on one line.

```javascript
const age = 23;

age >= 18 ? console.log('I like to drink wine 🍷') : console.log('No wine for you');
```

This means that we can only run a single line of code for each branch, unlike if/else or switch statements, which can handle multiple lines of code.

It is called a ternary operator because it has three parts; the condition, the if part and the else part.

An operator always produces a value, so a ternary is an expression in JavaScript. So, for example, you can use a ternary operator in a string literal.

```javascript
console.log(`Sarah ${age >= 18 ? 'is' : 'is not'} old enough to drink alcohol`);
```

It also means that if we have a value, we can assign that value to a variable - so a ternary can be used to conditionally assign a value to a variable. This is preferable to an if/else statement as we do not have to first declare the variable, unlike an if/else statement.

```javascript
const drink = age >= 18 ? 'wine 🍷' : 'water 🚰'

console.log(`I like to drink ${drink}`);
```

A ternary is not a replacement for an if-else statement, though. They are most useful when we need a quick decision that produces a value.
