# If/Else Statements

## Notes

If/else statements allow us to create branches in our code; i.e. a decision is made that affects how the program operates.

The syntax is as follows:

```javascript
if (condition) {
  // code to be run if condition evaluates to true
}
```

__Note - control/command/space lets you insert a smiley into VS Code!__

```javascript
const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log("Sarah can obtain a driving licence 🚗")
}
```

Convention is to write the condition directly after the if statement, rather than have it contained in a variable:

```javascript
const age = 19;

if(age >= 18) {
  console.log("Sarah can obtain a driving licence 🚗")
}
```

Else blocks are run if the condition evaluates to false:

```javascript
const age = 15;

if(age >= 18) {
  console.log("Sarah can obtain a driving licence 🚗")
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is not old enough to obtain a driving licence, she must wait another ${yearsLeft} years 😭`)
}
```

__This is known as a "if-else control structure".__

Note - if creating a variable inside an if-else statement, you need to be aware of scope. A variable created inside a code block is not available for use outside of that code block, so it must first be created in the higher scope:

```javascript
const birthYear = 1980;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
```
