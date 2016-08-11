"use strict"

const os = require("os");
const path = require("path");
const Server = require("http").Server;

const express = require("express");
const five = require("johnny-five");
const logger = require("morgan");

const homeRoute = require("./routes/home");
const onOffRoute = require("./routes/onoff");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use("/", homeRoute);

const board = new five.Board();

board.on("ready", function() {

  const server = new Server(app);
  const port = process.env.PORT || 3000;

  const led = new five.Led(process.argv[2] || 11);

  app.get("/on", function(req, res) {
    led.on();
  });
  app.get("/off", function(req, res) {
    led.off();
  });
  app.listen(port, function() {
    console.log(`http://${os.hostname()}:${port}`);
  });
});
