RSpec.describe 'predicate methods and predicate matchers' do
  it 'can be tested with Ruby methods' do
    result = 16 / 2
    expect(result.even?).to eq(true)
  end

  it 'can be tested with predicate matchers' do
    expect(16 / 2).to be_even
  end

  it 'can test for the inverse of a predicate matcher' do
    expect(16 / 2).not_to be_odd
  end

  describe 0 do
    it { is_expected.to be_zero}
  end
end
