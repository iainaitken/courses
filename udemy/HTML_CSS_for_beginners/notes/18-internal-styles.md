# Internal Styles

## Notes

Internal styles are set out in the header of the html document, using a "style" tag.

We use a selector to specify which elements in the html document are to be styled; this is the name of the html tag followed by a pair of curly braces. Styling goes inside the curly braces.

Internal styling is not to be encouraged, unless very little CSS is required. External styling is preferred.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Internal CSS</title>

    <style>
      p {
        color:red;
        font-size:25px;
        font-weight:bold;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```
