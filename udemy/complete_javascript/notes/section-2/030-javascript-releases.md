# JavaScript Releases

## Notes

Javascript was introduced to allow websites to become more interactive. It was developed in 1995 by Brendan Eich in just 10 days (and it shows).

It was originally called Mocha, then renamed to LiveScript in 1996, and then renamed to JavaScript in the same year to attract Java developers, which was the hottest language at the time.

JavaScript has __nothing__ to do with Java.

Microsoft copied JavaScript in 1996 and renamed it JScript, to be used on their new internet browser (IE).

In 1997 JavaScript was standardised. It was submitted to ECMA, an international standardisation organisation, which released ECMAScript 1 (ES1). This was the first official standard for JavaScript. Now, all browsers ran this single standard of JavaScript.

In 2009, ES5 was released.

In 2015, ES6 (aka ES2015) was released and ECMAScript changed to an annual release cycle.

These two were huge updates with lots of new features.

JavaScript has backwards compatibility, all the way back to ES1. This means that any JavaScript code written in 1997 will _still_ work today. The idea is to __not break the web__.

Therefore, each release of JavaScript is not a new version, as old features are never removed. They are incremental releases.

Because old features are never removed, there are a lot of old, buggy features in JavaScript. The best way to deal with these is to ignore them; use modern JavaScript instead.

JavaScript is _not_ forwards compatible - JavaScript from a future webpage will likely not work in a current browser. This means that if a user is using an old browser, they might run into problems accessing a newer webpage.

To use modern JavaScript, we need to consider 1) development and 2) production.

1. Development. In the dev phase, use the latest version of Google Chrome so that all features will work.
2. Production. Use Babel to transpile and polyfill your code (i.e. convert to ES5) - this will ensure that your webpage works for all users.

We use ES5 as the target because it is supported by all browsers today. ES6+ (i.e. all releases from ES6/ES2015 onwards) is well supported by all modern browsers, but has no support in older browsers. Older browsers can use most modern features with transpiling and polyfilling.

[Link to compatibility table](https://kangax.github.io/compat-table/es6/)

ESNext refers to _future_ releases of ECMAScript (2021, 2022 etc). Most browsers start implementing new features before they are officially adopted. Any new feature follows a 4-stage process to be adopted - when it reaches stage 4, it has been accepted and will be in the next release. Many browsers will add features that have reached Stage 3.

It's important to learn how some things were done before ES6, so we better understand how things work behind the scenes. Also many tutorials are written in ES5, and older code bases may contain ES5 code.
