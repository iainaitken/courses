# Nested Logic: Hooks

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/hooks/before-and-after-hooks)

## Notes

Take the following code as an example:

```ruby
describe 'nested hooks' do
  before(:context) do
    puts 'OUTER before context'
  end

  before(:example) do
    puts 'OUTER before example'
  end

  it 'does basic math' do
    expect(7 * 4).to eq 28
  end

  context 'with condition A' do
    before(:context) do
      puts 'INNER before context'
    end

    before(:example) do
      puts 'INNER before example'
    end

    it 'does basic math' do
      expect(7 * 4).to eq 28
    end

    it 'does subtraction as well' do
      expect(7 - 4).to eq 3
    end
  end
end
```

This outputs the following to the terminal:

```
nested hooks
OUTER before context
OUTER before example
  does basic math
  with condition A
INNER before context
OUTER before example
INNER before example
    does basic math
OUTER before example
INNER before example

    does subtraction as well
```

This is because before(:context) is run before the current block, so the OUTER before context will appear at the top, and INNER before context appears at the top of the 'with condition A' section.

OUTER before example is run before _every_ example. This is because the inner-level context is still part of the outer-level context, and the outer before(:example) is still valid.

However, before hooks defined in the inner context _only_ run before examples within the inner context.

The benefit is that you can refactor/DRY your tests and preserve resources. You can organise your tests so that each test relies solely on the minimum criteria it needs to run.
