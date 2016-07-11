var colors = ["#red","#blue","#yellow","#green"]
$(document).ready(function(){
  console.log("hello")
  var randomDivId = colors[Math.floor(Math.random()*colors.length)];
  $("#button").on("click", function(evt){
    evt.preventDefault();
    console.log(randomDivId, "?");
    $(randomDivId).fadeOut("slow");
    $(randomDivId).fadeIn("slow");
    setInterval(evt, 3000)
    clearInterval(evt, 9000)
    console.log("interval works");

    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }


    console.log("fade works")
    console.log("button works")
    console.log(randomDivId, "!")
    // Math.random() returns a rational number between 0 and 1 up to 8 places
      });
  });


  //
  // $("#blue").fadeOut("slow");
  // $("#blue").fadeIn("slow");
  //
  // $("#green").fadeOut(3000);
  // $("#green").fadeIn("slow");
  //
  // $("#yellow").fadeOut(3000);
  // $("#yellow").fadeIn("slow");
