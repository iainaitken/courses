# Change matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/change-matcher)

## Notes

This matcher allows us to observe the state of an object before and after the operation is called - this allows us to test how the state changes.

In order to use this matcher, we do not pass an expression to 'expect'; instead, we pass a block to it (so that the matcher can test state before and after the code in the block has run).

We also pass a block to the change method. Here, we specify what part of the state we want to track. Then, we specify how we expect it to change.

```ruby
RSpec.describe 'change matcher' do
  subject { [1, 2, 3] }

  it 'checks that a method changes object state' do
    expect { subject.push(4) }.to change { subject.length }.from(3).to(4)
  end
end
```

However, the above test is very closely tied to the subject; if the array were changed so its initial length is not three, the test will break. A better way is as follows:

```ruby
RSpec.describe 'change matcher' do
  subject { [1, 2, 3] }

  it 'checks that a method changes object state' do
    expect { subject.push(4) }.to change { subject.length }.by(1)
  end
end
```

We can also check for a negative change:

```ruby
 it 'accepts negative arguments' do
    expect { subject.pop }.to change { subject.length }.by(-1)
  end
```

Note - this is checking the state of the program rather than the behaviour, so use sparingly.
