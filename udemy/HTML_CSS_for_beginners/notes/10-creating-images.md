# Popular Tags

## Notes

Images are displayed with an "img" tag, which needs no closing tag. The tag is given an _attribute_ called "src", which is the URL of the image.

Images should be stored in a separate folder to html files.

We can manipulate the height and width of the image using other attributes, "height" and "width". These are in pixels; if only one is specified then the original image will retain its original proportions, but if both are specified then the image might be stretched or squashed, as appropriate.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Images</title>
  </head>
  <body>
    <div>
      <img width="200" height="100" src="images/image.jpeg">
    </div>
  </body>
</html>
```

Images can be embedded within other elements.