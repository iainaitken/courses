# Reducing duplication: helper methods

## Notes

We can use regular ruby syntax to help reduce duplication. For example, we can define methods.

```ruby
RSpec.describe Card do
  def card
    Card.new('Ace', 'Spades')
  end

  it 'has a rank' do
    expect(card.rank).to eq('Ace')
  end

  it 'has a suit' do
    expect(card.suit).to eq('Spades')
  end
end
```

There is one drawback to this approach (see next lesson).
