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
      actor.act
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
      # expect(stuntman).to receive(:set_on_fire).once
      # expect(stuntman).to receive(:set_on_fire).exactly(1).times
      expect(stuntman).to receive(:set_on_fire).at_most(1).times

      # expect(stuntman).to receive(:act).twice
      # expect(stuntman).to receive(:act).exactly(2).times
      expect(stuntman).to receive(:act).at_least(2).times
      subject.start_shooting
    end
  end
end