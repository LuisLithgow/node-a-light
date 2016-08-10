module.exports = {

  hitOn: function(req, res, next) {

    let five = require("johnny-five");
    let board = new five.Board();
    let LEDPIN = 8;
    let ledOn = false;
    let counter = 0;

    board.on("ready", function(){
      console.log("made it to the model!")
      let ledStatus = "";
      var led = new five.Led(LEDPIN);

    });
  }
}
