# raise_error Matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/raise-error-matcher)

## Notes

We use this matcher to check whether an error or exception is raised.

We pass a code block to the expect method; the code inside the block is the code we are testing to see whether an error is raised. In the example below, 'some_method' will raise an error as x is not defined.

```ruby
RSpec.describe 'raise_error matcher' do
  def some_method
    x
  end

  it 'can check for any error' do
    expect { some_method }.to raise_error
  end
end
```

Note: you should not simply invoke raise_error without specifying the specific error you expect to be raised, otherwise you risk getting false positives.

```ruby
 it 'can check for a specific error' do
    expect { some_method }.to raise_error(NameError)
  end
```

We can pass in the class of error we expect. We can also define custom errors:

```ruby
  class CustomError < StandardError
  end

  class CustomError < StandardError ; end
```

Note: the above classes are identical. The second makes use of a syntactic shortcut to place 'end' on the same line as the class definition.

```ruby
RSpec.describe 'raise_error matcher' do
  def some_method
    x
  end

  class CustomError < StandardError; end

  it 'can check for any error' do
    expect { some_method }.to raise_error
  end

  it 'can check for a specific error' do
    expect { some_method }.to raise_error(NameError)
    expect { 10 / 0 }.to raise_error(ZeroDivisionError)
  end

  it 'can check for a user-created error' do
    expect { raise CustomError }.to raise_error(CustomError)
  end
end
```
