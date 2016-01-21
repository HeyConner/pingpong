function pingpong(userInput) {
  if(parseInt(userInput, 10)) {
  for(var i = 1; i <= userInput; i++){
    if(i % 15 === 0) {
      $("ul").append("<li>ping pong</li>");
      return true;
    }
    else if (i % 5 === 0) {
      $("ul").append("<li>pong</li>");
    }
    else if (i % 3 === 0) {
      $("ul").append("<li>ping</li>");
    }
    else {
      $("ul").append("<li>" + i + "</li>");
    }
  }
} else {
  $("ul").append("<li>That is not a valid input. Please input a number.") }
}
$(document).ready(function() {
  $("button#calculate").click(function() {
    $("ul").empty();
    pingpong($("#userInput").val());
    event.preventDefault();
  });
});
