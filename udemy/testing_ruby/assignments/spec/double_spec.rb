RSpec.describe 'a random double' do
  it 'only allows defined methods to be invoked' do
    stuntman = double("Mr. Danger", 
                fall_off_a_ladder: 'Ouch',
                set_on_fire: true
              )

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
    expect(stuntman.set_on_fire).to eq true
  end

  it 'works with the allow method' do
    stuntman = double("Mr. Danger")
    allow(stuntman).to receive(:fall_off_a_ladder).and_return 'Ouch'

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
  end

  it 'allow method can receive messages' do
    stuntman = double("Mr. Danger")
    allow(stuntman).to receive_messages(fall_off_a_ladder: 'Ouch', set_on_fire: true)

    expect(stuntman.fall_off_a_ladder).to eq 'Ouch'
    expect(stuntman.set_on_fire).to eq true
  end
end