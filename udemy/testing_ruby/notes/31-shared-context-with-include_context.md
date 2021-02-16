# Shared context with include_context

## Notes

Shared examples are only part of how we can keep our code DRY - you also need to consider all of the other elements, such as setting up tests using variables, or the let helper method.

```ruby
RSpec.shared_context 'common' do
  before do
    @foods = []
  end

  def some_helper_method
    5
  end

  let(:some_variable) { [1, 2, 3] }
end
```

In the above example, the various helper methods are described outside any example groups, and they can be injected into example groups in other files.

Using include_context doesn't change the behaviour of the helper methods. A before block will run before each example and will create a new instance of any local variables each time.

```ruby
RSpec.shared_context 'common' do
  before do
    @foods = []
  end

  def some_helper_method
    5
  end

  let(:some_variable) { [1, 2, 3] }
end

RSpec.describe 'first example group' do
  include_context 'common'

  it 'can use outside instance variables' do
    expect(@foods.length).to eq(0)
    @foods.push("sushi")
    expect(@foods.length).to eq(1)
  end

  it 'can reuse instance variables across different examples' do
    expect(@foods.length).to eq(0)
  end

  it 'can use shared helper methods' do
    expect(some_helper_method).to eq(5)
  end
end

RSpec.describe 'second example in different file' do
  include_context 'common'

  it 'can use shared let variables' do
    expect(some_variable).to eq([1, 2, 3])
  end

end
```
