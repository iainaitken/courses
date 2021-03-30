# The Allow Method

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/configuring-responses/returning-a-value)

## Notes

In previous lessons we have used to allow method with double objects, but it is much more powerful than that.

We can also use it to stub out one or more methods on a real object - for example, if one of your methods might return a random output, we can use allow to force it to return a specified value. In the example below, #sample would pick a random element from the array; in order to make the test pass consistently, we can use the allow method to specify the return value.

```ruby
  it 'can stub one or more methods on a real object' do
    array = [1, 2, 3]
    allow(array).to receive(:sample).and_return(1)

    expect(array.sample).to eq(1)
  end
```

Using the allow method on a real object only affects the method passed in as an argument to allow; all other methods work as normal.

We can also use the allow method to specify multiple return values, in sequence. We do so by passing in an array of return values, as in the example below. RSpec will iterate through the return values and the final one will be the return value for every invocation of the method from then on:

```ruby
  it 'can return multiple return values in sequence' do
    mock_array = double
    allow(mock_array).to receive(:pop).and_return(:c, :b, nil)
    expect(mock_array.pop).to eq(:c)
    expect(mock_array.pop).to eq(:b)
    expect(mock_array.pop).to be_nil
    expect(mock_array.pop).to be_nil
  end
```
