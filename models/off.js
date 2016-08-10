'use strict'

module.exports = {

  hitOff: function (req,res, next) {
    var five = require("johnny-five");
    var board = new five.Board();
    var led = new five.Led(11);

      // board.on("ready", function() {
      //   led.pulse(400);

      //     board.wait(4000, function(){
      //       led.stop();
      //     });

      //     board.repl.inject({
      //       led: led
      //     });
      //   });

      board.stop().off();

  }
}
