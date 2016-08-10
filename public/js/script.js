$(document).ready(function () {
console.log("Script loaded on script.js")

// Link the models toserver johnny five
// The route talks to the model




  $(".on").on("click", function() {
    console.log("on btn clicked")
    $.ajax({
      url: '/on',
      type: 'GET',
      // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
      dataType: 'script',
      // data: {param1: 'value1'},
    })
    .done(function(turnOn) {
      console.log(turnOn)
      console.log("success at turning on");
      let $div = $("onoff")
      let $h1 = $("<h1>")
      $h1.text("the light is on")
      $div.append($h1)
      // turnOn.state = true
    })
    .fail(function() {
      console.log("error");
    })
  })

  $(".off").on("click", function() {
    console.log("off btn clicked")
    $.ajax({
      url: '/off',
      type: 'GET',
      // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
      dataType: 'script',
      // data: {param1: 'value1'},
    })
    .done(function(turnOff) {
      console.log(turnOff);
      console.log("success at turning off");
      let $div = $("onoff")
      let $h1 = $("<h1>")
      $h1.text("the light is off")
      $div.append($h1)
      // turnOn.state = true
    })
    .fail(function() {
      console.log("error");
    })
  })












})
