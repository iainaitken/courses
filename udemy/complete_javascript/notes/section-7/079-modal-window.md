# Project #2: Modal Window

## Notes

A modal window is a dialog box or popup window displayed on top of the current page.

It consists of the dialog box and an overlay that masks the rest of the page. Clicking the x, or on the overlay, closes the window.

The window and overlay are "hidden" so that they are not displayed in the browser. We can add some onclick functionality that changes the hidden attribute so it becomes visible.

querySelector will only choose the first element in the DOM that matches the search term. If we have multiple elements of the same class that we want to be able to manipulate then we would need to use something else:

```javascript
const btnShowModal = document.querySelectorAll(".show-modal");
```

When querySelectorAll is used, we get a 'node list' in the console. It is similar to an array, and we can iterate over it in the same way as we can with an array.

```javascript
for (let i = 0; i < btnsShowModal.length; i++) console.log(btnsShowModal[i]);

// Note: this is the same as using a code block

for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i]);
}
```

To make the modal window and overlay visible, we need to remove the 'hidden' class. At the moment, the html element looks like this:

```html
<div class="modal hidden"></div>
```

The class list is the string of words, and it can be manipulated. For example, we can remove the word 'hidden':

```javascript
modal.classList.remove("hidden");
```

the 'classList' method gives us access to a suite of tools to manipulate the class list. To add the hidden class, we can use the add method:

```javascript
modal.classList.add("hidden");
```

Using classes is the main way in which websites can be manipulated, because we can add styles etc to the class list and remove them easily. It is possible to do the same thing using attributes of each element, for example:

```javascript
modal.style.display = "block";
modal.style.display - "hidden";
```

However, this means individually manipulating each attribute, whereas if we bundle the attributes within a class (in this case, the 'hidden' class) then it is easier to deal with.

Note: you do not have to define what happens on a click event as a function if only one thing will happen. For example, here we define a function that contains the actions that occur when either the overlay or the cross in the window are clicked. That function is then called on a click event.

```javascript
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

overlay.addEventListener("click", closeModal);

btnCloseModal.addEventListener("click", closeModal);
```

Note: if we use the following code then the event listener won't work, as JavaScript will call the closeModal function immediately:

```javascript
overlay.addEventListener("click", closeModal());
```
