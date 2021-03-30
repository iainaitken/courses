# Class Doubles

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/verifying-doubles/using-a-class-double)

## Notes

Class doubles are similar to instance doubles, however they verify that class methods exist rather than instance methods.

Class methods are usually used to do operations that are larger than one object - higher level utility operations such as a factory that generates automatic instances of a class with specific configurations or pre-configured settings.

```ruby
class Deck
  def self.build
    # Business logic to build a deck of cards
  end
end

class CardGame
  attr_reader :cards
  
  def start
    @cards = Deck.build
  end
end

RSpec.describe CardGame do
  it 'can only implement class methods that are defined on a class' do
    #  Note - this will cause RSpec to throw an error
    class_double(Deck, build: ['Ace', 'Queen'], shuffle: ['Queen', 'Ace'])
  end
end
```

You must have an existing class for the method to work; if you don't (perhaps you haven't built it yet while TDD'ing your program) then you can pass a string to the method with the name of the class rather than the class itself. If we do that then we also have to add '.as_stubbed_const' at the end of the method so that any mention of the class in our program is properly stubbed out:

```ruby
RSpec.describe CardGame do
  it 'can only implement class methods that are defined on a class' do
    deck_klass = class_double('Deck', build: ['Ace', 'Queen']).as_stubbed_const

    expect(deck_klass).to receive(:build)
    subject.start
    expect(subject.cards).to eq(['Ace', 'Queen'])
  end
end
```

__Note - 'klass' is used as it is a ruby convention not to use 'class' in your variable names (as class is a reserved term)__
