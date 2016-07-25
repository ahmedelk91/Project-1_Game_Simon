/// My comments will begin with 3 slashes

///Overall comments: Overall, the progress you've made and your tenacity are impressive. The code you've written is relatively clean and demonstrates concerted effort in thinking about and applying concepts taught in the first unit of the course.

/* Suggestions for improvement or advancement:
 1. encapsulate game in an object
 2. change timeout length (in lightUp) to a variable. You can change the value of the variable based on difficulty selected by the player
 3. use setInterval for a game timer
 4. for a high score list, check out this article: http://html5doctor.com/storing-data-the-simple-html5-way-and-a-few-tricks-you-might-not-have-known/

 Minor thing:
 1. Remove console.logs and unused/commented out code, if you are deploying an app
*/

$(document).ready(function(){
  //player choices

  /// Might rename this colorIds, because of the #s
  var colors = ["#red","#blue","#yellow","#green"]
  //simonMoves - empty array recording random sequences Simon spits out; clears out with the emptyArray function
  var simonMoves=[]
  //userMoves - records player choices
  var userMoves=[]


  /// is this adding a random number to simonMoves, or is this actually generating a simonMove?

  //function that adds a number to the simonMoves array
  function addNumToArray() {
    console.log("addNumToArray working");
    //randomDivId creates a random variable
    var randomDivId = Math.floor( Math.random() * colors.length );
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
  function simonSays(delay) {
    // console.log("Length of loop : "+simonMoves.length);
    for (i=0;i<simonMoves.length;i++){
      lightUp( $(simonMoves[i]), i  )
      /// I think the line isn't effectively doing anything-- you're already using setTimeout in your lightUp function
      setTimeout(20 + delay*2000);
      console.log("whats up")
      // $(simonMoves[i]).fadeOut("slow").fadeIn("slow");

      console.log('I work!')
    }
  }
  //
  // function setInterval(thingToAnimate) {
    // for (i=0;i<simonMoves.length;i++)

  function lightUp(thingToAnimate, delay) {
        setTimeout(function() {
          console.log("flash");
          console.log(simonMoves[i]);
          thingToAnimate.fadeOut().fadeIn();
          // find out a way to test whether a color has been passed through the function
        }, 1500 + (delay*2000));
        console.log('aaa');
      }
      //setting variable timeouts with loops
    // function flashBetween(thingToAnimate){
    //   setInterval(thingToAnimate);
    // };



    //start button; when clicked, starts a function that addNumToArray
    $("#button").on("click", function(evt){
      evt.preventDefault();
      addNumToArray();
    });

    //turns off the start button so it only needs to be started once
    function turnOffStart(){
      $("#button").off("click");
    };

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

    ///This section could be dried up by replacing 103-124:
    /*
    $(".action").click(function(){
      $(this).fadeOut("slow").fadeIn("slow");
      userMoves.push( $(this).attr("id") );
      checkWinner(userMoves, simonMoves);
    })
    */
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
      /// You can also pass in an integer to fadeIn and fadeOut
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
          emptyArray();
          console.log("Emptied");
          //function that adds a number to the simonMoves array
          addNumToArray();
        }
      } else {
        alert("THANKS A LOT, LOSER! HUMANITY IS DOOMED!")
      }
    }


    /// I like the approach of defining a function to compare arrays

    //function which allows us to compare two arrays
    function isEqual(array1, array2){
      /// ret could be named areEqual, to be more meaningful; but strictly speaking you don't need this variable-- see comments below
      var ret = true;
      for(var i = 0; i < array1.length; i++){
        console.log(array1[i], array2[i]);
        if(array1[i] != array2[i]) {
          /// You can just return false; here -- this will interrupt the loop and the function and return false
          ret = false;
        }
      }
      /// you could just return true here-- if the for loop hasn't returned false, then the line below will execute
      return ret;
    }

    /// I'd rename this resetUserMoves, but since it's only a one line function, maybe it doesn't make sense to have a separate function for setting userMoves to []. on
    //resets the userMoves array
    function emptyArray(array1) {
      userMoves = [];
    };
  })
