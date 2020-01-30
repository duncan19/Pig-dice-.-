function dice() {
var diceValue = Math.floor((Math.random() * 6) +1);
return diceValue
}
function ai() {
  console.log("ai is doing its turn");
  
  //roll twice then pass 
  //roll twice
  for(i=0; i<2; ++i) {
    console.log("in the for lop");
    
    var currentDie = dice()
    console.log(currentDie)
    if (currentDie === 1) {
      $("#diceValue").text(currentDie);
      currentTurnBank = 0
      $("#turnBank" + currentPlayer).text(currentTurnBank)
  
      if( currentPlayer === 4) {
    currentPlayer = 3
    $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
    break
  }
    }else if (currentDie > 1) {
    currentTurnBank += currentDie
      $("#diceValue").text(currentDie);
    }

  $("#turnBank2").text(currentTurnBank)

  }
if(currentPlayer === 4){
  totalBank1 += currentTurnBank
  currentTurnBank = 0
  if( currentPlayer === 4){
    currentPlayer = 3
    $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
   }
   $("#turnBank2").text("0")
   $("#totalBank2").text(totalBank1);
  if (totalBank1 >= 100 || totalBank2 >= 100){
    alert("player" + currentPlayer + " is the winner")
  }
}

}
var totalBank = 0
var totalBank1 = 0
var totalBank2 = 0
var turnBank = 0
var currentPlayer = 1
var currentTurnBank = turnBank
var currentTotalBank = totalBank
$(document).ready(function(){
  $("#ai-btn").click(function(){
    currentPlayer = 3
  })



  $("#roll-btn").click(function(){
    var currentDie = dice()
    var currentPlayerTest = currentPlayer
    if(currentPlayer === 3 ){currentPlayerTest = 1}
    if (currentDie === 1) {
      $("#diceValue").text(currentDie);
      currentTurnBank = 0
      $("#turnBank" + currentPlayerTest).text(currentTurnBank)
    
    
    //end turn
   if( currentPlayer === 1) {
    currentPlayer = 2
    $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
   }
   else if( currentPlayer === 2) {
    currentPlayer = 1
    $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
   }
   else if( currentPlayer === 3) {
    currentPlayer = 4
    ai();
    $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
   }
    }
    else if (currentDie > 1) {
     currentTurnBank += currentDie
      $("#diceValue").text(currentDie);
    }
 
   $("#turnBank" + currentPlayerTest).text(currentTurnBank)
    
    });
  $("#hold-btn").click(function(){
    console.log("player" + currentPlayer + " has pressed the hold btn");
    if( currentPlayer === 1){
     totalBank1 += currentTurnBank
     }
     else if( currentPlayer === 2){
      totalBank2 += currentTurnBank
     }
     else if( currentPlayer === 3){
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
      else if( currentPlayer === 3){
        $("#turnBank1").text("0")
        $("#totalBank1").text(totalBank2);
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
     else if( currentPlayer === 3){
      currentPlayer = 4
      ai()
      $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
     }
  })
  

  })