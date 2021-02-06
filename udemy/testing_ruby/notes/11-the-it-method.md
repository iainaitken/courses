# The it method

## Resources

[RSpec documentation](https://relishapp.com/rspec/rspec-core/v/3-8/docs/example-groups/basic-structure-describe-it)

## Notes

it is a method.

it accepts an argument - usually a string that makes it read like a sentence.

The goal is to describe a feature of the card class.  You want to describe the **expected behaviour** of what you are about to build.

***DO NOT DESCRIBE THE IMPLEMENTATION OF THE FEATURE*** - these are considered when we start writing expectations in the body of the it method.  The idea is that another developer should have a general idea of how it works.

There is an alias for it, namely _specify_. Most developers use it, but they both work in the same way.
