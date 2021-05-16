# Operator Precedence

## Resources

[MDN precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Notes

Code is not always executed by JS top to bottom, left to right. Certain operators take precedence over others (think BIDMAS in mathematics).

The precedence table in webpage referred to by the link above contains a list of all of the JavaScript operators, and their precedence (signified by a number, up to 21 - higher numbers take greater precedence).

In our examples, the mathematical operators have precedence of 14-15, whilst our comparison operators have precedence of 12. Equality operators have precedence of 11 while assignment operators have a precedence of 3.

Grouping has the highest precedence, at 21 - this is where parentheses are used to group operations.

We also need to consider associativity.

* Left-associativity means that where operators have the same precedence, the operations on the left hand side are processed first.
* Right-associativity means that operations on the right are processed first.

We can see that with the following example:

```javascript
a = b = 5
```

Here, both a and b equal 5. This is because assignment operators are right-associative; b = 5 is processed before a = b.

In the example below, the subtraction operators have precedence of 14, and are left-associative. They are processed before the assignment operators, which are right-associative.

```javascript
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
```

So, (25 - 10) is processed first. This gives us 15.

Next, (15 - 5) is processed. This gives us 10.

At this point, our equation looks like this:

```javascript
x = y = 10;
```

(y = 10) is processed next, followed by (x = y), which means that both x and y will have the value 10 assigned to them.
