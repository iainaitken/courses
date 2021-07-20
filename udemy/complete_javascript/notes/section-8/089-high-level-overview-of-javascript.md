# A High-Level Overview of JavaScript

## Notes

Javascript is a high-level, object-oriented, multi-paradigm programming language.

This is quite simplistic. JavaScript can also be described as:

> JavaScript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collecting programming language with first-class functions and a non-blocking event loop concurrency model.

### High-level

High-level languages have a high degree of abstraction away from machine code and do not require the user to (for example) manage computer resources like memory. All of that goes on under the hood.

This makes the language easier to use, but on the flip side, high-level languages use more resources and cannot run as fast as low-level languages (like C), where the programmer can optimise the code's performance.

### Garbage Collected

This removes old, unused objects from the computer's memory. It is one of the parts of JavaScript that manage computing resources under the hood.

### Interpreted or just-in-time compiled

Our code must be compiled into binary code for the computer to run. This happens inside the computer, and happens at run time. In other words, if there is an error in the code then it will only be picked up when the code is run.

### Multi-paradigm

A coding paradigm is an approach and mindset of structuring code, which will direct your coding style and technique. Three popular paradigms are:

1. Procedural Programming
2. Object-Oriented Programming (OOP)
3. Functional Programming (FP)

So far in this course we have been using procedural programming - organising our code in a linear way, with some functions thrown in.

_Paradigms can be classified as imperative vs. declarative - more on this later in the course._

JavaScript, as a multi-paradigm language, encompasses all of the above paradigms.

### Prototype-based Object-oriented

Everything in JavaScript is an object, except for primitive values such as strings, numbers etc.

JavaScript contains 'prototypes' which contain all of the functions and methods that particular object can use. When we create a new instance of that object, for example an array, it will inherit all of the methods of the prototype, so we can then use them in our code (for example, the `push` method in arrays).

### First-class functions

Functions are treated as regular variables. We can pass them into other functions, and we can return them from functions.

This is a powerful tool; it allows us to use of powerful techniques, and allows for functional programming. We used this in the modal window project when we passed a function into our `addEventListener` method.

### Dynamically-typed

We do not need to assign types to our variables in JavaScript; the JS engine does that for us automatically. Variables, and their types, can be easily changed throughout the code.

Strongly-typed languages are different - you must declare a variable type. This can help reduce bugs. If you want to do this with JavaScript, look into TypeScript.

### Single-threaded

A concurrency model is how the JS engine handles multiple tasks at a single time. JS is single-threaded, so it can only do one thing at a time. A thread is a set of instructions executed in the CPU.

### Non-blocking Event Loop

Long-running tasks would block the thread - to get around this we use the event loop where JavaScript takes long tasks and runs them in the background, only adding them to the thread when they are complete.
