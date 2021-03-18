# respond_to matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/respond-to-matcher)

## Notes

This matcher allows us to check that an object responds to a certain method. We are not concerned with what the output is, just whether the object responds to the method.

The idea behind polymorphism is that we shouldn't care about what object we're dealing with - we care more about what the object can respond to - i.e. the methods it has etc.

In our example, the classes 'HotChocolate' and 'Coffee' respond to the same methods, our program would be more complex if they did not.

```ruby
class HotChocolate
  def drink
    'Delicious'
  end

  def discard
    'PLOP!'
  end

  def purchase(number)
    "Awesome, I just purchaded #{number} more hot chocolate beverages!"
  end
end

class Coffee
  def drink; end
  def discard; end
  def purchase(number); end
end
```

The respond_to matcher helps us to find out what methods an object can respond to.

```ruby
RSpec.describe HotChocolate do
  it 'confirms that an object can respond to a method' do
    expect(subject).to respond_to(:drink)
    expect(subject).to respond_to(:discard)
    expect(subject).to respond_to(:purchase)
    expect(subject).to respond_to(:drink, :discard, :purchase)
  end

  it { is_expected.to respond_to(:drink, :discard, :purchase) }
end
```

We can make our code more specific by testing whether the object responds to a method with arguments.

```ruby
  it 'confirms an object can respond to a method with arguments' do
    expect(subject).to respond_to(:purchase).with(1).arguments
  end
```
