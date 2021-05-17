# Type Conversion and Coercion

## Notes

Converting between data types is a fundamental part of any programming language.

For example, we might want to convert a number to a string, and vice versa. This is common in web development, where inputs from webpages are in the form of strings.

### Type Conversion

Where we manually (explicitly) convert from one type to another.

JavaScript has three main data types (string, number and boolean) and we can only explicitly convert to one of those three types (we can't convert to an undefined type, for example).

We can use the "Number" function to convert a string to a number:

```javascript
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
```

If we try and convert a string to a number that is not possible (i.e. text) the JavaScript will return NaN, which stands for Not A Number (which means invalid number - it is still a number data type). JS will do this any time an operation that involves numbers fails to produce a new number.

To convert a number to a string, we can use the "String" function:

```javascript
console.log(String(23), 23);
```

### Type Coercion

Where JavaScript converts from one type to another behind the scenes.

Type Coercion happens whenever an operator is dealing with two values that have different data types.

JS will convert one type to another behind the scenes, so that the operation can be executed. For example, during concatenating, the plus operator triggers a coercion of numbers to strings:

```javascript
console.log("I am " + 23 + " years old";)
```

Not all operators work the same. The minus, multiply and divide operators convert strings to numbers, not the other way around:

```javascript
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '3');
```

Comparison operators also convert strings to numbers:

```javascript
console.log('23' > '20');
```
