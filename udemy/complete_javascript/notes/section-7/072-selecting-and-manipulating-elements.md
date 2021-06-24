# Selecting and Manipulating Elements

## Notes

Selecting and manipulating HTML elements is a simple matter of using normal JavaScript commands in conjunction with document.querySelector:

```javascript
document.querySelector(".message").textContent = "🥳 Correct Number!";
```

We need to use the correct property to access the data. 'value' will grab the data in an input field, whereas 'textContent' will grab text from an element (such as a paragraph element).
