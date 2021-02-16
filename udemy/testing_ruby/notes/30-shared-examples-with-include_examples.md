# Shared Examples with include_example

## Notes

On occasion, you may have tests that effectively test the same thing. See the example below:

```ruby
RSpec.describe Array do
  subject { [1, 2, 3] }

  it 'returns the number of items' do
    expect(subject.length).to eq(3)
  end
end

RSpec.describe String do
  subject { 'abc' }

  it 'returns the number of items' do
    expect(subject.length).to eq(3)
  end
end

RSpec.describe Hash do
  subject { { a: 1, b: 2, c: 3} }

  it 'returns the number of items' do
    expect(subject.length).to eq(3)
  end
end
```

To DRY out the code, we can define a shared example. This is an example that can be shared between different example groups. Normally you would have these in a separate file, which is then imported into different spec_files.

_Note: normally the tests would be in different files_

The syntax for shared examples is as follows:

```ruby
RSpec.shared_examples 'a Ruby object with three elements' do
  it 'returns the number of items' do
    expect(subject.length).to eq(3)
  end
end

RSpec.describe Array do
  subject { [1, 2, 3] }
  include_examples 'a Ruby object with three elements'
end

RSpec.describe String do
  subject { 'abc' }
  include_examples 'a Ruby object with three elements'
end

RSpec.describe Hash do
  subject { { a: 1, b: 2, c: 3} }
  include_examples 'a Ruby object with three elements'
end
```

This helps us reduce code, particularly if there are numerous shared examples. Ruby Rails Models are a good example of objects that have similar methods.

It helps us write code more quickly - adding a test to the shared_examples group will immediately be applied across the codebase.
