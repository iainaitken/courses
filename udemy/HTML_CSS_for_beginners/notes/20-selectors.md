# Selectors

## Notes

Selectors allow us to styles specific elements in the html document. One type of selector is using the html tag itself, but there are other options. We will look at ID's and classes in the next lesson.

We can style the whole of the body of the html document with the "body" tag.

Multiple elements can be targeted at the same time.

We can use the "div" tag in the stylesheet to style only a specific container, but we need to specify which elements inside the div are to be targeted.

```css
p, h1 {
  color:blue;
}

body {
  background:yellow;
}

div p {
  color:red;
}
```
  
  Comments in CSS are with /* ... */.
