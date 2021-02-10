# The context Method and Nested Describes

## Notes

Notes on Syntax:

* If you are testing an _instance_ method you preface the method with #
* If you are testing a class method you preface the method with a .

Your tests should not have conditional statements in it - use context or nested describe blocks instead.

For example:

```ruby
describe '#even? method' do
  it 'should return true if number is even'

  it 'should return true if number is odd'
end
```

Here, each test has two conditions.

Instead we could use nested describe blocks:

```ruby
  describe '#even? method' do
    describe 'with even number' do

    end
    describe 'with odd number' do

    end
```

This creates a level of organisation within the test suite.

Context is an alias for describe, but some developers prefer it as it makes slightly more sense - we are providing the context in which the test is occurring and then describing what we expect from the test.
