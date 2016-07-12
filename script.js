$(document).ready(function(){
  console.log("hello")

  //player choices
  var colors = ["#red","#blue","#yellow","#green"]
  //simonMoves - empty array recording random sequences Simon spits out; clears out with the emptyArray function
  var simonMoves=[]
  //userMoves - records player choices
  var userMoves=[]

  //function that adds a number to the simonMoves array
  function addNumToArray() {
  //randomDivId creates a random variable
  var randomDivId = Math.floor(Math.random()*colors.length);
  //pushes the randomDivId to the simonMoves array
  simonMoves.push(colors[randomDivId])
  //once the simonMoves array has 1 item, the start button is no longer functional
  if (simonMoves.length == 1){
    turnOffStart();
  }
  //calls the simonSays function which animates a number being added to the array; the flash to indicate a move has been made
  simonSays();
  }

  console.log(simonMoves)
  //function that adds a random value for the simonMoves array and animates these changes
  function simonSays() {
    // console.log("Length of loop : "+simonMoves.length);
    for (i=0;i<simonMoves.length;i++){
      $(simonMoves[i]).fadeOut("slow").fadeIn("slow");
      console.log('I work!')
    }
  }

//start button; when clicked, starts a function that addNumToArray
  $("#button").on("click", function(evt){
    evt.preventDefault();
    addNumToArray();
  });
//turns off the start button so it only needs to be started once
  function turnOffStart(){
    $("#button").off("click");
  }

//player choice buttons - function pushes click data to userMoves array
  $("#red").on("click", function() {
    console.log("Red works")
    userMoves.push(colors[0])
    console.log("Simon Array : "+simonMoves)
    console.log("User Array : " +userMoves)
//animates the button the player clicks on
    $(this).fadeOut("slow").fadeIn("slow");
//calls the checkWinner function which evaluates whether or not the player action matches the simon action
    checkWinner(userMoves, simonMoves)
  })
  $("#blue").on("click", function() {
    userMoves.push(colors[1])
    console.log("Simon Array : "+simonMoves)
    console.log("User Array : " +userMoves)
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  })
  $("#yellow").on("click", function() {
    userMoves.push(colors[2])
    console.log("Simon Array : "+simonMoves)
    console.log("User Array : " +userMoves)
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  })
  $("#green").on("click", function() {
    userMoves.push(colors[3])
    console.log("Simon Array : "+simonMoves)
    console.log("User Array : " +userMoves)
    $(this).fadeOut("slow").fadeIn("slow");
    checkWinner(userMoves, simonMoves)
  })

  //evaluates whether or not the player action matches the simon action
  function checkWinner(userMoves, simonMoves){
//calls the isEqual function which compares two arrays
    if (isEqual(userMoves, simonMoves)) {
//compares the length of both arrays
      if (userMoves.length === simonMoves.length) {
//calls the emptyArray function which resets the userMoves array
        emptyArray()
//function that adds a number to the simonMoves array
        addNumToArray();
      }
    } else {
      alert("LOSER!")
    }
  }

  //function which allows us to compare two arrays
  function isEqual(array1, array2){

    var ret = true;
    for(var i = 0; i < array1.length; i++){
      console.log(array1[i], array2[i]);
      if(array1[i] != array2[i]) {
        ret = false;
      }
    }
    return ret;
  }
  //resets the userMoves array
  function emptyArray(array1) {
    userMoves = [];
  }
});
