# External Styles

## Notes

External styling is the preferred way of incorporating CSS into an html document. The styling is kept in a separate .css file and incorporated into the html document through the header. We do this with the "link" tag, which does not require a closing tag.

The attributes of the link tag are "rel" (relationship, which will be "stylesheet") and "href", which is a link to the external file.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>External CSS Styling</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```

In css/style.css:

```css
p {
  color:red;
  font-size:25px;
  font-weight:bold;
}
```
