# Instance Doubles

## Resources

[RSpec Documentation - Verifying Doubles](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/verifying-doubles)
[RSpec Documentation - Using an Instance Double](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/verifying-doubles/using-an-instance-double)
[Semaphore CI Tutorial](https://semaphoreci.com/community/tutorials/introduction-to-verifying-doubles-in-rspec)

## Notes

One issue with using doubles is that there is a lot of pressure on the developer to make sure that the double acts the same as the class it is designed to mimic. We need to make sure the methods match - but what if the code changes elsewhere in the program? There is no link between the double and the rest of the codebase.

RSpec has the concept of a verifying double - this is a double that verifies that the API of the double matches that of the class that it is mocking. If the method etc doesn't match the actual class, then RSpec will throw an error. This is therefore a stricter test than a normal double. In testing, we want our double to mimic the behaviour of the class as closely as possible, so using a verifying double can help with that.

An instance double is an example of a verifying double. To create one, we first pass in the class that we are mocking as an argument. RSpec will check compare the methods belonging to an instance of the class we have passed in as an argument with those we have defined in the double. If there is a mismatch, it will throw an error.

```ruby
class Person
  def a
    sleep(3)
    "Hello"
  end
end

RSpec.describe Person do
  describe 'regular double' do
    it 'can implement any method' do
      person = double(a: "Hello", b: 20)
      expect(person.a).to eq "Hello"
    end
  end

  describe 'instance double' do
    it 'can only implement methods that are defined on the class' do
      # Note - these tests will fail
      # person = instance_double(Person, a: "Hello", b: 20)
      
      # person = instance_double(Person)
      # allow(person).to receive(:a).with(3, 10).and_return("Hello")
    end
  end
end
```
