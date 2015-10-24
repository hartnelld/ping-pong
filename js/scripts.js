$(document).ready(function() {
  var goal = parseInt(prompt("What number would you like to ping-pong up to?"));
  var currentValue = 1;

  while (currentValue <= goal) {
    if (((currentValue % 3) === 0) && ((currentValue % 5) === 0)) {
      $(".dynamic-list").append("<li>ping-pong</li>");
    } else if ((currentValue % 3) === 0) {
      $(".dynamic-list").append("<li>ping</li>");
    } else if ((currentValue % 5) === 0) {
      $(".dynamic-list").append("<li>pong</li>");
    } else {
      $(".dynamic-list").append("<li>" + currentValue + "</li>");
    };
    currentValue++;
  };
});
