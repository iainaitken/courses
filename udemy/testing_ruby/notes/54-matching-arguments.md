# Matching Arguments

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/setting-constraints/matching-arguments)

## Notes

It is possible to customise the return value of a stubbed method depending on the argument(s) with which that method is invoked.

As an example, the #first method on a ruby array will return the first element in that array. If an optional argument in the form of an integer _n_ is passed to the method then the method will instead return the first _n_ elements in the form of an array.

This is achieved with the '#with' and '#and_return' methods, to which we pass arguments to specify how the double should work. We can also pass another matcher into the method (see example 4) to allow for a range of arguments to return a common value.

```ruby
RSpec.describe 'matching arguments' do
  it 'can return different values depending on the argument' do
    three_element_array = double # [1, 2, 3]

    allow(three_element_array).to receive(:first).with(no_args).and_return(1)
    allow(three_element_array).to receive(:first).with(1).and_return([1])
    allow(three_element_array).to receive(:first).with(2).and_return([1, 2])
    allow(three_element_array).to receive(:first).with(be >= 3).and_return([1, 2, 3])

    expect(three_element_array.first).to eq(1)
    expect(three_element_array.first(1)).to eq([1])
    expect(three_element_array.first(2)).to eq([1, 2])
    expect(three_element_array.first(100)).to eq([1, 2, 3])
  end
end
```