# Values and Variables

## Notes

A value is a piece of data, and is the most fundamental unit of information in programming. For example, a string, an integer or a float would each be a value.

We can assign a value to a "variable", so that the value can be reused.

The JS convention is that variables are written in camelCase (with the first letter __not__ capitalised).

```javascript
let thisIsAVariable = 'foo';
```

Variable names __cannot__ begin with a number in JS.

```javascript
let 3years = 3;
```

Variable names can __only__ contain letters, numbers, underscores or the dollar sign.

```javascript
let nero&Calypso = 'cats'
```

Variables __cannot__ be named the same as JS reserved keywords (for example, "function"). "name" is a reserved keyword, but you can use it to name a variable - so don't do that.

Constants should be written in all uppercase.

```javascript
let PI = 3.1415;
```

Variable names should be descriptive, and it should be easy to work out what value is being held by looking at the variable name:

```javascript
let myFirstJob = 'Solicitor'
let mySecondJob = 'Programmer'

let job1 = 'Solicitor'
let job2 = 'Programmer'
```
