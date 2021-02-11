describe 'before and after hooks' do
  before(:context) do
    puts 'before Context'
  end

  after(:context) do
    puts 'before Context'
  end

  before(:example) do
    puts "before example"
  end

  after(:example) do
    puts "after example"
  end

  it 'is just a random example' do
    expect(5 * 6).to eq 30
  end

  it 'is just a random example' do
    expect(6 / 2).to eq 3
  end
end
