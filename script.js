$(document).ready(function(){


  // *******************************************************************************************
  // VARIABLES
  // *******************************************************************************************


  // colored buttons / game choices
  var colors = ["#red", "#blue", "#yellow", "#green"]
  // simonMoves - empty array recording random sequences Simon spits out; clears out with the emptyArray function
  var simonMoves=[]
  // userMoves - records player choices
  var userMoves=[]
  // records score
  var gameScore = 0
  // player options
  var playerChoices = ["#red", "#blue", "#yellow", "#green"]
  // Sound Effects
  var sounds = {
    red: new Audio("sounds/button-1.wav"),
    blue: new Audio("sounds/button-3.wav"),
    yellow: new Audio("sounds/button-4.wav"),
    green: new Audio("sounds/button-09.wav")
  }

  // *******************************************************************************************
  // VARIABLES
  // *******************************************************************************************



  // **************************************************************************************************************************************************************



  // ************************************************************************************************************
  // THIS FUNCTION ADDS A RANDOM COLOR TO THE simonMoves ARRAY AND TURNS OFF START BUTTON AFTER FIRST MOVE
  // ************************************************************************************************************

  //function that adds a number to the simonMoves array
  function addNumToArray() {
    //randomDivId creates a random variable
    var randomDivId = Math.floor( Math.random() * colors.length );

    //pushes the randomDivId to the simonMoves array
    simonMoves.push(colors[randomDivId])

    //once the simonMoves array has 1 item, the start button is no longer functional
    if (simonMoves.length == 1){
      turnOffStart();
    };
    simonSays();
  };
  //calls the simonSays function which animates a number being added to the array; the flash to indicate a move has been made

  // **********************************************************************************************************
  // THIS FUNCTION ADDS A RANDOM COLOR TO THE simonMoves ARRAY AND TURNS OFF START BUTTON AFTER FIRST MOVE
  // **********************************************************************************************************



  // *****************************************************************************************************************************************************************



  //**********************************************************************************************
  // ANIMATION & SPEED FUNCTION
  //**********************************************************************************************
1

  //Speed function that adds a random value for the simonMoves array and animates these changes
  function simonSays(delay) {
    for (i=0;i<simonMoves.length;i++){
      lightUp( $(simonMoves[i]), i )
      setTimeout(20 + delay*2000);
    };
  };

  // lightUp Animation for button sequence
  function lightUp(thingToAnimate, delay) {
    setTimeout(function() {
      thingToAnimate.fadeOut().fadeIn();
    }, 1500 + (delay*1000));
  };


  //**********************************************************************************************
  // ANIMATION & SPEED FUNCTION
  //**********************************************************************************************



  // *****************************************************************************************************************************************************************



  //**********************************************************************************************
  // BUTTON THAT STARTS GAME
  //**********************************************************************************************

  //start button; when clicked, starts a function that addNumToArray
  $("#button").on("click", function(evt){
    evt.preventDefault();
    addNumToArray();
  });

  //turns off the start button so it only needs to be started once
  function turnOffStart(){
    $("#button").off("click");
  };

  //**********************************************************************************************
  // BUTTON THAT STARTS GAME
  //**********************************************************************************************


  // *****************************************************************************************************************************************************************


  //**********************************************************************************************
  // FUNCTION THAT ADDS playerChoices TO userMoves array
  //**********************************************************************************************


  userMoves.prototype = {
    addPlayerChoices: function(playerChoices){
      this.playerChoices = addPlayerChoices;
    },
  };

  function userMoves(playerChoices){
    this.playerChoices= ""
    this.addPlayerChoices=(playerChoices)
  };


  //**************************************************************************************************************
  // BUTTON THAT STARTS GAME
  //**************************************************************************************************************


  // *****************************************************************************************************************************************************************




  // **************************************************************************************************************
  // Player choice buttons - function pushes click data to userMoves array
  // **************************************************************************************************************

  $("#red").on("click", function() {
    userMoves.push(colors[0])
    //animates the button the player clicks on
    $(this).fadeOut("slow").fadeIn("slow");
    //calls the checkWinner function which evaluates whether or not the player action matches the simon action
    checkWinner(userMoves, simonMoves)
  });

  $("#blue").on("click", function() {
    userMoves.push(colors[1])
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  });

  $("#yellow").on("click", function() {
    userMoves.push(colors[2])
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  });

  $("#green").on("click", function() {
    userMoves.push(colors[3])
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  });

  // **************************************************************************************************************
  // Player choice buttons - function pushes click data to userMoves array
  // **************************************************************************************************************



  // *****************************************************************************************************************************************************************



  // **************************************************************************************************************
  // THIS FUNCTION EVALUATES WHETHER OR NOT THE userMoves array MATCHES THE simonMoves array
  // **************************************************************************************************************


  //evaluates whether or not the player action matches the simon action
  function checkWinner(userMoves, simonMoves){
    //calls the isEqual function which compares two arrays
    if (isEqual(userMoves, simonMoves)) {
      //compares the length of both arrays
      if (userMoves.length === simonMoves.length) {
        //calls the emptyArray function which resets the userMoves array and adds a point to gameScore
        gameScore = gameScore + 1;
        emptyArray();
        //function that adds a number to the simonMoves array
        addNumToArray();
      };
    } else {
      alert("YOU LOSE!")
    };
  };

  //function which allows us to compare two arrays
  function isEqual(array1, array2){

    var ret = true;
    for(var i = 0; i < array1.length; i++){
      if(array1[i] != array2[i]) {
        ret = false;
      };
    };
    return ret;
  };

  //resets the userMoves array
  function emptyArray(array1) {
    userMoves = [];
    $("#scoreBox").text(gameScore)
  };

});


// **************************************************************************************************************
// THIS FUNCTION EVALUATES WHETHER OR NOT THE userMoves array MATCHES THE simonMoves array
// **************************************************************************************************************


// *****************************************************************************************************************************************************************
