# Functions Calling Other Functions

## Notes

It is possible to call a function from within a function.

```javascript
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(noOfApples, noOfOranges) {
  const applePieces = cutFruitPieces(noOfApples);
  const orangePieces = cutFruitPieces(noOfOranges)
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
```
