# have_attributes matcher

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-expectations/v/3-8/docs/built-in-matchers/have-attributes-matcher)

## Notes

This allows us to check whether an object has a given set of attributes along with their values.

For example, if we had a custom class with two attributes as follows:

```ruby
class ProfessionalWrestler
  attr_reader :name, :finishing_move

  def initialize(name:, finishing_move:)
    @name = name
    @finishing_move = finishing_move
  end
end
```

We can check for some or all of those attributes and values. We pass a hash to the have_attributes method, where the key is the attribute we are checking and the value would be the value. 

A feature in Ruby is that if a hash is the last argument you pass to a method then you don't have to include the curly brackets around the hash - think of the doubles syntax where a hash is used to provide the key-value pairs for the methods we can pass to the double and the responses to those methods.

```ruby
RSpec.describe 'have_attributes matcher' do
  describe ProfessionalWrestler.new(name: 'Stone Cold Steve Austin', finishing_move: 'Stunner') do
    # Note - we can create a new instance of subject in the describe block
    
    it 'checks for proper object attribute and proper values' do
      expect(subject).to have_attributes(name: 'Stone Cold Steve Austin')
      expect(subject).to have_attributes(name: 'Stone Cold Steve Austin', finishing_move: 'Stunner')
    end

    it { is_expected.to have_attributes(name: 'Stone Cold Steve Austin', finishing_move: 'Stunner') }
  end
end
```
