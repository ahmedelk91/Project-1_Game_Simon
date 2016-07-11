var colors = ["#red","#blue","#yellow","#green"]
var simonMoves=[]

$(document).ready(function(){

  console.log("hello")

  var randomDivId = Math.floor(Math.random()*colors.length);
  simonMoves.push(randomDivId)
  simonSays = function() {
    for (i=0;i<simonMoves.length;i++){
      $(colors[simonMoves[i]]).fadeOut("slow").fadeIn("slow");
      console.log('I work!')
    }
  }
  $("#button").on("click", function(evt){
    evt.preventDefault();
    simonSays();
  });

})
//   for(i=0; i >= randomDivId; i++ )
//   console.log(randomDivId, "?");
//   $(randomDivId).fadeOut("slow");
//   setInterval(evt, 3000)
//   $(randomDivId).fadeIn("slow");
//   clearInterval(evt, 9000)
//   console.log("interval works");
//
//   console.log("fade works")
//   console.log("button works")
//   console.log(randomDivId, "!")
//   // Math.random() returns a rational number between 0 and 1 up to 8 places
//     });
// });


//
// $("#blue").fadeOut("slow");
// $("#blue").fadeIn("slow");
//
// $("#green").fadeOut(3000);
// $("#green").fadeIn("slow");
//
// $("#yellow").fadeOut(3000);
// $("#yellow").fadeIn("slow");
