# Multiple Examples in Example Group

## Notes

Providing the tested class as an argument to the describe method allows rspec to define some automatic helper methods that allow us to reduce the amount of code we have to write later:

```ruby
rspec.decribe Card do
```

The purpose of this lesson is to display some inefficiencies/bad patterns that can be cleaned up in a later lesson.

Can have multiple examples in a single it block.

```ruby
RSpec.describe Card do
  it 'has a type' do
    card = Card.new('Ace', 'Spades')
    expect(card.suit).to eq('Spades')
    expect(card.rank).to eq('Ace')
  end
end
```

However, it is a sign that you are testing too much in a single expectation. This is not a technical requirement, more of a convention.

Consider doing the following instead:

```ruby
RSpec.describe Card do
  it 'has a rank' do
    card = Card.new('Ace', 'Spades')
    expect(card.rank).to eq('Ace')
  end

  it 'has a suit' do
    card = Card.new('Ace', 'Spades')
    expect(card.suit).to eq('Spades')
  end
end
```

Note - this will need to be refactored as we are repeating code when we create a new card object for each test.

_From lesson 16_

Duplicated code is not the worst thing you can have - in some cases it is a benefit. In particular, in this case, this ensures we are working with separate objects - they are isolated and independent. Bad practice to have a test that might mutate an object, as then later tests are not guaranteed to be working with an object that has a known state.

In that case we say that the test is not deterministic - this is where, no matter how many times you run the test, you are guaranteed to get the same result. It is not open to randomness.

__Contamination__ or __Pollution__ are the terms used where the results of one test spill into another test.  Will look at how we can clean up duplicated code using ruby or rspec syntax in later lessons.
