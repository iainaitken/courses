# Create a Test Double

[RSpec Documentation - test doubles](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/basics/test-doubles)

[RSpec Documentation - returning a value from a double](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/configuring-responses/returning-a-value) 

[API Documentation - doubles](https://rspec.info/documentation/3.8/rspec-mocks/RSpec/Mocks/ExampleMethods.html#double-instance_method)

## Notes

To mock is to test something with a simulated version of it.

In RSpec, mocking allows us to test classes in isolation by mocking the behaviour of dependent classes.

We can create test doubles in our test suite. A test double is an object that responds to certain defined methods in a specific way. A double is created by passing a string or symbol into the double method. In addition we can specify the methods that the double responds to, and the values produced, by passing in a further argument in the form of a ruby hash, where the keys are the method names and the values are the return value for the method. More than one key-value pair can be passed to the double:

```ruby
RSpec.describe 'a random double' do
  it 'only allows defined methods to be invoked' do
    stuntman = double("Mr. Danger", 
                fall_off_a_ladder: 'Ouch',
                set_on_fire: true
              )

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
  end
end 
```

_Note: when a hash is passed in as the last argument to a method in ruby, we don't need to use curly brace syntax._ 

We can also use the allow method. If a return value is not specified, then the return value will be nil.

```ruby
  it 'works with the allow method' do
    stuntman = double("Mr. Danger")
    allow(stuntman).to receive(:fall_off_a_ladder)

    expect(stuntman.fall_off_a_ladder).to be_nil
  end
```

A return value can be specified as follows:

```ruby
  it 'works with the allow method' do
    stuntman = double("Mr. Danger")
    allow(stuntman).to receive(:fall_off_a_ladder).and_return 'Ouch'

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
  end
```

A final syntactic option is as follows:

```ruby
  it 'allow method can receive messages' do
    stuntman = double("Mr. Danger")
    allow(stuntman).to receive_messages(fall_off_a_ladder: 'Ouch', set_on_fire: true)

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
    expect(stuntman.set_on_fire).to eq true
  end
```
