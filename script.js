$(document).ready(function(){
  console.log("hello")
  //variable that generates random sequence
  //divs that will be clicked by the player to respond
  var colors = ["#red","#blue","#yellow","#green"]
  //the randomly generated divs, recorded and pushed to this blank array
  var simonMoves=[]
  //the pattern the user creates, recorded and pushed to this blank array
  var userMoves=[]
  //the turn the player is on
  // var turns = 1
  // //players clicks to respond to simonMoves
  // var clicks = 0
  //gets the doc ready for jquery
  function addNumToArray() {
  var randomDivId = Math.floor(Math.random()*colors.length);
  //pushes the randomly generated sequence into the simonMoves array
  simonMoves.push(colors[randomDivId])
  if (simonMoves.length == 1){
    turnOffStart();
  }
  simonSays();
  }

  //console.log(colors[randomDivId])
  console.log(simonMoves)

  //function that loops sequences
  function simonSays() {
    console.log("Length of loop : "+simonMoves.length);
    for (i=0;i<simonMoves.length;i++){
      $(simonMoves[i]).fadeOut("slow").fadeIn("slow");
      console.log('I work!')
    }
  }

  $("#button").on("click", function(evt){
    evt.preventDefault();
    //simonSays()
    addNumToArray();

  });
  function turnOffStart(){
    $("#button").off("click");
  }


  // $(".action").click(function() {
  //   userMoves.push(color)
  $("#red").on("click", function() {
    console.log("Red works")
    userMoves.push(colors[0])
    console.log("Simon Array : "+simonMoves)
    console.log("User Array : " +userMoves)
    $(this).fadeOut("slow").fadeIn("slow");
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

  function checkWinner(userMoves, simonMoves){
    //
    if (isEqual(userMoves, simonMoves)) {
      if (userMoves.length === simonMoves.length) {
      emptyArray()
      addNumToArray();
      }
    } else {
      alert("LOSER!")
    }
  }
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
  function emptyArray(array1) {
  // if(isEqual == true) return simonMoves=[];
  userMoves = [];
}
});



//check if simonMoves and Usermoves are equal
//if yes then call simonSays
//if turns == clicks, then a for loop will run, adding an extra "color" to the sequence



























// if(userMoves[i] === simonMoves[i]){
//   console.log(colors[i])
//   alert("good job!")
// } else {
//   alert("LOSER!")
// }
// console.log("working color button")

//     // // $("#blue").on("click", function(){
//       console.log("working blue button")
//     // // })
//     // // $("#green").on("click", function(){
//       console.log("working green button")
//     // // })
//     // // $("#yellow").on("click", function(){
//       console.log("working yellow button")
//
// // var playerInput =
// // if(playerInput === simonSays) {
//   prompt("Good job!")
// }





// //   for(i=0; i >= randomDivId; i++ )
// // //   $(randomDivId).fadeOut("slow");
// // //   setInterval(evt, 3000)
// // //   $(randomDivId).fadeIn("slow");
// // //   clearInterval(evt, 9000)
//   console.log("interval works");
// // //
//   console.log("fade works")
//   console.log("button works")
// //   // Math.random() returns a rational number between 0 and 1 up to 8 places
// //
// //
//

//
// $("#blue").fadeOut("slow");
// $("#blue").fadeIn("slow");
//
// $("#green").fadeOut(3000);
// $("#green").fadeIn("slow");
//
// $("#yellow").fadeOut(3000);
// $("#yellow").fadeIn("slow");
