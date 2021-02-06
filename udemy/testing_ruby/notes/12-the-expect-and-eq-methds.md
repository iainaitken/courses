# The expect and eq methods

## Resources

[RubyDoc documentation](https://www.rubydoc.info/gems/rspec-expectations/RSpec/Matchers)

## Notes

expect is a method that accepts an argument. The argument is what we are testing.

```ruby
expect(card.type).to eq('Ace of Spades')
```

Here, we are testing card.type - i.e. the type of card.

'.to' is another method that we invoke, and is followed by an argument. This is what we expect the outcome to be. The argument here is 'be', which is known as a matcher.
