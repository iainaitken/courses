# Equality Matchers I - eq and eql

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/equality-matchers)

## Notes

There are three equality matchers in rspec:

* eq
* eql
* equal

They all test slightly different things.

For example, if you were testing whether 3 is equal to 3.0, you might not just be testing the numeric value; you might want to test whether they are the same data type(int vs float).

eq will test for value and ignore type. In the example below, all of the tests will pass:

```ruby
RSpec.describe 'equality matchers' do
  let(:a) { 3.0 }
  let(:b) { 3 }

  describe 'eq matcher' do
    it 'tests for value and ignores type' do
      expect(a).to eq(3)
      expect(b).to eq(3.0)
      expect(a).to eq(b)
    end
  end
end
```

eql will test for value and datatype. The same tests above, using eql instead of eq, will fail as we are comparing integers to floats.

We can instead use not_to:

```ruby
RSpec.describe 'equality matchers' do
  let(:a) { 3.0 }
  let(:b) { 3 }

  describe 'eql matcher' do
    it 'tests for both value and type' do
      expect(a).not_to eql(3)
      expect(b).not_to eql(3.0)
      expect(a).not_to eql(b)
    end
  end
end
```
