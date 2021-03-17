# Be Matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/be-matchers)

## Notes

The be matcher can be used to test for 'truthiness' or 'falsiness'.

### Truthiness and falsiness in Ruby

'true' is a basic boolean value. In the code below, Ruby evaluates the conditional statement, and will run it if it is true.

```ruby
if true
  # code
end
```

Similarly, Ruby will evaluate the conditional statement below and will run it if it evaluates to true (bearing in mind that everything in Ruby is true, apart from false and nil):

```ruby
if 10

end
```

If an expression or object evaluates to true in the above context then it is known as 'truthy'; if not, it is known as 'falsy'.

### RSpec

We can test for truthiness and falsiness with the be_truthy and be_falsy matchers. These are pretty self-explanatory:

```ruby
RSpec.describe 'be matchers' do
  it 'can test for truthiness' do
    expect('true').to be_truthy
    expect(0).to be_truthy
    expect(14).to be_truthy
    expect([]).to be_truthy
    expect(-1).to be_truthy
  end

  it 'can test for falsiness' do
    expect(false).to be_falsy
    expect(nil).to be_falsy

    expect('false').not_to be_falsy
  end

  it 'can test for nil' do
    expect(nil).to be_nil

    my_hash = { a: 5 }

    expect(my_hash[:b]).to be_nil
    expect(my_hash[:b]).to be nil
  end
end
```

Note - we can also test for nil. This test can take either of the forms above; there is a predicate method available to all ruby objects, 'nil?', so we can add 'be_' to the front and remove the question mark, and turn it into a matcher.
