
function rndNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

var player1 = {
  name: "Player 1",
  turnScore: [],
  score: 0
}

$(document).ready(function() {
  $("form#player1Roll").submit(function(event) {
    event.preventDefault();

    $("#dice").text(rndNumber);
  });
});
