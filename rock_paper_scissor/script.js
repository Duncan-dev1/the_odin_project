let result = "";

var playerWins = 0;
var computerWins = 0;

var myArray = ["rock", "paper", "scissors"];
const btn = document.querySelector(".btn");
function game() {
  for (var i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your option");
    function computerPlay() {
      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
      return randomItem;
      //console.log(randomItem)
    }
    // computerPlay();

    function playRound(playerSelection, computerSelection) {
      return playerSelection;
    }
    const computerSelection = computerPlay();
    // var playerWins=0;
    // var computerWins=0;
    //conditions
    function results() {
      if (computerSelection === "paper" && playerSelection === "scissors") {
        result = "You win";
        playerWins++;
      }
      if (computerSelection === "paper" && playerSelection === "rock") {
        result = "Computer wins";
        computerWins++;
      }
      if (computerSelection === "paper" && playerSelection === "paper") {
        result = "There is a tie";
      }
      if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "Computer wins";
        computerWins++;
      }
      if (computerSelection === "rock" && playerSelection === "paper") {
        result = "You win";
        playerWins++;
      }
      if (computerSelection === "rock" && playerSelection === "rock") {
        result = "There is a tie";
      }
      if (computerSelection === "scissors" && playerSelection === "rock") {
        result = "You win";
        playerWins++;
      }
      if (computerSelection === "scissors" && playerSelection === "paper") {
        result = "Computer wins";
        computerWins++;
      }
      if (computerSelection === "scissors" && playerSelection === "scissors") {
        result = "There is a tie";
      }
      return result;
    }
    //end
    results();

    //  const computerSelection = computerPlay();
    console.log(
      "your choice is" + " " + playRound(playerSelection, computerSelection)
    );
    console.log("computer choice is" + " " + computerSelection);
    console.log(result);
  }
  if (playerWins > computerWins) {
    alert("Congratulations,You win by"+' ' + playerWins + ': ' +computerWins);
  } else if(computerWins > playerWins) {
    alert("Sorry,You lose by"+' ' + playerWins + ': ' +computerWins);
  } else {
      alert("There is a tie of"+' ' + playerWins + ' : ' +computerWins);
  }
}

 btn.onclick=game();
