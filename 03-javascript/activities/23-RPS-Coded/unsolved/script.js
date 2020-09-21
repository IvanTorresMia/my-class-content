console.log("Ivan");

// getting access to our div in html file
var buttonId = document.getElementById("Button");
// this is what keeps score in the game.
var wins = 0;
var loses = 0;
var ties = 0;
var gameArray = ["R", "P", "S"];

function gameFun() {
    alert("let's start the game.");
  for (i = 0; i <= 10; i++) {
    
    var randomNum = gameArray[Math.floor(Math.random() * gameArray.length)];
    var userAnswer = prompt("Choose a letter between R P or S");
    userAnswer = userAnswer.toUpperCase();

    if (userAnswer != "R" || userAnswer != "S" || userAnswer != "P") {
      alert("Invalid input, choose a letter between R S, or P");
      return;
    }
    if (
      (userAnswer === "R" && randomNum === "S") ||
      (userAnswer === "P" && randomNum === "R") ||
      (userAnswer === "S" && randomNum === "P")
    ) {
      alert("You won this round!");
      wins++;
    } else if (userAnswer === randomNum) {
      alert("You have tied!");
      ties++;
    } else {
      alert("You have lost this round");
      loses++;
    }
  }
  var finalScores =
    "You have won " +
    wins +
    " and you have lost " +
    loses +
    " and you have tied " +
    ties;
  return finalScores;
}

function writeToDom() {
  var finalScores = gameFun();
  var finalText = document.querySelector("#results");

  finalText.value = finalScores;
}

buttonId.addEventListener("click", writeToDom);
