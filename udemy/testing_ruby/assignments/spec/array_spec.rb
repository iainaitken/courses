RSpec.describe Array do
  it 'starts out empty' do
    expect(subject.length).to eq(0)
    subject.push(element)
    expect(subject.length).to eq(1)
  end
end
