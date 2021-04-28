# Tables

## Notes

Tables are created with the "table" tag. 

This tag has several child tags, including:

* "tr" - table row
* "td" - table data
* "th" - table heading

Table rows are displayed vertically; table data cells are displayed horizontally. Table headings are bold by default.

Best practice is to wrap headings in "thead" and everything underneath in "tbody". This does not change how the table is displayed on the page.

You can put other elements in the table, too, like headers, forms or paragraphs.

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Tables</title>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tony</td>
          <td>Ramone</td>
        </tr>
        <tr>
          <td>Ivor</td>
          <td>Biggun</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```