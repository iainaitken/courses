# Strings and Template Literals

## Notes

Strings can be built using concatenation or "template literals". Template literals were introduced in ES6.

A string where template literals are being used must be surrounded by back ticks (`). We can insert variables into the string using ${}.

```javascript
const firstName = "Iain";
const job = "programmer";
const birthYear = 1980;
const year = 2021;

const iain = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(iain);

const iainNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(iainNew);
```

Note - backticks can be used to denote any string.

### Multi-line strings

Back ticks (template literals) can be used to create multi-line strings. Prior to ES6, multi-line strings had to be built as follows:

```javascript
console.log("String with \n\
multiple \n\
lines");
```

Now, we can do the following instead:

```javascript
console.log(`String with
multiple
lines`);
```

### Type Coercion

JavaScript will convert one datatype to another in certain circumstances. When concatenating strings, if you provide a number to be inserted into the string through concatenation then JS will convert the number to a string.
