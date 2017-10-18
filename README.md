### Getting started

Install **node.js**. 

Install **gulp** and **bower**.

    $ npm -g install gulp bower

After that, check out the **angular-codelab** project from git and run the following commands from the root folder: 

    $ npm install
    $ bower install
    $ gulp serve

You are now ready to go, your application is available at **http://127.0.0.1:3000**.

**Every file you add, edit or delete into the `/client` folder will be handled by the build system**.

When you are ready to build a production release there is a task for that:

    $ gulp serve:dist

This task will lint your code, optimize css js and images files, run unit tests. After the task has successfully finished, you can find an optimized version of your project inside the  `/build/dist` folder.

### Features

* 5 simple task: `gulp serve`,`gulp serve:dist`, `gulp serve:tdd`, `gulp test:unit`, `gulp test:e2e`
* JavaScript file continuous linting with `jshint`.
* SASS continuous compiling.
* `Unit` and `e2e` testing support. (for `e2e` testing you need to have a java runtine installed, take a look at [selenium JavaScript api ](http://selenium.googlecode.com/git/docs/api/javascript/index.html) and [protractor](https://github.com/angular/protractor) for more informations.
* HTML templates converted into strings and attached to a single javascript file (to avoid one http call for each template).
* Livereload provided by [browsersync](http://www.browsersync.io/).
* angular module dependencies automatically injected using [ng-annotate](https://github.com/olov/ng-annotate).
* Static resources minification and optimization for production.
* sourcemaps generated and embedded in JavaScript and css files during the production optimization.

### Directory Structure

* `build/` - Build files and configuration, the most important files to note are `build.config.js`, `protractor.config.js` and `karma.config.js`. These files are the heart of the build system. Take a look.
* `client/` the source code and tests of your application, take a look at the modules in this folder, you should structure your application following those conventions, but you can choose another convention as well.
* `.bowerrc` - the bower configuration file. This tells Bower to install components in the `client/src/vendor` directory.
* `.jshintrc` - JSHint configuration.
* `gulpfile` - see [The Build System](#thebuildsystem) below.
* `bower.json` - Contains the list of bower dependencies.
* `package.json` - node.js dependencies.


### A description of available tasks:

* **gulp serve** - The Application is up and running for you to access at port 3000. -- http://localhost:3000/#/search
* **gulp default** - With this task, you have the application running at port 3000 and documentation at port 8000.  -- http://localhost:8000/api
* **gulp test:unit** - For running unit tests  -- 10 unit tests approximately. All unit tests will pass 
and you can also check the code coverage percentage once run "gulp test:unit" task at -- Walmart_Assignment/client/test/unit-results/coverage/PhantomJS 1.9.8 (Windows 8 0.0.0)/index.html





