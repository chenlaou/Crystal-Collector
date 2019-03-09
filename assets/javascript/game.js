// Jquery Game with 4 crystals, each have a randomNumber
// A new random number should regenerate after each win or loss
// When a crystal is clicked it should add to to final total
// Game will track number of wins and losses
// After each game we need a reset with a new random number to appear.
// Once player wins or losers we Alert 

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
 
    console.log("yellow" + " = " +  num1)
    console.log("red" + " = " +  num2)
    console.log("blue" + " = " +  num3)
    console.log("green" + " = " +  num4)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        console.log(userTotal)
        $('#finalTotal').text(userTotal);
        } 
     

  function win(){
  alert("Congrats! You Win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function lose(){
  alert ("Loser! Need a calculator?");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 


          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }   


    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  
 
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          } 
    })  

    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            lose();
          }
    });   
  }); 
