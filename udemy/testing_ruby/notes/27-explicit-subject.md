# Explicit Subject

## Notes

Can override RSpec's implicit subject helper method. The advantage to this is that you can provide for a more custom instance of subject. This might be useful if you have a custom class that has several arguments on initialisation.

By running the following at the top of the outermost context block, rspec will amend subject according to the code passed in:

```ruby
RSpec.describe Hash do
  subject do
    { a: 1, b: 2 }
  end
end
```

Can also give a name or identifier to subject:

```ruby
RSpec.describe Hash do
  subject(:bob) do
    { a: 1, b: 2 }
  end
end
```

By giving a name to subject, we can refer either to subject or bob in the tests, both will work:

```ruby
it 'has two key value pairs' do
  expect(subject.length).to eq(2)
  expect(bob.length).to eq(2)
end
```

Can also use let:

```ruby
let(:bob) { {a: 1, b: 2} }
```

However, it is preferred to use the subject approach. This gives you access to specific rspec syntax shorthands covered later in the course.

If we have nested examples, and subject is defined in an outer example, it is available throughout all of the inner nested examples.
