# Basic Array Operations (Methods)

## Notes

JavaScript provides us with a number of methods (functions) that we can use directly against arrays. The most basic are below.

```javascript
const friends = ['Dan', 'Steven', 'Peter'];
friends.push('Sarah');
// Adds an element to the end of the array. It mutates the original array, and the return value is the length of the new array.

friends.unshift('John');
// Adds an element to the start of the array. Like .push, it mutates the original array and the return value is the length of the new array.

friends.pop();
// Removes the last element of the array. The return value is the removed element.

friends.shift();
// Removes the first element of the array. The return value is the removed element.

friends.indexOf('Dan');
// Finds the first element in the array matching the argument passed in, and returns the index value. If the argument is not in the array, the return value is "-1".

friends.includes('Peter');
// Returns true if the argument is an element in the array; returns false if not. The argument must exactly match one of the elements for it to return true; partial matches do not count. It checks with strict equality too - it does not perform type coercion.
```
