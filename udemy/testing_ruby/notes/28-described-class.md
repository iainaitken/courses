# Described Class

## Notes

This helps us avoid hard-coding the name of the class that we are testing into our tests and descriptions, which could be useful if we need to change the name of the class.

```ruby
class King
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

RSpec.describe King do
  subject { described_class.new('Boris') }
  let(:louis) { described_class.new('Louis') }

  it 'represents a great person' do
    expect(subject.name).to eq('Boris')
  end
end
```

__This is an important technique to help with refactoring!!__
