# Receive Counts

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-mocks/v/3-8/docs/setting-constraints/receive-counts)

## Notes

In some circumstances we may need to invoke a method more than once. When this is the case, the 'expect(object).to receive(method)' test will not properly assess whether our code is working, as on its own it cannot test the number of times that the method is invoked. This is where counts come in.

There are a number of different ways of writing these tests, but be careful as they can overlap:

```ruby
expect(stuntman).to receive(:set_on_fire).once
expect(stuntman).to receive(:set_on_fire).exactly(1).times
```

In the above example, the assertions test for the same thing and we would get a failing test if our code only called #set_on_fire on our stuntman object once - the tests stack up and RSpec would be checking to see that the object receives the method _twice_. An alternative way would be as follows:

```ruby
expect(stuntman).to receive(:set_on_fire).at_most(1).times
```

Similarly, we have:

```ruby
expect(stuntman).to receive(:act).twice
expect(stuntman).to receive(:act).exactly(2).times
expect(stuntman).to receive(:act).at_least(2).times
```
