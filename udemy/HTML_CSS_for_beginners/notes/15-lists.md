# Lists

## Notes

We can create lists in HTML.

"ul" creates an unordered list (i.e. bullet-pointed list). "li" creates a list item and are children of the "ul" tag.

"ol" creates an ordered (numbered) list, and also has child "li" tags.

We can create links by nesting an anchor tag inside a "li" tag.

We can also put images in list items.

We can add headings etc.

Unordered lists are often used for navigation - lists can be displayed horizontally using CSS.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li><a href="#">First list item</a></li>
      <li><img width="100" src="images/image.jpeg"></li>
    </ul>
    <ol>
      <li>First list item</li>
      <li>Second list item</li>
    </ol>
  </body>
</html>
```