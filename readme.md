JavaScript Test Driven Development
PhantomJS and Jasmine

=====================

Test Driven Development can be overwhelming.  It sounds like a lot of hard, tedious, work when beginning to code. Some may say writing code to do nothing but test the code you’re going to use seems useless and a waste of time.  However it is important to use TDD.  It forces your brain to think! Writing test forces me to think about what exactly I am trying to achieve. I have to be specific about what I am trying to do. Once it’s clear then I can write the code.  Practicing TDD encourages me to write tests and write smaller, easier-to-understand units of code. 
Basically, your program will have a bunch of functions and classes. You want to make sure that, no matter what you throw at them, they'll perform how you want them to. For example, this function should always return a string that says "hello" in it. Testing ensures that everything goes down exactly how you planned. 
 
 This application gives teaches you how to set up Javascript test environment. 
 It also gives a basic understanding of what test driven development, and the 
 typeof TDD: Behavior test drive development is

 
Phantom-Jasmine
=====================

Phantom-Jasmine is a simple set of two scripts for running your Jasmine Tests via Phantom.js (http://www.phantomjs.org/).
The first script lib/console-runner.js is a plugin to Jasmine that outputs test results (with ansi color codes) via console.log (included with a script tag inside TestRunner.html).
The second script lib/run_jasmine_test.coffee takes an html file as it's first and only argument and then executes any Jasmine tests
that file loads. See below for more detail.


Installation
-------------------

Assuming you have PhantomJs setup and installed...

    sudo npm install phantom-jasmine -g


Running Tests
-------------------

    phantom-jasmine examples/TestRunner.html

On some running OS X you might have to pass in the full url, ex:

    phantom-jasmine file://localhost/Users/bob/phantom-jasmine/examples/TestRunner.html 


If everything works you should see output like this in your terminal:

    Util : should fail for the example
    Error: Expected false to be truthy.

    Finished
    -----------------
    3 specs, 1 failure in 0.024s.
    

To run your own tests with Phantom-Jasmine just look at TestRunner.html and modify/copy the script tags accordingly.
