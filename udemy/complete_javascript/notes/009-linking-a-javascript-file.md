# Linking a JavaScript File

## Notes

JavaScript needs to be attached to an HTML file. There is a "script" tag in HTML where we can write JS code and link JS files.

It is not mandatory to place semi-colons at the end of each line, but it is considered good practice, and makes the code cleaner.

```html
  <script>
    let js = 'amazing';
    if (js === 'amazing') alert('JavaScript is FUN!')
  </script>
```

JS code that is run in the html file will not automatically appear on screen or in the console; we need to specify where the output is shown. To output to the console, we need to use the following command:

```javascript
console.log();
```

Where JS code is written in an html document, this is called "inline script". The only advantage of this is that we don't have to load another file; usually however you would want to keep your JS separate, to keep logic separate from content.

.js files are linked to the html file using a script tag:

```html
  <body>
    <h1>JavaScript Fundamentals – Part 1</h1>

    <script src="script.js"></script>
  </body>
```

This is usually done at the end of the body tag.
