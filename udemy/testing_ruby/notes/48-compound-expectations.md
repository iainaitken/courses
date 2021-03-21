# Compound Expectations

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/compound-expectations)

## Notes

Compound matchers let us combine more than one matcher on a single line. We can do this in two ways. The first is to use '.and':

```ruby
RSpec.describe 25 do
  it 'can test for multiple matchers' do
    expect(subject).to be_odd.and be > 20
  end

  it { is_expected.to be_odd and be > 20 }
end

RSpec.describe 'caterpillar' do
  it'supports multiple matchers on a single line' do
    expect(subject).to start_with('cat') and end_with('pillar')
  end

  it { is_expected.to start_with('cat') and end_with('pillar') }
end
```

_Note - the '.' before and is not strictly required._

The second way is to use the 'or' method.

```ruby
RSpec.describe [:usa, :canada, :mexico] do
  it 'can check for multiple possibilities' do
    expect(subject.sample).to eq(:usa).or eq(:canada).or eq(:mexico)
  end
end
```
