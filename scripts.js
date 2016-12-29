var computerPoints = 0;
var userPoints = 0;

$(document).ready(function(){

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

        //informations for player
        var tie = "The result is a tie"
        var rockWins = "Rock wins"
        var paperWins = "Paper wins"
        var scissorsWins = "Scissors wins"

        var pointsForUser = "Good! Points for you."
        var pointsForComputer = "What a pity! Points for a computer."
        var pointsForNobody = "Ha! Nobody receives any points."

        //compare choices
        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {

                $("#result").html(tie);
                $("#pointsFor").html(pointsForNobody);
            }
            else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    $("#result").html(rockWins);
                    $("#pointsFor").html(pointsForUser);
                    userPoints++;
                }
                else if (choice2 === "paper") {

                    $("#result").html(paperWins);
                    $("#pointsFor").html(pointsForComputer);
                    computerPoints++;
                }

            }
            else if (choice1 === "paper") {
                if (choice2 === "scissors") {

                    $("#result").html(scissorsWins);
                    $("#pointsFor").html(pointsForComputer);
                    computerPoints++;
                }
                else if (choice2 === "rock") {
                    $("#result").html(paperWins);
                    $("#pointsFor").html(pointsForUser);
                    userPoints++;
                }
            }
            else if (choice1 === "scissors") {
                if (choice2 === "paper") {

                    $("#result").html(scissorsWins);
                    $("#pointsFor").html(pointsForUser);
                    userPoints++;
                }
                else if (choice2 === "rock") {

                    $("#result").html(rockWins);
                    $("#pointsFor").html(pointsForComputer);
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
