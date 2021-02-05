# Starting a project with RSpec

## Notes

To initialise rspec into a project folder, use the following code in the command line:

```
rspec --init
```

This creates an rspec framework with a spec folder and help file.

Can then use the following code to open the project in your text editor:

```
atom .
```

In spec_helper.rb are a lot of global configuration settings. This file is always loaded and therefore this should be kept as light-weight as possible.

If some of your tests require additional dependencies then make a separate helper file that is loaded when necessary.

In spec_helper.rb we can configure rspec to work with other gems than the rspec expectations and mock gems.

Between line 49 and 99 in spec_helper code has been commented out. These are default configuration settings that the rspec developers recommend you use, and can be used simply by un-commenting out the code.

Will look at these later in the course.
