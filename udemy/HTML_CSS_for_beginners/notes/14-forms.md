# Forms

## Notes

Forms allow us to do many things, such as receive information from users, or send emails. We do this using the "form" element.

Form has various child tags, such as:

* "input". This marks an input field, and does not need a closing tag. The type of input is specified as an attribute, with the default being text. 

Input fields are, by default, displayed horizontally but can be re-ordered using breaks or paragraph tags, for example. 

Different types have different attributes; for example, the "email" type includes basic validation (you need to include the @ symbol), and the "password" type covers the input so characters cannot be seen. "file" lets you choose a file from the computer. "submit" gives us a submit button.

We can label fields with simple text, or better, with the label attribute. The label attribute can be placed before the input tag, or it can wrap the input tag.

Placeholders allow us to have default text within the form field.

Each field should have a name attribute, so that when the form is submitted, the input has an ID and we can take the data and do things with it.

The action attribute of the form is where we specify what happens when the submit button is clicked. It is accompanied with the method attribute, which specifies what type of HTTP request it is (usually POST).

```html
<!DOCTYPE html>
<html lang="="en>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <form action="#" method="post">
      <label for="name">Name</label>
        <input type="text" name="name" placeholder="Enter name">
      <br>
      <label for="email">Email
        <input type="email" name="email" placeholder="Enter email address">
      </label>
      <br>
      <label for="password">Password</label>
        <input type="password" name="password" placeholder="Enter password">
      <br>
      <label for="file">File</label>
        <input type="file" name="file">
      <br>
      <input type="submit">
    </form>
  </body>
</html>
```