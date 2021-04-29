# Linking Javascript

## Notes

We can incorporate JavaScript into our html file by using the "script" tag in the html body, and include some javascript in there. Normally, however, we would have the JS in an external file, and link to it in the head of the html document. In the html header, we give the "Script" tag an attribute called "src", which is the link to the JS file.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Linking Javascript</title>
    <script src="js/script.js"></script>
  </head>
  <body>
    <script>
      document.write("Hello");
    </script>
  </body>
</html>
```

In js/script.js:

```javascript
alert("This is a javascript alert");
```