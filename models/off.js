'use strict'

module.exports = {

  hitOff: function (req,res, next) {
    var five = require("johnny-five");
    var board = new five.Board();
    var led = new five.Led(11);

      board.on("ready", function() {
        board.stop().off();

        });


  }
}
