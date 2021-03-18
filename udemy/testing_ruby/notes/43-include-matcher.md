# Include matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/include-matcher)

## Notes

This allows us to check whether an object includes something else, such as:

* Whether a string includes a sub-string
* Whether an array includes a specific element
* Whether a hash includes a key/value pair, or just a key or value

That list is not exhaustive. It is more versatile than the contain_exactly matcher.

Note - if passing a hash to the rspec describe method, note that it must be enclosed in (). Checking for key-value pairs can be useful where a hash is dynamically generated.

```ruby
RSpec.describe 'include matcher' do
  describe 'hot chocolate' do
    it 'checks for substring inclusion' do
      expect(subject).to include('hot')
      expect(subject).to include('choc')
      expect(subject).to include('late')
    end

    it { is_expected.to include('hot') }
  end

  describe [10, 20, 30] do
    it 'checks for inclusion in the array, regardless of order' do
      expect(subject).to include(10)
      expect(subject).to include(10, 30)
      expect(subject).to include(30, 20)
    end

    it { is_expected.to include(30, 10, 20) }
  end

  describe ({ a: 1, b: 2, c: 3 }) do
    it 'can check for key existence' do
      expect(subject).to include(:a)
      expect(subject).to include(:a, :b)
      expect(subject).to include(:b, :a)
    end

    it 'can check for key-value pairs' do
      expect(subject).to include(a: 1)
    end

    it { is_expected.to include(:b) }
    it { is_expected.to include(b: 2) }
  end
end
```