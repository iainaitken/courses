# Reading Failures

## Notes

There are a couple of ways to run rspec tests.

The first is simply to type rspec into the command line in the parent directory to the lib and spec directories:

```
rspec
```

RSpec will then run every single test that it can find in the spec folder.

Alternatively, you can run one file at a time:

```
rspec ./spec/card_spec.rb
```

RSpec will outline the test results, with any failures highlighted in red with a stack trace so you can locate the error. It will also describe why the error occurred - in this case, a NameError caused by an uninitialzed constant, Card.

In this case, this means the test itself has not run, because a Ruby error occurred.

Each it method creates a **single** example, regardless how many expectations we have in the body of the block.

In the test results, you will see:

```ruby
Failed examples:

rspec ./assignments/spec/card_spec.rb:2 # Card has a type
```

This gives you the command line code to run the tests again from a specific part of the spec file, if you wanted to ignore any other tests to focus on this failing test.
