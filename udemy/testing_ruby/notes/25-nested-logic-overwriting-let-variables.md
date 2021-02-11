# Overwriting let variables

## Notes

It is important to note that stuff that is defined at a higher level is available to all lower levels of the test suite.

For example, in overwriting_spec.rb, we are using the let helper method to define 'language' as 'ProgrammingLanguage.new('Python')'. It is defined in the highest context, so is available everywhere else.

_Note: the reverse is not true. Stuff that is defined within a nested context is not available in a parent context._

If we want to override that, for example if we wanted a new instance of the ProgrammingLanguage class where we are not passing in a specific language as a default, and we were going to put that in a new context block, then we need to re-define language within the inner context:

```ruby
describe ProgrammingLanguage do
  let(:language) { ProgrammingLanguage.new('Python') }

  it 'should store the name of the language' do
    expect(language.name).to eq('Python')
  end

  context 'with no argument' do
    let(:language) { ProgrammingLanguage.new }

    it 'should default to ruby as the name' do
      expect(language.name).to eq('Ruby')
    end
  end
end
```

This makes more sense, is easier to read and understand.
