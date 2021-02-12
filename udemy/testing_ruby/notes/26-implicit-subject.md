# Implicit Subject

## Resources

[Stack Overflow - difference between subject and let](https://stackoverflow.com/questions/38437162/whats-the-difference-between-rspecs-subject-and-let-when-should-they-be-used)

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/subject/implicitly-defined-subject)

## Notes

_Note from Stack Overflow article: you can have more than one expectation per example - the rule is that you should only test one method call per example._

If a class is passed into the describe method, then rspec implicitly defines 'subject' to be a new instance of that class. Behind the scenes, rspec is doing this:

```ruby
subject = Class.new
```

This allows us to be efficient when writing tests.

Subject works in a similar way to let:

* It is lazily-instantiated
* A new instance is created in each example it is used, so it remains isolated between examples
* The same instance is reused within a single example

Subject spares us the need to write an additional let variable for something as simple as an instance of the class.

Consider using subject for ^^.
