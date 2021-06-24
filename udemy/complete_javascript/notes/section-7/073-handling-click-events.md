# Handling Click Events

## Notes

We often want to be able to let the user click on an element, and for our page to respond to that input.

We do this using an "event listener". An event might be a click, key press etc. With an event listener we can wait for a certain event to happen and then react to it.

We pass two arguments into the addEventListener function; the first is the type of the event, and the second is the function that we wish to call when the event occurs. Remember, a function is a value that we can pass into another function just like a string or number.

```javascript
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
```

The above code is a function expression, we just haven't stored it to a variable. We have defined it, but have not called it anywhere. The Javascript engine will call it when the event listener is triggered.
