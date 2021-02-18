# Equality Matchers II - equal and be

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/equality-matchers)

## Notes

The equal and be matchers are identical - they are aliases.

This hinges on the concepts of object equality vs object identity.

Object equality is about equality of design - do they look the same?

If we are checking object identity then we are checking whether they are the same thing - the same object in memory.

```ruby
describe 'equal and be matchers' do
  let(:c) { [1, 2, 3] }
  let(:d) { [1, 2, 3] }
  # here, e is a pointer to c
  let(:e) { c }

  it 'cares about object identity' do
    expect(c).to eq(d)
    expect(c).to eql(d)

    expect(c).to equal(e)
    expect(c).to be(e)

    expect(c).not_to equal(d)
    expect(c).not_to equal([1, 2, 3])
  end
end
```
