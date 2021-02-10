# Custom Error Messages

## Notes

You can change rspec's standard error message. This might be useful, for example, a some companies do have custom business logic and want to be more descriptive about what is going on.

```ruby
it 'has a custom error message' do
  comparison = 'Spade'
  expect(card.suit).to eq(comparison), "Hey, I expected #{comparison} but I got #{card.suit} instead"
end
```

The .to method can take an optional (Second) argument which is the error message you want to use instead of the default message.

This is useful if you wanted or needed to add custom information about how the program is supposed to be run, or if you had custom business logic etc.
