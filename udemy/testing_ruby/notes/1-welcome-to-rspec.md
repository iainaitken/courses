# Welcome to RSpec

## Notes

RSpec is an open source Ruby testing library. Most popular Ruby Gem in existence, still actively developed.

A DSL - Domain-Specific Language. The domain is testing - i.e. the language is built solely to test Ruby code.

_What is testing?_

Writing code that checks that Ruby code works as expected.

_Why test?_

* Avoids regressions when new features are added.
* Provides living documentation for the code base. Some developers say you don't need to write documentation if you have a very good test suite - that will always be up to date and should explain everything about the program.
* You can isolate specific bugs
* TDD - improve quality of code, especially design.
* Cut down developer time.

### RSpec Ecosystem

RSpec consists of three independent Gems that work together:

1. rspec-core - base library that organises and runs tests.
2. rspec-expectations - library that allows you to implement test assertions.
3. rspec-mocks - library used to fake behaviour of classes and objects.

Don't _need_ to be used together but most often are.

Mocks library - when we have a complex system, many classes will be coupled with each other. We want to be able to test these independently, so it is useful to be able to imitate linked classes. For example - testing code that links to  database. You do not want to actually link to the database, so you want the test to be given information as if it had linked to the database and retrieved data.

RSpec Rails Gem integrates RSpec with the Ruby on Rails web framework.

### Project Structure

spec directory houses the spec files

lib directory houses the project files

spec directoy mimcs lib, including any nested directories

RSpec file ends with a _spec.rb extension that matches the file it is testing
