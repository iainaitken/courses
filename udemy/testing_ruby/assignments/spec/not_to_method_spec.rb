RSpec.describe 'not to method' do
  it 'checks that two values do not mathc' do
    expect(5).not_to eq(10)
    expect('Hello').not_to eq('hello')
    expect([1, 2]).not_to eq([1, 2, 3])
  end
end
