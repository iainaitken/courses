# Comparison Matchers

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/comparison-matchers)

## Notes

Mathematical comparisons. Can use normal Ruby operators to test assertions, including:

* >
* <
* >=
* <=

For example:

```ruby
RSpec.describe 'comparison matchers' do
  it 'allows for comparison with built-in Ruby operators' do
    expect(10).to be > 5
    expect(10).to be < 15

    expect(1).to be >= -1
    expect(1).to be >= 1

    expect(22).to be <= 100
    expect(22).to be <=22
  end
end
```

We can also use one line syntax, if we pass a variable into a describe block at the outset (in the same way that we pass a class into a describe block normally):

```ruby
describe 100 do
  it { is_expected.to be > 90 }
  it { is_expected.to be < 110 }

  it { is_expected.to be >= 85 }
  it { is_expected.to be >= 100 }

  it { is_expected.to be <= 120 }
  it { is_expected.to be <= 100 }
end
```

RSpec will interpolate 100 as 'subject'.
