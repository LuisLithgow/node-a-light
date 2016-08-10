'use strict'

module.exports = {

  hitOn: function(req, res, next) {

    let five = require("johnny-five");
    let board = new five.Board();
    let led ;

    let loop = true;
    let state = false;

    // Create a simple demo sequece that calls various
    // five.Led methods with specified arguments and
    // let it run for the given duration (defaults to 3 seconds).
    // if (state === true) {
      let demoSequence = [{
        method: "pulse",
        args: [1000],
        duration: 5000
      }, {
        method: "strobe",
        args: [500],
        duration: 3000
      }, {
        method: "fadeIn",
        args: [
          2000,
          function() {
            console.log("fadeIn complete!");
          }
        ],
        duration: 2500
      }, {
        method: "fadeOut",
        args: [
          5000,
          function() {
            console.log("fadeOut complete!");
          }
        ],
        duration: 5500
      }, {
        method: "brightness",
        args: [10],
        duration: 3000
      }, {
        method: "off"
      }];

      // $(".on").on("click",

      // Execute a method in the demo sequence
      function execute(step) {
        console.log("Execute function hit; clicked on")

        // Grab everything we need for this step
        let method = demoSequence[step].method;
        let args = demoSequence[step].args;
        let duration = demoSequence[step].duration || 3000;

        // Just print out what we're executing
        console.log("led." + method + "(" + (args ? args.join() : "") + ")");

        // Make the actual call to the LED
        five.Led.prototype[method].apply(led, args);

        // Increment the step
        step++;


        // If we're at the end, start over (loop==true) or exit
        if (step === demoSequence.length) {
          if (loop) {
            step = 0;
          } else {
            // We're done!
            process.exit(0);
          }
        }

        // Recursively call the next step after specified duration
        board.wait(duration, function() {
          execute(step);
        });
      }
      // )
      // ENd of click function

      board.on("ready", function() {
        // Defaults to pin 11 (must be PWM)
        led = new five.Led(process.argv[2] || 11);

        // Kick off the first step
        execute(0);
      });
    // } else {
    //   state = false
    // }


  }
  // next()
  // end of hit on funct
}


