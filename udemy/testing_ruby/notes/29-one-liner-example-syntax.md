# One-liner Example Syntax

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/subject/one-liner-syntax)

## Notes

This is another advantage of using the subject syntax; it gives us access to further helper methods such as being able to use one-line syntax.

Usually, an example is set up as follows:

```ruby
context 'with classic syntax' do
  it 'should equal 5' do
    expect(subject).to eq(5)
  end
end
```

This gives the following test output:

```
with classic syntax
  should equal 5
```

Instead, we can do this:

```ruby
context 'with one-liner syntax' do
  it { is_expected.to eq(5) }
end
```

Which gives us the following as output:

```
with one-liner syntax
  is expected to eq 5
```

RSpec will provide the output text automatically; you don't need to provide a string to have a test description.
