# Chapter 2 - Designing Classes With a Single Responsibility

Whilst messages are more important than classes, classes are the most visible part of a program and so we start there.

The first thing is that you need to __keep it simple__.

Your program needs to work now, and be easy to change later. This is hard, and is the craft of programming.

## Deciding What Belongs in a Class

This is an important step, because the classes that you create may forever define how you and others think about your application.

Nevertheless, you are unlikely to know enough about your application at this stage to get this right.

Design is, therefore, about preserving the ability to change, not achieving perfection.

Code that is easy to change:

1. Changes have no unexpected side effects.
2. Small changes in requirements require small changes in code.
3. Existing code is easy to reuse.
4. Easiest way to make change is to add code that is itself easy to change.

This maps out to __TRUE__.

* __Transparent__. Consequences of change should be obvious.
* __Reasonable__. Cost of change should be proportional to the benefits.
* __Usable__. Existing code should be useable in new and unexpected contexts.
* __Exemplary__. Code should be high quality, to encourage other programmers changing the code to carry on in the same manner.

## Creating Classes That Have a Single Responsibility

A class should do the smallest possible useful thing.

The first thing to do is to look at our domain. Are there any objects which have data and behaviour? They probably deserve to be a class.

### Why SRP Matters

SRP matters. If your application is to be easy to change (essential) then it must consist of classes that are easy to reuse. Classes that do too much are difficult to reuse; if a class has more than one responsibility it is likely that those responsibilities are entangled within the class, and reusing the behaviour in the class is likely to require duplicating the code.

### How Do We Tell if a Class Has a Single Responsibility?

We can tell if a class has single responsibility by interrogating it. __Rephrase each one of its methods as a question; the question ought to make sense in the context.__

Alternatively, we can try and describe the class in one sentence. __If the sentence contains the words "and" or "or", then the class is probably doing too much.__

This is where _cohesion_ becomes relevant. Class methods should be closely related to its central purpose.

__SRP does not mean that a class can only do one very narrow thing - it means that the things a class do should be highly related to its purpose.__

### When to Make Design Decisions

Do not make design decisions prematurely.

Do not try to anticipate future needs. Doing nothing is acceptable if the cost of doing nothing does not exceed the cost of doing that thing in the future.

Improve now vs improve later - always consider whether your code is TRUE; if not, then that is likely a reason to improve now.

## Writing Code That Embraces Change

### Depend on Behaviour, Not Data

Behaviour is captured in methods and invoked by sending messages. In OO programming, behaviour and data is encapsulated in objects. _Always_ access instance variable via methods - in Ruby this can be achieved by using attr_reader. When doing so, Ruby creates a simple wrapper method for that instance variable and that method becomes the only place in the code that understands what the instance variable is.

```ruby
class Gear
  attr_reader :chainring, :cog

  def initialize(chainring, cog)
    @chainring = chainring
    @cog = cog
  end

  def ratio
    chainring / cog.to_f
  end
end
```

We can go further and define our own methods to access instance variables, which would be useful if the instance variable needs to be amended in any way.

Beware, though, as public methods expose the workings of your class to other parts of the program, so private methods should be used instead.

### Hide Data Structures

If we directly access data in data structures, then our code is likely to be messy, and not respect the DRY principle. This is because the knowledge of where specific data is in that data structure should _only be known in one place in the program_.

Instead, wrap data structures in objects (classes, or perhaps a Struct if you don't want or need to create a new class) and access data in them through methods.

### Enforce Single Responsibility Everywhere

Methods should have a single responsibility. For example, a common operation is to iterate over a set of data and perform an operation on each item. The method is doing two things; instead, the iteration should be one method and the operation a second method.

Refactoring that way might mean more operations for the computer to handle, but the primary goal at the moment is well-designed code. Performance can be improved later.

Refactoring like this is important as we can reveal good design by doing so. Benefits include:

* Expose previously hidden qualities. If class methods each have a single responsibility then the class will be easier to read and understand.
* Avoid the need for comments - the method name serves the same purpose.
* Encourage reuse. Small bits of the program are more likely to be easily reused.
* Methods with a single responsibility are easy to move to another class.
* The scope of your class is more apparent.

### Isolate Extra Responsibilities in Classes

If a class is doing too many things, then take some of the responsibilities out and put them in another class. However, be wary of making design commitments before you have to. Using a Struct can help with this - a Struct is like a mini-class that we can use to hold bits of data.
