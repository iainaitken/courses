# Logical Operators

## Notes

Boolean logic is implemented in JS with the following operators:

* && (AND)
* || (OR)
* ! (NOT)

```javascript
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision); // returns true
console.log(hasDriversLicence || hasGoodVision); // returns true
console.log(!hasDriversLicence && hasGoodVision); // returns false

if (hasDriversLicence && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive');
}

const isTired = true;

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive');
}
```
