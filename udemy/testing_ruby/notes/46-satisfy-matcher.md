# Satisfy Matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/satisfy-matcher)

## Notes

This allows us to create our own assertions and expectations; it allows us to check for custom conditions.

We are using 'racecar' in our tests as it is a palindrome, and because there is no inbuilt matcher to check whether a word is a palindrome.

The satisfy matcher takes a block argument. We pass in a value, being the subject that is being tested, between pipes. We also pass in an expression or evaluation that evaluates to true or false.

If it evaluates to true then the block is satisfied, and the test passes.

```ruby
RSpec.describe 'satisfy matcher' do
  subject { 'racecar' }

  it 'is a palindrome' do
    expect(subject).to satisfy { |value| value == value.reverse }
  end
end
```

However, we can also provide satisfy with a string argument, and there are advantages in doing so. This is because the default error message is not necessarily very readable.

```bash
  1) satisfy matcher is a palindrome
     Failure/Error: expect(subject).to satisfy { |value| value == value.reverse }
       expected "racecars" to satisfy expression `value == value.reverse`
     # ./assignments/spec/satisfy_matcher_spec.rb:6:in `block (2 levels) in <top (required)>'
```

For example:

```ruby
  it 'can accept a custom error message' do
    expect(subject).to satisfy('be a palindrome') { |value| value == value.reverse }
  end
```

This changes the error message to:

```bash
  2) satisfy matcher can accept a custom error message
     Failure/Error: expect(subject).to satisfy('be a palindrome') { |value| value == value.reverse }
       expected "racecars" to be a palindrome
     # ./assignments/spec/satisfy_matcher_spec.rb:10:in `block (2 levels) in <top (required)>'
```
