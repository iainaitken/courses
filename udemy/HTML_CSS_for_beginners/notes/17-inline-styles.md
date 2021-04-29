# Inline Styles

## Notes

There are three different ways of styling HTML pages with CSS:

1. Inline
2. Internal
3. External

Inline styles are set out in the body of the HTML element. We use the "style" attribute to insert CSS styles into that specific HTML element.

In the example below, the _property_ of the style is "color" while the _value_ is "red"; they are divided by a colon.

Multiple styles are separated with semi-colons.

Inline styles should generally be avoided, to avoid repetition and keep your code readable.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <p style="color:red;font-size:25px;font-weight:bold">This is a paragraph</p>

    <p>This is another paragraph, with no styling</p>
  </body>
</html>
```
