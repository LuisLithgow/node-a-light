'use strict'


// const five = require("johnny-five");
// const board = new five.Board();
let led;
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = process.env[2] || process.env.PORT || 3000 ;
const homeRoute = require("./routes/home");
const onOffRoute = require("./routes/onoff");
const request = require('request');
const http = require("http");
let io = require('socket.io');
let fs = require('fs');
// let gpio = require("pi-gpio")
let onoff = require("onoff")


app.listen(PORT,()=>{
  console.log('sup from '+PORT);
})
// to-do: add views
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));


let state = false
// SEtting homeRoute
app.use('/', homeRoute);
app.get('/on', function(req,res) {
  console.log("Current state is " + state)
  res.send(state = true)

} );
app.get('/off', function(req,res) {
  state = false
} );

// // Do we want the sequence to loop?
// let loop = true;

// // Create a simple demo sequece that calls various
// // five.Led methods with specified arguments and
// // let it run for the given duration (defaults to 3 seconds).
// let demoSequence = [{
//   method: "pulse",
//   args: [1000],
//   duration: 5000
// }, {
//   method: "strobe",
//   args: [500],
//   duration: 3000
// }, {
//   method: "fadeIn",
//   args: [
//     2000,
//     function() {
//       console.log("fadeIn complete!");
//     }
//   ],
//   duration: 2500
// }, {
//   method: "fadeOut",
//   args: [
//     5000,
//     function() {
//       console.log("fadeOut complete!");
//     }
//   ],
//   duration: 5500
// }, {
//   method: "brightness",
//   args: [10],
//   duration: 3000
// }, {
//   method: "off"
// }];



//   console.log("will turn on")
// // Execute a method in the demo sequence
// function execute(step) {
//     console.log("clicked on")

//   // Grab everything we need for this step
//   let method = demoSequence[step].method;
//   let args = demoSequence[step].args;
//   let duration = demoSequence[step].duration || 3000;

//   // Just print out what we're executing
//   console.log("led." + method + "(" + (args ? args.join() : "") + ")");

//   // Make the actual call to the LED
//   five.Led.prototype[method].apply(led, args);

//   // Increment the step
//   step++;


//   // If we're at the end, start over (loop==true) or exit
//   if (step === demoSequence.length) {
//     if (loop) {
//       step = 0;
//     } else {
//       // We're done!
//       process.exit(0);
//     }
//   }

//   // Recursively call the next step after specified duration
//   board.wait(duration, function() {
//     execute(step);
//   });
// }



// board.on("ready", function() {
//   // Defaults to pin 11 (must be PWM)
//   led = new five.Led(process.argv[2] || 11);

//   // Kick off the first step
//   execute(0);
// });





// ******FOR GPIO******


var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects.
  led = new Gpio(14, 'out');      // Export GPIO #14 as an output.

// Toggle the state of the LED on GPIO #14 every 200ms 'count' times.
// Here asynchronous methods are used. Synchronous methods are also available.
(function blink(count) {
  if (count <= 0) {
    return led.unexport();
  }

// delete?
  led.read(function (err, value) { // Asynchronous read.
    if (err) {
      throw err;
    }

    led.write(value ^ 1, function (err) { // Asynchronous write.
      if (err) {
        throw err;
      }
    });
  });

  setTimeout(function () {
    blink(count - 1);
  }, 200);
}(25));
