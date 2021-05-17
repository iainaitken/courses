# Statements and Expressions

## Notes

An expression is a piece of code that produces a value - such as 3 + 4.

```javascript
3 + 4
```

_Any_ code that produces a value is an expression in JS - this means that even the following is an expression:

```javascript
1991
```

A statement is a larger bit of code that when executed does not, in itself, create a value. In the example below, the if/else statement doesn't really produce a value, it instead performs actions. 

```javascript
if (23 > 10) {
  const str = '23 is bigger';
}
```

Note that the string "23 is bigger" _is_ an expression (the entire line of code is the statement).

JavaScript expects expressions and statements in different places. For example, you can only insert expressions into a template literal, as a value is needed to put into the string.
