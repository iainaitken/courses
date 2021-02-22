# all matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/all-matcher)

## Notes

The all matcher allows us to check that all values in a collection, such as an array, fit a particular condition or assertion.

It is possible to use ruby methods to do this, for example to use .each to iterate over an array, and then place the rspec test in the block passed into the each method, but there is a better way of doing this in rspec.

```ruby
RSpec.describe 'all matcher' do
  it 'allows for aggregate checks' do
    expect([5, 7, 9]).to all(be_odd)
    expect([4, 8, 10]).to all(be_even)
    expect([5, 7, 9]).to all(be < 10)
  end
end
```
