# Equality Operators: == vs ===

## Notes

We can use equality operators to check if a variable is equal to something. This is often used in the context of an if/else control:

```javascript
const age = 18;

if (age === 18) console.log('You just became an adult 🎊');
```

Equality operators return true or false. There are two equality operators.

### ===

The triple equal comparison operator is also called the strict equality operator. It does not perform type coercion, and only returns true if both values and types are the same.

### ==

The double equal comparison operator is also called the loose equality operator; it performs type coercion.

__Generally speaking, you should avoid using the loose equality operator, as it has a number of rules that work in unexpected ways, and can introduce bugs into your program.__

### !== and !=

These are the "different" operators, which check whether two values are NOT equal. As with the equality operators, they operate strictly (!==) and loosely (!=).
