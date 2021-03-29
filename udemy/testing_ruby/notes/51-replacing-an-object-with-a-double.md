# Replacing an object with a double

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/basics/expecting-messages)

## Notes

The purpose of using doubles is to separate out dependent classes so that we can test them in isolation.

This is especially useful when your program is resource-intensive. For example, if your program involves asynchronous operations, loads other files, or calls data from a database, this might take time that can be saved by mocking the operation instead.

It also means we can test classes _without actually having written them yet_.

```ruby
class Actor
  def initialize(name:)
    @name = name
  end

  def ready?
    sleep(3)
    true
  end

  def act
    "I love you, baby"
  end

  def fall_off_ladder
    "Call my agent! No way!"
  end
 
  def set_on_fire
    false
  end
end

class Movie
attr_reader :actor

  def initialize(actor:)
    @actor = actor
  end

  def start_shooting
    if actor.ready?
      actor.act
      actor.fall_off_ladder
      actor.set_on_fire
    end
  end
end

RSpec.describe Movie do
  let(:stuntman) { double("Mr. Danger", 
    ready?: true,
    act: "I'm a stuntman",
    fall_off_ladder: "Sure! Let's do it",
    set_on_fire: true
    ) }
  subject { described_class.new(actor: stuntman) }

  describe '#start_shooting' do
    it 'expects an actor to do three actions' do
      expect(stuntman).to receive(:ready?)
      expect(stuntman).to receive(:act)
      expect(stuntman).to receive(:fall_off_ladder)
      expect(stuntman).to receive(:set_on_fire)

      subject.start_shooting
    end
  end
end
```