# Reducing duplication: before hooks and instance variables

## Notes

_Note: the following method is not the best way to do this, but you might find it in other people's code_

A __hook__ is a piece of code that runs automatically at a certain point during the test suite's execution.

A hook allows us to cause some code to run before, in between or after some of the test operations.

Instance variables allow us to persist some information outside of an individual example.

```ruby
  before(:example) do

  end
```

Can also be written as:

```ruby
  before do

  end
```

The above code is a before hook. It will run before __every__ example in the test suite.  Other options are :suite (which runs the code before the test suite) and :context (which runs the code before every example group).

You don't need to use code that affects the tests directly - can have a puts statement that simply prints to the terminal.

Be careful of what type of variable you use. In the example below, the variable 'card' will not persist outside of the before block because of ruby's scope rules:

```ruby
RSpec.describe Card do
  before do
    card = Card.new('Ace', 'Spades')
  end

  it 'has a rank' do
    expect(card.rank).to eq('Ace')
  end

  it 'has a suit' do
    expect(card.suit).to eq('Spades')
  end
end
```

You need to use an instance variable instead:

```ruby
RSpec.describe Card do
  before do
    @card = Card.new('Ace', 'Spades')
  end

  it 'has a rank' do
    expect(@card.rank).to eq('Ace')
  end

  it 'has a suit' do
    expect(@card.suit).to eq('Spades')
  end
end
```

So, in the above example, a new '@card' variable would be created before __each__ example. The tests use a brand new variable each time, so are independent and not polluted by previous tests.

Some disadvantages are:

1. If the instance variable name is changed, every occurence of it needs to be replaced.
2. __Ruby will not throw a name error if the instance variable doesn't exist; it evaluates it as nil, instead__. Can introduce bugs that are hard to track down. It is preferable to use a construct that tells us that the variable doesn't exist so we can find the bug.

These are the main reasons why instance variables are not preferred.
