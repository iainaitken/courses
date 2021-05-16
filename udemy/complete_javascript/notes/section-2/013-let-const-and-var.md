# Let, Const and Var

## Notes

There are three different ways of declaring variables in JS.

* let
* const
* var

let and const were introduced in ES6.

These keywords are only used when declaring a variable; we do not need to use them when assigning a value to the variable after it has been declared, or when we are re-assigning a new value to the variable:

```javascript
let firstName = "Iain";

let age;
age = 30;
age = 31;
```

Re-assigning a value to a variable is also known as "mutating" the value of the variable.

Const is used to declare a variable that is not supposed to change later in the program. If we do attempt to mutate the value, a TypeError will occur. A const is therefore an immutable variable.

```javascript
const birthYear = 1980;
```

Because consts are immutable, we cannot declare an empty const.

For best practice, it is best to use const unless you are sure that the variable will need to change in the future. It is best to avoid the possibility of variables changing, as this can be a source of bugs.

__Avoid using var, as this is outdated.__

var is the old way of declaring variables and works in a similar fashion to let.

```javascript
var job = 'solicitor';
job = 'programmer';
```

var and let are actually quite different under the hood - we will learn about these later.

It is not actually __mandatory__ to declare a variable using let, const or var.

```javascript
lastName = "Aitken";
console.log(lastName);
```

However, it is important that we properly declare variables. If we don't, then the program creates a property on the global object, rather than creating a variable in the local scope.
