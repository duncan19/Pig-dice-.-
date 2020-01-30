function dice() {
var diceValue = Math.floor((Math.random() * 6) +1);
return diceValue
}
var totalBank = 0
var totalBank1 = 0
var totalBank2 = 0
var turnBank = 0
var currentPlayer = 1
var currentTurnBank = turnBank + currentPlayer -1
var currentTotalBank = totalBank + currentPlayer -1
$(document).ready(function(){
  $("#roll-btn").click(function(){
    var currentDie = dice()
    if (currentDie === 1) {
      $("#diceValue").text(currentDie);
      currentTurnBank = 0
      $("#turnBank" + currentPlayer).text(currentTurnBank)
    
    
    //end turn
   if( currentPlayer === 1){
    currentPlayer = 2
    $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
   }
   else if( currentPlayer === 2){
    currentPlayer = 1
    $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
   }
    }
    else if (currentDie > 1) {
     currentTurnBank += currentDie
      $("#diceValue").text(currentDie);
    }
 
   $("#turnBank" + currentPlayer).text(currentTurnBank)
    
    });
  $("#hold-btn").click(function(){
    console.log("player" + currentPlayer + " has pressed the hold btn");
    if( currentPlayer === 1){
     totalBank1 += currentTurnBank
     }
     else if( currentPlayer === 2){
      totalBank2 += currentTurnBank
     }
    currentTurnBank = 0

    if( currentPlayer === 1){
      $("#turnBank1").text("0")
      $("#totalBank1").text(totalBank1);
      }
      else if( currentPlayer === 2){
        $("#turnBank2").text("0")
        $("#totalBank2").text(totalBank2);
      }

    
    if (totalBank1 >= 100 || totalBank2 >= 100){
      alert("player" + currentPlayer + " is the winner")
    }
    
    //end turn
    if( currentPlayer === 1){
      currentPlayer = 2
      $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
     }
     else if( currentPlayer === 2){
      currentPlayer = 1
      $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
     }
  })
  

  })