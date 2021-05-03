# Hover Effect

## Notes

This is where we hover the mouse over an element on the screen, and we see something happen.

To do this, we use a sudo-selector. We take the element we want to style, and use the following syntax:

```css
#hovers {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}

#hovers:hover {
  background-color: red;
}
```