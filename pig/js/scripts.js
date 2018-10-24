var game = {
  currentPlayer: player1,
  otherPlayer: player2,
  resetGame: function() {
    totalScore1 = 0;
    totalScore2 = 0;
  }
}

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2
    otherPlayer = player1
  }
  else {
    currentPlayer = player1
    otherPlayer = player2
  }
};

var player1 = {
  name: "Player 1",
  score: totalScore1
}

var player2 = {
  name: "Player 2",
  score: totalScore2
}

var turnScore1 = [];
var totalScore1 = [];
var turnScore2 = [];
var totalScore2 = [];

function rndNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function add(a, b) {
    return a + b;
}

function roll() {
  if (x === 1) {
    console.log("end turn");
    turnScore1 = [0];
    switchPlayer();
    console.log(currentPlayer)
  }
  else {
    turnScore1.push(x);
  }
}

$(document).ready(function() {
  $("form#player1Roll").submit(function(event) {
    event.preventDefault();
    x = rndNumber();
    roll();
    $("#dice").text(x);
    $("#player1-score-keeper").text(turnScore1.reduce(add, 0));


    console.log(turnScore1.reduce(add, 0));
  });
  $("form#player1End").submit(function(event) {
    event.preventDefault();
    totalScore1.push(turnScore1.reduce(add, 0));
    var newScore = totalScore1.reduce(add, 0);
    $("#player1-total-score").text(totalScore1.reduce(add, 0));
    if (newScore > 50) {
      console.log("win");
    }
    turnScore1 = [0];
  });
});
