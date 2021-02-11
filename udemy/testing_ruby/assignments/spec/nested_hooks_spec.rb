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

  it 'does basic subtraction' do
    expect(7 - 3).to eq 4
  end

end
