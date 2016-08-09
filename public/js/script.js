console.log("ALl gears loaded!")
$(".on").on("click", function() {
      console.log("on btn clicked")

    $.ajax({
      url: '/on',
      type: 'GET',
      dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
      data: {param1: 'value1'},
    })
    .done(function(data) {
      console.log("success");
      console.log(data)
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });


})
