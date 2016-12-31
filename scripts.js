//global var for computer and user points

var computerPoints = 0;
var userPoints = 0;


$(document).ready(function(){


      $("#start").click(function(){



              /* User's choice - making sure it's rock/paper or scissors */
              var userChoice;
              while ((userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissors")) {
                userChoice = prompt("Do you choose rock, paper or scissors?");
              }

            //Show user's choice as picture
            if (userChoice === "rock") {
              $("#userChoice").html("<img src='img/rock.svg'>");
            }
            else if (userChoice === "paper") {
              $("#userChoice").html("<img src='img/paper.svg'>");
            }
            else if (userChoice === "scissors") {
              $("#userChoice").html("<img src='img/scissors.svg'>");
            }

            // Computer's choice
            var computerChoice = Math.random();
            if (computerChoice < 0.34) {
              computerChoice = "rock";
            } else if(computerChoice <= 0.67) {
              computerChoice = "paper";
            } else {
              computerChoice = "scissors";
            }
            //Show computer's choice as picture
            if (computerChoice === "rock") {
              $("#computerChoice").html("<img src='img/rock.svg'>");
            }
            else if (computerChoice === "paper") {
              $("#computerChoice").html("<img src='img/paper.svg'>");
            }
            else if (computerChoice === "scissors") {
              $("#computerChoice").html("<img src='img/scissors.svg'>");
            }

            //informations for player
            var tie = "The result is a tie."
            var rockWins = "Rock wins."
            var paperWins = "Paper wins."
            var scissorsWins = "Scissors wins."

            var pointsForUser = "Good! Points for you."
            var pointsForComputer = "What a pity! Points for a computer."
            var pointsForNobody = "Ooo! Nobody receives any points."

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

            //print total number of points
            $("#userPoints").html(userPoints);
            $("#computerPoints").html(computerPoints);

            //checking if the game is over
            if (userPoints===5) {
              $("#result").html("Success! You have won.");
              $("#pointsFor").html("Congratulations!");
              userPoints=0;
              computerPoints=0;
            }
            else if (computerPoints===5) {
              $("#result").html("Defeat! You have lost.");
              $("#pointsFor").html("Try again.");
              userPoints=0;
              computerPoints=0;
            }

    });
});
