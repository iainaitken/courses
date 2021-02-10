# Problems with mutation

## Notes

Last lesson, we defined a method to create instances of Cards to test in our test suite.

That allows us to reduce duplication.

There are disadvantages, though.

For example, if you wanted to mutate a value of the card instance, then the card method would generate a new card instead of being able to test the existing instance.

Often we want two different things to happen.

* We want different instances of an object in different tests, so that there is no pollution.
* We want to be able to test the _same_ instance of the object within a test so that we can check mutation of the object.
