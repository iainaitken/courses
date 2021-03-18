# Testing Ruby With RSpec

[Link to course](https://www.udemy.com/course/testing-ruby-with-rspec/learn/lecture/12409324#overview)

## Course Outline

### Section 1: Introduction

1. [Welcome to RSpec](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/1-welcome-to-rspec.md)
2. About Me
3. [Unit Tests vs End-to-End (E2E) Tests](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/3-unit-tests-vs-end-to-end-tests.md)
4. Setup rbenv / Ruby on MacOS
5. Installing RSpec
6. Installing Visual Studio Code for MacOS
7. [Starting a Project with rspec --init](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/6-starting-a-project-with-rspec.md)
8. Download Course Files (Optional)
9. [Test-Driven Development](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/9-test-driven-development.md)
10. [The describe Method](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/10-the-describe-method.md)
11. [The it Method](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/11-the-it-method.md)
12. [The expect and eq Methods](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/12-the-expect-and-eq-methds.md)
13. [Reading Failures](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/13-reading-failures.md)
14. Making the Specs Pass
15. [Multiple Examples in Example Group](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/15-multiple-examples-in-example-group.md)
16. Fixing Failing Specs Again
17. [Reducing Duplication - Before Hooks and Instance Variables](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/17-reducing-duplication-before-hooks-and-instance-variables.md)
18. [Reducing Duplication: Helper Methods](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/18-reducing-duplication-helper-methods.md)
19. [Problems With Mutation](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/19-problems-with-mutation.md)
20. [Reducing Duplication: The let Method](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/20-reducing-duplication-the-let-method.md)
21. [Custom Error Messages](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/21-custom-error-messages.md)
22. [The context Method and Nested Describes](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/22-the-context-method-and-nested-describes.md)
23. [before and after Hooks](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/23-before-and-after-hooks.md)
24. [Nested Logic: Hooks](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/24-nested-logic-hooks.md)
25. [Nested Logic: Overwriting Let Variables](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/25-nested-logic-overwriting-let-variables.md)

### Section 2: Subjects, Shared Examples, and Shared Context

26. [Implicit Subject](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/26-implicit-subject.md)
27. [Explicit Subject](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/27-explicit-subject.md)
28. [described_class](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/28-described-class.md)
29. [One-Liner-Example-Syntax](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/29-one-liner-example-syntax.md)
30. [Shared Examples with include_examples](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/30-shared-examples-with-include_examples.md)
31. [Shared Context with include_context](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/31-shared-context-with-include_context.md)

### Section 3: Built-in Matchers

32. [The not_to Method](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/32-the-not-to-method.md)
33. [Equality Matchers I (eq and eql)](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/33-equality-matchers-I.md)
34. [Equality Matchers II (equal and be)](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/34-equality-matchers-II.md)
35. [Comparison Matchers](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/35-comparison-matchers.md)
36. [Predicate Matchers](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/36-predicate-matchers.md)
37. [all Matcher](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/37-all-matcher.md)
38. [be Matcher (Truthy, Falsy and Nil Values)](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/38-be-matcher.md)
39. [change Matcher](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/39-change-matcher.md)
40. [contain_exactly Matcher](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/40-contain-exactly-matcher.md)
41. [start_with and end_with Matchers](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/41-start-with-and-end-with-matchers.md)
42. [have_attributes Matcher](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/42-have-attributes-matcher.md)
43. [include Matcher](https://github.com/iainaitken/courses/blob/main/udemy/testing_ruby/notes/43-include-matcher.md)
44. [raise_error Matcher]
45. [respond_to Matcher]
46. [satisfy Matcher]
47. [not_to Method]
48. [Compound Expectations]

### Section 4: Mocks

49. [Create a Test Double]
50. [Set up Our Test Movie]
51. [Replacing an Object with a Double]
52. [Receive Counts]
53. [The allow Method]
54. [Matching Arguments]
55. [Instance Doubles]
56. [Class Doubles]
57. [Spies I]
58. [Spies II]

### Section 5: Conclusion

59. [Conclusion]
60. [Bonus!]
