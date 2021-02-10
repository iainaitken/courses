# Reducing Duplication: the Let Method

## Notes

This is the best way to reduce duplication in the code.

Relies on memoisation. This is caching. When you give a computer a problem to work out then the very first time you do that, it will go through the process of calculating each step and returning the result.

The next time it has to do that calculation, it can simply give you the result. This is because the result has been cached in memory.

We use the let method in rspec to make use of this concept.

```ruby
let(:card) { Card.new('Ace', 'Spades') }
```

_Note: :card passed into the let method is a symbol, but is simply referenced by card throughout the tests._

The block is re-evaluated in different examples, but in a single example, card is going to reference the same object.

Let is _lazy loaded_. The method does not run until it is invoked in an example. So, for examples where card is _not_ used, let does not run.

Can have as many let statements as you like.  Can also use let statements in other let statements:

```ruby
let(:x) { 1 + 1 }
let(:y) { x + 10 }
```

If you want to force let to run before an example, you can use a bang:

```ruby
let!(:card) { Card.new('Ace', 'Spades') }
```

This will use more memory, though, so be careful!
