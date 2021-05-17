# Boolean Logic

## Notes

Boolean logic is a branch of computer science that uses boolean values to solve complex problems.

In order to do that, we use different logical operators to combine true/false values.

* AND
* OR
* NOT

### AND

This will evaluate to true if both statements are true, otherwise it will evaluate to false.

| __AND__   | _TRUE_  | _FALSE_ |
| --------- | ------- | ------- |
| _TRUE_    | TRUE    | FALSE   |
| _FALSE_   | FALSE   | FALSE   |

### OR

This will evaluate to true if either statement is true. It will evaluate to false only if _neither_ is true.

| __OR__    | _TRUE_  | _FALSE_ |
| --------- | ------- | ------- |
| _TRUE_    | TRUE    | TRUE    |
| _FALSE_   | TRUE    | FALSE   |

### NOT

The NOT operator does not combine values; instead, it operates on a single value and inverts it. If the value is true, it is converted to false, and vice versa.

NOT has precedence over AND/OR.
