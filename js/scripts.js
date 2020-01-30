function dice() {
  var diceValue = Math.floor((Math.random() * 6) +1);
  return diceValue;
}

function ai() {
  for(i=0; i<2; ++i) {
    var currentDie = dice();
    if(currentDie === 1) {
      $("#diceValue").text(currentDie);
      turnBank = 0;
      $("#turnBank" + currentPlayer).text(turnBank);
      if(currentPlayer === 4) {
      currentPlayer = 3;
      $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
      break;
      }
    } else if(currentDie > 1) {
      turnBank += currentDie;
      $("#diceValue").text(currentDie);
    } $("#turnBank2").text(turnBank);
  }
  if(currentPlayer === 4) {
    totalBank1 += turnBank;
    turnBank = 0;
    if(currentPlayer === 4) {
      currentPlayer = 3;
      $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
    } 
    $("#turnBank2").text("0");
    $("#totalBank2").text(totalBank1);
    if(totalBank1 >= 100 || totalBank2 >= 100) {
      alert("player 2 is the winner");
    }
  }
}

var totalBank = 0;
var totalBank1 = 0;
var totalBank2 = 0;
var turnBank = 0;
var currentPlayer = 1;
var currentTotalBank = totalBank;

$(document).ready(function(){
  $("#ai-btn").click(function(){
    currentPlayer = 3;
  });
  $("#roll-btn").click(function(){
    var currentDie = dice();
    var currentPlayerTest = currentPlayer;
    if(currentPlayer === 3) {
      currentPlayerTest = 1;
    } 
    if(currentDie === 1) {
      $("#diceValue").text(currentDie);
      turnBank = 0;
      $("#turnBank" + currentPlayerTest).text(turnBank);
      if(currentPlayer === 1) {
        currentPlayer = 2;
        $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
      } else if(currentPlayer === 2) {
        currentPlayer = 1;
        $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
      } else if(currentPlayer === 3) {
        currentPlayer = 4;
        ai();
        $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
      }
    }
    else if(currentDie > 1) {
      turnBank += currentDie;
      $("#diceValue").text(currentDie);
    }
    $("#turnBank" + currentPlayerTest).text(turnBank);
  });
  $("#hold-btn").click(function() {
    if(currentPlayer === 1) {
     totalBank1 += turnBank;
    } else if(currentPlayer === 2) {
      totalBank2 += turnBank;
    } else if(currentPlayer === 3) {
      totalBank2 += turnBank;
    }
    turnBank = 0;
    if(currentPlayer === 1) {
      $("#turnBank1").text("0");
      $("#totalBank1").text(totalBank1);
    }  else if(currentPlayer === 2) {
      $("#turnBank2").text("0");
      $("#totalBank2").text(totalBank2);
    } else if(currentPlayer === 3) {
      $("#turnBank1").text("0");
      $("#totalBank1").text(totalBank2);
    }
    if (totalBank1 >= 100 || totalBank2 >= 100) {
      alert("player " + currentPlayer+ " is the winner");
    } if(currentPlayer === 1) {
      currentPlayer = 2;
      $("#roll-btn, #hold-btn").removeClass("playerOne").addClass("playerTwo");
    } else if(currentPlayer === 2) {
      currentPlayer = 1;
      $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
    } else if(currentPlayer === 3) {
      currentPlayer = 4;
      ai();
      $("#roll-btn, #hold-btn").removeClass("playerTwo").addClass("playerOne");
    }
  });
 });