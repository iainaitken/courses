RSpec.describe 'allow method review' do
  it 'can customise return value for methods on doubles' do
    calculator = double
    allow(calculator).to receive(:add).and_return(15)

    expect(calculator.add).to eq(15)
  end

  it 'can stub one or more methods on a real object' do
    array = [1, 2, 3]
    allow(array).to receive(:sample).and_return(1)
    expect(array.sample).to eq(1)

    array.push(4)
    expect(array).to eq([1, 2, 3, 4])
  end

  it 'can return multiple return values in sequence' do
    mock_array = double
    allow(mock_array).to receive(:pop).and_return(:c, :b, nil)
    expect(mock_array.pop).to eq(:c)
    expect(mock_array.pop).to eq(:b)
    expect(mock_array.pop).to be_nil
    expect(mock_array.pop).to be_nil
  end
end