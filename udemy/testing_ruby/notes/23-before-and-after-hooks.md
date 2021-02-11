# Before and After Hooks

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/hooks/before-and-after-hooks)

## Notes

Before and after blocks allow you to run some code at certain defined points in your program.

They are called in the following order:

```ruby
before :suite
before :context
before :example
after  :example
after  :context
after  :suite
```

These might be useful in some circumstances; for instance, some dev teams prioritise speed of execution of tests over test isolation. In that case you might not want to instatiate an object prior to each test, you might want to create that object at the outset and then set a new value to it before each example.

This can be achieved by using an after example. After examples do run after each example, but note that the test output looks like it doesn't:

```
before and after hooks
before Context
before example
after example
  is just a random example
before example
after example
  is just a random example

before Context

Finished in 0.006 seconds (files took 0.196 seconds to load)
2 examples, 0 failures
```

before(:context) runs before the context _it is currently defined in_.
