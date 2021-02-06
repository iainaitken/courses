# The Describe Method

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/example-groups/basic-structure-describe-it)

[card_spec.rb]()

## Notes

Whenever we run a spec file from the command line, we have access to RSpec as a globally defined module, and we can access it like so:

```ruby
RSpec.describe 'Card' do

end
```

'describe' is a method. We are describing what we are testing. 'describe' takes an argument (for example, a basic string, as per the example). It is followed by a code block, for which use the do - end syntax.

This creates an _example group_.

This is a construct that collects related tests (tests are known as examples). What we are telling the program with the code above is that we are going to describe a card's functionality within the block.
