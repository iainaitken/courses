RSpec.describe 'not_to method' do
  it 'checks for the inverse of a matcher' do
    expect(5).not_to eq 10
    expect([1, 2, 3]).not_to equal([1, 2, 3])
    # remember that 'equal' checks for object identity, not just value
    expect(10).not_to be_odd
    expect([1, 2, 3]).not_to be_empty
    expect(nil).not_to be_truthy
    expect(10).not_to be_falsy
    expect('London').not_to start_with('car')
    expect('London').not_to end_with('borough')
    expect(5).not_to respond_to(:length)
    expect([1, 2, 3]).not_to include(4)
    expect { 2 + 2 }.not_to raise_error
  end
end