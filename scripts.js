$(document).ready(function(){

    var computerPoints = 0;
    var userPoints = 0;

  $("#start").click(function(){
        // User's choice
        var userChoice = prompt("Do you choose rock, paper or scissors?");
        //Show user's choice
        $("#userChoice").html(userChoice);
        // Computer's choice
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
          computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
          computerChoice = "paper";
        } else {
          computerChoice = "scissors";
        }
        //Show computer's choice
        $("#computerChoice").html(computerChoice);

        //results var
        var tie = "The result is a tie!"
        var rockWins = "Rock wins!"
        var paperWins = "Paper wins!"
        var scissorsWins = "Scissors wins!"

        //compare choices
        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {

                $("#result").html(tie);
            }
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    $("#result").html(rockWins);
                    userPoints++;
                }
                else if (choice2 === "paper") {

                    $("#result").html(paperWins);
                    computerPoints++;
                }

            }
            else if (choice1 === "paper") {
                if (choice2 === "scissors") {

                    $("#result").html(scissorsWins);
                    computerPoints++;
                }
                else if (choice2 === "rock") {
                    $("#result").html(paperWins);
                    userPoints++;
                }
            }
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {

                    $("#result").html(scissorsWins);
                    userPoints++;
                }
                else if (choice2 === "rock") {

                    $("#result").html(rockWins);
                    computerPoints++;
                }
            }
        }

        //compare user's and computer's choice
        compare (userChoice, computerChoice);

        $("#userPoints").html(userPoints);
        $("#computerPoints").html(computerPoints);
  });
});
