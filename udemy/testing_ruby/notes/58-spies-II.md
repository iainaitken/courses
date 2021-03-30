# Spies II

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/basics/spies)

## Notes

Spies can be used to track real ruby objects, not just doubles, using the allow syntax.

In our example below, we have a Garage that stores Cars.

Our Car class is initialised with a single argument, being the model of the car.

Our Garage class takes no arguments but on instantiation creates an instance variable, 'storage', which is an empty array. It has a method, #add_to_collection(model), which takes a single argument and creates a new instance of Car and adds it to the storage array.

We want to test the functionality of the garage. In order to do that properly, we need to isolate the car class from the garage class, as they are dependent on each other. Specifically, Garage has two dependencies on Car:

1. We are invoking the new method on the Car class within Garage.
2. An instance of Car is created, and stored in Garage.

We want to isolate Garage so that if anything is going wrong with our Car class, our Garage tests are not compromised.

In the code below, when we create an instance double, this does not automatically replace any mention of Car in our program with the instance_double; we need to take a further step to do that (the before loop):

```ruby
class Car
  def initialize(model)
    @model = model
  end
end

class Garage
  attr_reader :storage
  
  def initialize
    @storage = []
  end

  def add_to_collection(model)
    @storage.push(Car.new(model))
  end
end

RSpec.describe Garage do
  let(:car) { instance_double(Car) }

  before do
    allow(Car).to receive(:new).and_return(car)
  end

  it 'adds a car to its storage' do
    subject.add_to_collection('Honda Civic')
    expect(Car).to have_received(:new).with('Honda Civic')
    expect(subject.storage.length).to eq(1)
    expect(subject.storage.first).to eq(car)
  end
end
```
