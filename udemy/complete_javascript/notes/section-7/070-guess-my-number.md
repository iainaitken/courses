# Guess My Number: selecting an HTML element in JS

## Notes

[Link to project repo]()

### Selecting an element

To select an html element in JavaScript, we use:

```javascript
document.querySelector();
```

We pass an argument into the method, as follows:

```javascript
document.querySelector(".message");
```

The parameter takes the same format as in our CSS files:

- A class is preceded by a '.'
- An ID is preceded by a '#'

We can select specific properties of the element by adding a further command:

```javascript
document.querySelector(".message").textContent;
```
