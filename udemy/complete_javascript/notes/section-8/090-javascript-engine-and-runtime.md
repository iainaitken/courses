# The JavaScript Engine and Runtime

## Notes

### What is the JavaScript Engine?

> A computer program that executes JavaScript code.

Every browser has its own JavaScript engine, but the most well-known is Google's V8 Engine. It powers Google Chrome and Node JS. Node JS is server-side JS - it powers applications outside the browser.

Every JavaScript Engine contains a **call stack** and a **heap**.

The call stack is where our code is executed, using "execution contexts". The heap is an unstructured memory pool where objects in our application are stored.

### How is our code compiled?

Compilation vs Interpretation.

Every computer program needs to be converted to binary, as this is the only way in which the computer hardware components work.

**Compilation** is where the entire code is converted into machine code at once, and written to a binary file that can be executed by any computer.

Step 1: The source code is compiled into machine code and stored in a portable binary file.

Step 2: The portable file is executed in the CPU.

Execution can happen a long time after compilation.

**Interpretation** is where the conversion to machine code and execution happens line-by-line. Interpreted languages are much slower than compiled languages.

JavaScript used to be a interpreted language only, but with modern JavaScript and web apps, low performance is not acceptable.

**Just-in-Time Compilation**

Modern JavaScript engines use just-in-time compilation. This is where the entire code is converted into machine code at once, and then executed immediately. There is no portable file in the middle step.

This is a lot faster than interpretation.

In the JS engine, the process is as follows:

1. The JS code enters the engine, where it is **parsed**. This essentially means the code is read.
2. The code is parsed into a data structure called the Abstract Syntax Tree. The AST is a collection of bits of discrete, meaningful JS code such as the `const` keyword. The bits of code are stored in the AST in a structured way. During this step, the engine checks for syntax errors. The AST will be used to generate the machine code. The AST has nothing to do with the DOM; it is simply a representation of the code in the JS file.
3. The AST is compiled into machine code.
4. The machine code is executed immediately - this happens in the call stack.
5. Modern JavaScript engines also optimise code. However, as the code is executed immediately, the process is as follows:
   1. Initially, the AST is compiled into unoptimised machine code, which is executed immediately, so that the code can start running as soon as possible.
   2. Whilst that is happening, the JavaScript engine will start to optimise and recompile the code.
   3. The optimised code is swapped for the unoptimised code that has not been run yet - without stopping execution of the code. This can happen multiple times.
   4. All of this happens in special threads within the engine that we cannot access - in other words, separate to the main thread in the call stack.

### JavaScript Runtime

The most common JavaScript Runtime is the browser.

Runtime can be thought of as a container that holds all of the things we need to use JavaScript. At the heart of a runtime is the JavaScript Engine (which broadly consists of the heap and the call stack). The Engine is not enough, though. We need access to the Web APIs, too. This is, for example, the DOM, Timers, the Fetch API or even `console.log`. These things are not part of the JavaScript Engine; JavaScript simply has access to them through the global window object.

We also need a callback queue. This is a data structure that holds all of the callback functions that are ready to be executed. A callback function might, for example, include an `onClick` function.

When the function is called, it is moved to the callback queue. When the call stack is empty, it is moved to the call stack to be executed. This is the "event loop". The event loop allows JavaScript to have a non-blocking concurrency model, with only a single thread.

In Node.js, the runtime is similar, but cannot include Web APIs as it is outside of a browser environment. Instead, we have multiple C++ bindings and a thread pool.
