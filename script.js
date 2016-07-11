var colors = ["#red","#blue","#yellow","#green"]
$(document).ready(function(){
  console.log("hello")
  $("#button").on("click", function(evt){
    evt.preventDefault();
    console.log("button works")
    var randomDiv = colors[Math.floor(Math.random()*colors.length)];
    console.log("random working")
    });
  });

// Math.random() returns a rational number between 0 and 1 up to 8 places
