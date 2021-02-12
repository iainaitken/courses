RSpec.describe Array do
  subject(:sally) do
    ["element_1", "element_2"]
  end
  it 'has a length of two' do
    expect(subject.length).to eq(2)
    subject.pop
    expect(subject.length).to eq(1)
  end
  it 'sally is equal to original array' do
    expect(sally).to eq(subject)
  end
end
