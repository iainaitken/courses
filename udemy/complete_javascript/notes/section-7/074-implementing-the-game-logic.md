# Implementing the Game Logic

## Notes

Differences in approach:

- JS used '.trunc' to help generate a random number between 1 and 20:

```javascript
const number = Math.trunc(Math.random() * 20) + 1;
```

- For development purposes, JS displayed the random number on the page rather than in the console.
- JS created a score variable in script.js, so that the game logic is self-contained. Otherwise, score would be in the DOM.
