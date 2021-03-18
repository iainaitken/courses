# start_with and end_with matchers

## Resources

[RSpec documentation - start_with](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/start-with-matcher)
[RSpec documentation - end_with](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/end-with-matcher)

## Notes

These matchers look to see whether a given expression either begins or ends with one or more values, and applies mainly to strings and arrays.

The matchers are case-sensitive:

```ruby
RSpec.describe 'start with and end with matchers' do
  describe 'caterpillar' do
    # note: setting a string as the top-level describe will cause 'subject' to nbe equal to that string
    it 'should check for a substring at the beginning or end' do
      expect(subject).to start_with('cat')
      expect(subject).to end_with('pillar')
    end

    it 'is case-sensitive' do
      expect(subject).not_to start_with('Cat')
      expect(subject).not_to end_with('PILLAR')

      expect(subject.capitalize).to start_with('Cat')
    end

    it { is_expected.to start_with('cat') }
    it { is_expected.to end_with('pillar') }
    it { is_expected.not_to start_with('Cat') }
    it { is_expected.not_to end_with('PILLAR') }
  end

  describe [:a, :b, :c, :d] do
    it 'should check for elements at the beginning or end of an array' do
      expect(subject).to start_with(:a)
      expect(subject).to start_with(:a, :b)
      expect(subject).to start_with(:a, :b, :c)
      expect(subject).to end_with(:d)

      expect(subject).not_to start_with(:b)
      expect(subject).not_to start_with(:a, :c)
    end

    it { is_expected.to start_with(:a) }
    it { is_expected.to start_with(:a, :b) }
    it { is_expected.to start_with(:a, :b, :c) }
    it { is_expected.to end_with(:d) }

    it { is_expected.not_to start_with(:b) }
    it { is_expected.not_to start_with(:a, :c) }
  end
end
```
