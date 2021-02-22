# Predicate matchers

## Resources



## Notes

Predicate methods in Ruby are methods that return either true or false. They all end with a question mark (not a technical requirement, but it is a convention).

See the examples below:

```ruby
puts 0.zero?
# returns true
puts 15.zero?
# returns false

puts 2.even?
# returns true
puts 1.even?
# returns false

puts 11.odd?
# returns true
puts 16.odd?
# returns false

puts [].empty?
# returns true
puts [1, 2].empty?
# returns false
```

We can use Ruby predicate methods to test in rspec:

```ruby
RSpec.describe 'predicate methods and predicate matchers' do
  it 'can be tested with Ruby methods' do
    result = 16 / 2
    expect(result.even?).to eq true
  end
end
```

We can also use predicate matchers to test in rspec:

```ruby
it 'can be tested with predicate matchers' do
  expect(16 / 2).to be_even
end

it 'can test for the inverse of a predicate matcher' do
  expect(16 / 2).not_to be_odd
end
```

This works because in rspec, if we have a ruby predicate method, we can remove the question mark and preface it with 'be_', and rspec will work out what to do.

This works for ALL predicate methods in Ruby.

Finally, predicate matchers work with one-line syntax:

```ruby
describe 0 do
  it { is_expected.to be_zero}
end
```
