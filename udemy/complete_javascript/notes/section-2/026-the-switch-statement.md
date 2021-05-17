# The Switch Statement

## Notes

An alternative way of writing an if-else statement. We can use it if all we want to do is compare one value against multiple different options.

The syntax is as follows:

```javascript
const day = 'Thursday';

switch(day) {
  case 'Monday':
    console.log('JS course');
    console.log('Go for a walk');
    break;
  case 'Tuesday':
    console.log('Update CV');
    break;
  case 'Wednesday':
    console.log('Finish mini projects');
    break;
  case 'Thursday':
  case 'Friday':
    console.log('Apply for jobs');
    break;
  case 'Saturday':
    console.log('Country Walk');
    break;
  case 'Sunday':
    console.log('Chill');
    break;
  default:
    console.log('Not a vaild day');
}
```

"day" is strictly compared to each case. If day is equal to the case statement, then the code underneath is run. Multiple lines of code can fit into each case statement. Multiple cases can execute the same code (See Thursday and Friday in the above example).

"break" statements are important. Without them, the code keeps executing. For example, if we had no break statement in the Monday case statement, then the code for Monday would execute, followed by the code for Tuesday, where the program would stop when it reaches the break statement.
