var convert = function(cups) {
  return cups / 4 ;
};

$(document).ready(function() {
  $("form#convert").submit(function(event) {
    var cups = parseInt($("#cups").val());
    var result = convert(cups);
    $("#convertOutput").text(result);
      event.preventDefault();
      });
  });
