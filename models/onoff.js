module.exports = {

  alertHit: function(req, res, next) {


    let five = require("johnny-five");
    let board = new five.Board();
    let LEDPIN = 8;
    let ledOn = false;
    let counter = 0;

    board.on("ready", function(){
      console.log("made it to the model!")
      let ledStatus = "";
      var led = new five.Led(LEDPIN);

      btn.on("hit", function(){
        led.on();
        counter++
      });

      btn.on("release", function(){
        led.off();
        let data = { 'grips': counter }
        console.log(data)
        res.counter = data;
        next();
      });
    });
  }
}
