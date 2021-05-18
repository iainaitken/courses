# Chapter 1 - Object-Oriented Design

__From the introduction: there is no final authority on OOD rules; we are all responsible for our designs and our choices when making them. The rules outlined in this book should be followed initially, but ultimately if you find a better way of working then you should feel free to adapt the way you work accordingly.__

## Introduction

Our world is both procedural and filled with objects that interact with one another. OOD is about shifting your perspective from viewing the world as procedural, to viewing the world as a collection of interacting objects.

## In Praise of Design

The end-product is the entire purpose of building software. Programmers therefore need to be cost-effective, and OOD helps us write code that is easy to change and maintain, thus improving cost-efficiency.

Software cannot stay static. Change will occur; for example:

* Customers' requirements change
* An application becomes popular and needs to be scaled up
* You learn how to do something better, and want to optimise the code

Applications should be easy to change, so that they are flexible and adaptable. OOD is about managing dependencies - objects should not know too much about each other, because then they resist change (a change to one collaborator will affect many others).

__Design is about building your application in the expectation that things will change, in order to reduce the cost of making that change when it becomes necessary. It is not about trying to foresee what changes will occur.__

## The Tools of Design

Software developers have several tools at their disposal when writing software. These are usually grouped into principles and patterns. Studies have shown that software that makes use of these principles and patterns is objectively better written.

* SOLID:
  * Single-Responsibility
  * Open-Closed
  * Liskov Substitution
  * Interface Segregation
  * Dependency Inversion
* Don't Repeat Yourself (DRY)
* The Law of Demeter

Patterns are outside the scope of the book, but broadly they are simple and elegant solutions to specific OO problems. It is important to use the right pattern to solve the right problem, otherwise they will not work.

## The Act of Design

Even if there are commonly-accepted design principles, designing object-oriented programs is still not necessarily easy. It takes skill and knowledge, just as any craft does.

### How Design Fails

* Through a lack of design. Undesigned applications can work, but carry the seeds of their own destruction - they are usually difficult to change. _"Yes, I can add that feature, but it will break everything."_
* Over-design. Over-design involves invoking patterns and principles where inappropriate and building an application that is constrained and difficult to change. _"I can't add that feature, the application wasn't designed to do that."_
* Where the act of design is separated from the act of programming. Design should be based on a feedback loop and built in collaboration with the customer - core tenets of the Agile philosophy. Where code is designed in isolation and built by programmers who have had no input into the design, the response is usually _"I can write this, but it's not what you really want and you'll be sorry."_.

### When to Design

Agile development believes customers can't define the software they want before they see it, so you should show it to them sooner rather than later.

This involves building software in small iterations, and incorporating a feedback loop into the design process, so that the software evolves rather than is designed up front.

Collaboration with the customer is key.

If this approach is right, then there is no point doing a Big Up Front Design (BUFD). It won't be correct, and we don't know when the product will be ready. BUFD therefore almost guarantees an adversarial relationship between the customer and programmer; design specifications will change during the project, leading to cost or time overruns, or software that doesn't do what the customer ultimately wants.

Agile guarantees that software will change, so you should make sure that your software is easy to change.

Key point:

* BUFD = detailed technical specifications and documentation before code is written.
* OOD = design is limited to making sure that your code is easy to change.

### Judging Design

Good design is difficult to measure. There are many tools that allow us to assess our code and see how well-designed it is, but these tools are only ever proxies for the really important question.

__What is the cost per feature over the time interval that matters?__

Costs, features and time are all difficult to define, track and measure.

In designing, we need to be flexible. Sometimes a feature is needed _right now_ - so increased costs of maintaining the code are worth it. This compromise is known as __technical debt__.

## Brief Introduction to Object-Oriented Programming

Object-oriented applications are made up of objects and the messages that pass between them. In a class-based object-oriented programming language like Ruby:

* Data and behaviour are combined into an object.
* Ruby has objects rather than data types.
* Operations that work with objects are built into the objects themselves, not the syntax of the language.
* Each object hides its data from the world (encapsulation).
* Ruby works by providing ways for objects to send messages to each other. It is the object's job to understand those messages.
* A class is a blueprint for creating similar objects. Classes define methods and attributes, and methods are invoked in response to messages.
* Classes are themselves objects. For example, "text" is a string, which is an object of the String class. A "String" is an object of the "Class" class. 

Compare to procedural languages:

* Data and behaviour are separate.
* Procedural languages are based on data types.
* The syntax of a procedural language allows you to carry out certain defined actions with specific data types.
* Every possible data type and action is built into the language itself. You _might_ be able to create functions and datasets by combining pre-existing data types and actions, but you cannot create new operations or data types.
