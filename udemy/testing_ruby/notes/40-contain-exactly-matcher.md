# Contain-exactly Matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/contain-exactly-matcher)

## Notes

This matcher checks that an array contains a set of pre-defined elements. It does not check order; it just checks that the array contains the elements. You must pass in ALL of the elements in the array being checked; if one is missing then the test will fail.

This test might be helpful if you are generating an array dynamically and you want to check that the elements are being correctly added to it.

If we want to check the order in an array then we would use the 'eq' matcher.

```ruby
RSpec.describe 'contain-exactly matcher' do
  subject { [1, 2, 3] }

  describe 'long-form syntax' do
    it 'should check for the presence of all elements' do
      expect(subject).to contain_exactly(1, 2, 3)
      expect(subject).to contain_exactly(3, 2, 1)
      expect(subject).to contain_exactly(2, 1, 3)

      expect(subject).not_to contain_exactly(1, 2)
      expect(subject).not_to contain_exactly(1, 2, 3, 4)
    end
  end
end
```
