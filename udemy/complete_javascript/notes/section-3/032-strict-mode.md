# Strict Mode

## Notes

In order to use strict mode, the following code must appear at the __very top__ of your file:

```javascript
'use strict';
```

It is best to do this with every JS file you work on.

Strict mode allows devs to avoid making basic errors. It prevents us from doing certain things, and creates visible errors in the dev console in certain situations where, without strict mode, JavaScript would simply fail silently.

For example:

* When using strict mode, JavaScript will throw an error if you assign a value to a variable that has not been explicitly declared. Without strict mode, JavaScript would create a object in the global scope instead, and you would not know about a potential error:

```javascript
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log('I can drive');
```

In the above example, there is an error in the third line of code (_hasDriverLicence_ rather than _hasDriversLicence_). Without strict mode, JavaScript will simply create a new variable called hasDriverLicence.

In addition, strict mode will not let you use certain words for variables, as they are likely to become reserved words in future releases of JavaScript. These include "interface" and "private" among others.
