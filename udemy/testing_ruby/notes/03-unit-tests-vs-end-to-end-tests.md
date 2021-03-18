# Unit Tests vs End-to-End Tests

## Notes

Testing pyramid

* E2E tests at top
* Integration tests in the middle
* Unit tests at the bottom

This is the relative importance of each type of tests. Unit tests are the base of the pyramid so there will be more of them.

### Unit tests

Focuses on an individual unit of code in a program ie a single class or method. We test that part in isolation, away from anything else in the program.

The goal here is to create a silo arouund that code to test it - allows us to quickly identify which bit of code is going wrong. They are easy to write and run fast. Can give a team of developers separate jobs.

Disadvantages - not testing in the scope of an entire feature - does not check it will work in context with other parts of the program.

### End-to-End tests

These test a feature and its interaction with the entire system.

This allows us to test the complete program - gives us confidence that the complete program is working.

On the other hand - tests are harder to write, they run slowly, and we cannot easily isolate a bug if the test fails.

E2E tests are brittle - more likely to break.

### Integration Tests

These fall somewhere in the middle of unit tests and integration tests. Might be testing a couple of classes and how they interact rather than the whole program.

### Manual tests

Not part of rspec but still important to manually test code, but let the computer do as much work as possible.

### Working together

A well-built test suite should make use of all of these types of tests, to the degree allowed by commercial reality.
