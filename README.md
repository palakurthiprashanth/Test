Let’s go over some important and commonly tested concepts of JavaScript during interviews. This includes the working of the call stack, web API, and event queue.

# setTimeout
JavaScript is single-threaded, meaning it can only run one command at a time. Due to this, commands are not run in parallel. Because the execution happens line-by-line, each command is considered synchronous hence blocking.

So, is it possible to run an asynchronous code in JavaScript?

This is where the setTimeout function comes into play. It is a web API provided by the browser that takes a callback function as its first parameter and time in milliseconds as its second parameter. It executes the callback function after the specified number of milliseconds pass.

Let’s take a look at an example:
[ eventloop.js ]

Screen Shot 2020-05-30 at 9.22.55 AM
Screenshot 2020-05-21 at 12.03.50 PM.png
