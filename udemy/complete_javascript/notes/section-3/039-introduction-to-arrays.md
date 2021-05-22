# Introduction to Arrays

## Notes

Arrays are a form of data structure, and along with objects are one of the two most important JavaScript data structures. 

Data structures allow us to bundle values into a container, rather than individual variables. This gives us access to powerful tools to manipulate and use that data.

Arrays are built using square brackets and a list of string-separated values:

```javascript
const friends = ['Dan', 'Steven', 'Peter'];
```

An alternative way of creating an array is to use the Array function:

```javascript
const years = new Array(1991, 1992, 1993, 1995, 2001)
```

Accessing individual values in an array is by way of square bracket notation. The first element is in position zero, so to access the first element:

```javascript
friends[0];
```

Arrays have properties that allow us to interrogate and manipulate the data within. For example, to find out how many elements there are in the array:

```javascript
friends.length;
```

JavaScript does not have minus notation when it comes to arrays, unlike Ruby, but we can access the last element in an array, and also work backwards through the elements, as follows:

```javascript
console.log(friends[friends.length -1]);
console.log(friends[friends.length -2]);
```

This also means that _any_ expression can be placed in the square brackets. Remember, an expression is something that produces a value. A statement cannot go into the square brackets - JavaScript will only accept an expression.

We can reassign a value in the array by selecting the element and using the assignment operator to assign the new value. We can also add elements to the array using the assignment operator:

```javascript
const friends = ['Dan', 'Steven', 'Peter'];
friends[2] = 'Jim';
friends[3] = 'Sarah';
// ['Dan', 'Steven', 'Jim', 'Sarah']
```

An array can be mutated even if it is declared as a _const_. This is because only Primitive values are immutable.

However, we cannot change the entire array in a single operation.

Arrays can hold values of different data types:

```javascript
const firstName = 'Iain';
const iain = [firstName, 'Aitken', 2021 - 1980, 'programmer', friends];
console.log(iain);
```

_Notes - an array can hold an array as an element. JavaScript expects a value for each element, so we can also use variables and expressions to populate the array._

Trying to use mathematical operators with an array will probably not have the outcome you expect. For example, you cannot add an element to an array with the "+" operator. If you do, then the + operator will convert the array to a string and concatenate it and the number you are trying to add:

```javascript
const y = [1980, 1967, 2002, 2010, 2018];
console.log(y + 10);
// Result is 1980,1967,2002,2010,201810
```
