# Object Methods

## Notes

Objects can hold data, data structures (i.e. arrays) and even other objects.

They can also hold functions.

  __A function that is attached to an object is called a method.__

A function is really just a value. If so, we can create a key-value pair where the value is a function expression.

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  birthYear: 1980;
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
  hasDriversLicence: true,

  calcAge: function (birthYear) {
    return 2021 - birthYear;
  }
}
```

In the object above, 'calcAge' is the same as the function expression below, with slightly different syntax:

```javascript
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}
```

You can't use a function declaration in an object.

To call an object method, we can use dot notation or bracket notation:

```javascript
iain.calcAge(1980);
iain['calcAge'](1980);
```

We can access object properties directly in methods, using the this keyword. 'this' is equal to the object calling the method. It is possible to use the object name, but this violates DRY.

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  birthYear: 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
  hasDriversLicence: true,

  calcAge: function () {
    return 2021 - this.birthYear;
  },
}

iain.calcAge();
```

It is possible to use the method to calculate a value, and store that value as a property of the object.

```javascript
const iain = {
  firstName: 'Iain',
  lastName: 'Aitken',
  birthYear: 1980,
  job: 'programmer',
  friends: ['Dan', 'Peter', 'Steven'],
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
  },
}

console.log(iain.calcAge());
console.log(iain.age);

console.log(iain.getSummary());
```

_Note - the method must be run at least once to create the .age property._
