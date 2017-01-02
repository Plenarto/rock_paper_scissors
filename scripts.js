
$(document).ready(function(){

  //global var for computer and user points

  var computerPoints = 0;
  var userPoints = 0;
  var pointsToWin = 3;


  $(".options img").click(function(){
        $('.options img.selected').not(this).removeClass('selected');
        $(this).toggleClass('selected');
  });

      $("#start").click(function(){

            //zeroes points if the previous game is over
            if ((userPoints === pointsToWin) || (computerPoints === pointsToWin)) {
              userPoints = 0;
              computerPoints = 0;
            }

            /* User's choice*/
            var userChoice;

            if ($("#rock").hasClass("selected")) {
              userChoice = "rock";
              //Show user's choice as picture
              $("#userChoice").html("<img src='img/rock.svg'>");
            }
            else if ($("#paper").hasClass("selected")) {
              userChoice = "paper";
              //Show user's choice as picture
              $("#userChoice").html("<img src='img/paper.svg'>");
            }
            else if ($("#scissors").hasClass("selected")) {
              userChoice = "scissors";
              //Show user's choice as picture
              $("#userChoice").html("<img src='img/scissors.svg'>");
            }

            // Computer's choice (only if userChoice isn't null - enables canceling prompt)
            var computerChoice = Math.random();
            if ((computerChoice < 0.34) && (userChoice !== null) && (userChoice !== "")) {
              computerChoice = "rock";
            } else if ((computerChoice <= 0.67)&&(userChoice !== null) && (userChoice !== "")) {
              computerChoice = "paper";
            } else if ((computerChoice > 0.67) && (userChoice !== null) && (userChoice !== "")) {
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
            var tie = "The result is a tie.";
            var rockWins = "Rock wins.";
            var paperWins = "Paper wins.";
            var scissorsWins = "Scissors wins.";

            var pointsForUser = "Good! Points for you.";
            var pointsForComputer = "What a pity! Points for a computer.";
            var pointsForNobody = "Ooo! Nobody receives any points.";

            var youWonOne = "<img class='resultIcon' src='img/won1.svg'> Victory! <img class='resultIcon' src='img/won2.svg'>";
            var youWonTwo = "You've won. Congratulations!";
            var youLostOne = "<img class='resultIcon' src='img/lost1.svg'> Defeat! <img class='resultIcon' src='img/lost2.svg'>";
            var youLostTwo = "You've lost. Try again.";

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
            if (userPoints===pointsToWin) {
              $("#result").html(youWonOne);
              $("#pointsFor").html(youWonTwo);
              $("#start").css("display","none");
              $("#tryAgain").css("display","block");
            }
            else if (computerPoints===pointsToWin) {
              $("#result").html(youLostOne);
              $("#pointsFor").html(youLostTwo);
              $("#start").css("display","none");
              $("#tryAgain").css("display","block");
            }
    });

          //reloads page when player uses "tryAgain" button
          $("#tryAgain").click(function(){
            location.reload();
          });

});
