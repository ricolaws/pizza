
function rndNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function add(a, b) {
    return a + b;
}

var turnScore = [];
var totalScore = [];

var player1 = {
  name: "Player 1",
  score: 0
}

function roll() {
  if (x === 1) {
    console.log("end turn");
    turnScore = [0];
  }
  else {
    turnScore.push(x);
  }
}

$(document).ready(function() {
  $("form#player1Roll").submit(function(event) {
    event.preventDefault();
    x = rndNumber();
    roll();
    $("#dice").text(x);
    $("#player1-score-keeper").text(turnScore.reduce(add, 0));


    console.log(turnScore.reduce(add, 0));
  });
  $("form#player1End").submit(function(event) {
    event.preventDefault();
    totalScore.push(turnScore.reduce(add, 0));
    var newScore = totalScore.reduce(add, 0);
    $("#player1-total-score").text(totalScore.reduce(add, 0));
    if (newScore > 50) {
      console.log("win");
    }
    turnScore = [0];
  });
});
