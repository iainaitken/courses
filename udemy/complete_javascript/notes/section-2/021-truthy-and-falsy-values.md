# Truthy and Falsy Values

## Notes

Falsy values are values that are not quite false yet, but will become false if converted to a Boolean.

There are 5 falsy values in JS:

* NaN
* null
* 0
* ''
* undefined

False is already false, so does not need to be considered in the list of falsy values.

Everything else in JS converts to true.

We can convert to a boolean using the Boolean function:

```javascript
// all evaluate to false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));

// all evaluate to true
console.log(Boolean('true'));
console.log(Boolean('false'));
console.log(Boolean(14));
console.log(Boolean({}));
```

In practice, though, you would probably never explicitly convert a value to a Boolean - we can rely on JS coercion to do it behind the scenes. Often this is done in the context of a if/else control. In this context, JS will coerce any value into a boolean, so that the if/else decision can be made.

```javascript
const money = 30;
if (money) {
  console.log("Spend it!!!");
} else {
  console.log("Get a job, you bum!");
}
```

One use for truthy/falsy values is to see if a variable has been defined:

```javascript
let exist;

if (exist) {
  console.log("Exist is defined");
} else {
  console.log('Exist is undefined!');
}
```

Note, though, that if exist has the value 0, then it will evaluate to false even though it has a value.
