# Spies I

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/basics/spies)

[Mocks aren't stubs article](https://martinfowler.com/articles/mocksArentStubs.html)

[Medium article](https://revs.runtime-revolution.com/are-you-spying-on-me-a-quick-overview-of-spies-in-rspec-c5bc7669b897)

## Notes

Spies are a type of test double, but they follow a different pattern of testing.

Doubles are created and given a message, and we expect that the double would receive that message before we invoke the method that sends the message to the double. In other words, the expectation is written first.

Spies are different - we assert that a message has been received after the action has been invoked.

```ruby
RSpec.describe 'spies' do
  let(:animal) { spy('animal') }

  it 'confirms that a message has been received' do
    animal.eat_food
    expect(animal).to have_received(:eat_food)
    expect(animal).not_to have_received(:eat_human)
  end
end
```

A big advantage of spies is that they automatically observe all messages sent to an object, even those not specified by the person writing the code.

In addition, we do not have to specify in advance which method(s) the spy is allowed to receive.
