  let result = "";
        let playerSelection = prompt("Enter your option");

        //let results = '';
        var myArray = ["rock", "paper", "scissors"];
        function game() {
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
            //conditions
            function results() {
                if (computerSelection === "paper" && playerSelection === "scissors") {
                    result = "You win";
                }
                if (computerSelection === "paper" && playerSelection === "rock") {
                    result = "Computer wins";
                }
                if (computerSelection === "paper" && playerSelection === "paper") {
                    result = "There is a tie";
                }
                if (computerSelection === "rock" && playerSelection === "scissors") {
                    result = "Computer wins";
                }
                if (computerSelection === "rock" && playerSelection === "paper") {
                    result = "You win";
                }
                if (computerSelection === "rock" && playerSelection === "rock") {
                    result = "There is a tie";
                }
                if (computerSelection === "scissors" && playerSelection === "rock") {
                    result = "You win";
                }
                if (computerSelection === "scissors" && playerSelection === "paper") {
                    result = "Computer wins";
                }
                if (
                    computerSelection === "scissors" &&
                    playerSelection === "scissors"
                ) {
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
        game();