# The not_to method

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)

## Notes

A matcher is a type of assertion or expectation.

RSpec includes a whole variety of matchers to test different business logic.

Before we look at matchers, we are going to look at the not_to method.

This checks for the inverse of what you are testing.

```ruby
RSpec.describe 'not to method' do
  it 'checks that two values do not mathc' do
    expect(5).not_to eq(10)
    expect('Hello').not_to eq('hello')
    expect([1, 2]).not_to eq([1, 2, 3])
  end
end
```

not_to can be used before _any_ matcher.
