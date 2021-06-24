# Manipulating the DOM

## Notes

DOM: Domain Object Model

A structured representation of the objects in an html file. It allows Javascript to access HTML elements and styles to manipulate them.

It is a connection point between HTML and Javascript.

The DOM is created by the browser when the page is loaded and is stored in a tree structure. The terms "parent", "child" and "sibling" elements are used to describe the relationship between elements on the page.

Each element in the tree is known as a node.

'document' is a JavaScript object that provides us with an entry point to the DOM:

```javascript
document.querySelector();
```

DOM is **not** part of JavaScript. It is part of the Web APIs (JavaScript libraries) that browsers can access, so we can in turn manipulate it using JavaScript.
