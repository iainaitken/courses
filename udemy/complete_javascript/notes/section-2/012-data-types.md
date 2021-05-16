# Data Types

## Notes

Values can have different types, depending on the data you want the value to hold.

In JS, a value is either:

* An object
* A Primitive value

A JS object is denoted by curly braces:

```javascript
let me = {
  firstName: 'Iain';
  age: 40;
}
```

Everything else is a Primitive:

```javascript
let firstName = 'Iain';
let age = 40;
```

There are seven different data types in JS:

1. Number. This is used for decimals and integers - there is no distinction between floats and integers in JS.
2. String. A sequence of characters; must be surrounded by quotes (either single or double quotes).
3. Boolean. Logical type, can be either true or false.
4. Undefined. This is a variable that does not yet have a value (i.e. is a variable is declared, but no value has yet been assigned to it).
5. Null. This also means an empty value, but is used in different circumstances.
6. Symbol (ES2015). A value that is unique, and cannot be changed.
7. BigInt (ES2020). Larger integers than the Number type can hold.

The first three are the most important.

JavaScript has "dynamic typing" - we don't need to manually define the data type of the value stored in the variable (such as in C). JS automatically determines the data type of a value when it is stored into a variable.

__Remember, values have a data type, variables do not!__

We can assign a new value to a variable that has a different data type to the original value. This can be useful but can be the source of difficult to find bugs:

```javascript
let variable = 23;
variable = 'twenty-three'
```

The "typeof" operator is a special operator that we can use to show the data type of a value.

```javascript
console.log(typeof true);
```

A value of 'udefined' type will both hold the _value_ of 'undefined', and also be of the _type_ 'undefined'.

This is the same for 'null', although there is a bug in JS (not corrected for legacy reasons) whereby the following code will return 'object' rather than the 'null' data type:

```javascript
console.log(typeof null);
```
