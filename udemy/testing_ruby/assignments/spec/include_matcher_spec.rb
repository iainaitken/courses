RSpec.describe 'include matcher' do
  describe 'hot chocolate' do
    it 'checks for substring inclusion' do
      expect(subject).to include('hot')
      expect(subject).to include('choc')
      expect(subject).to include('late')
    end

    it { is_expected.to include('hot') }
  end

  describe [10, 20, 30] do
    it 'checks for inclusion in the array, regardless of order' do
      expect(subject).to include(10)
      expect(subject).to include(10, 30)
      expect(subject).to include(30, 20)
    end

    it { is_expected.to include(30, 10, 20) }
  end

  describe ({ a: 1, b: 2, c: 3 }) do
    it 'can check for key existence' do
      expect(subject).to include(:a)
      expect(subject).to include(:a, :b)
      expect(subject).to include(:b, :a)
    end

    it 'can check for key-value pairs' do
      expect(subject).to include(a: 1)
    end

    it { is_expected.to include(:b) }
    it { is_expected.to include(b: 2) }
  end
end