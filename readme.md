SUPREME LEADER AHMED SAYS | THE GAME

Year 3016 AD. Climate change has plunged the world into a dystopian society where the incredibly handsome and buff yet ruthless leader Ahmed rules the land! If you can follow Ahmed's ridiculous demands, you can reclaim humanity's future. WILL YOU LEAD THE RESISTANCE?!

Instructions

1) Press start to initiate the game

2) Colored circles will light up in a pattern

3) Click the colored circles to match Ahmed's pattern

4) If you don't match the pattern, you lose

5) If you can match 20 patterns, you free mankind (TBD)

6) DON'T LET US DOWN!

This project makes use of HTML, CSS, and JavaScript.

For a future iteration I will be adding the following:

+ High score function
+ Timer
+ Reposition circles into a grid
+ Sound effects for sequence and player input
+ Increased speed
+ Easy, Medium, and Hard settings

User Story

As a user:
-I want to have a title displayed so I know what game I am playing.
-I want to have the instructions laid out on the same page so I know how to play.
-I want to click a start button so the sequence begins.
-I want the game to generate random sequences so I can mimick them.
-I want the sequences to increase in speed and difficulty after every input so I can be challenged.
-I want to click the circles so that it lights up.
-I want my click patterns to be recorded so that another sequence can follow.
-I want to see my score after each sequence so I know how I am doing in real time.
-I want the game to restart if I mess up a sequence so I can play again.
-I want my score to be recorded so I can compare it to previous scores.

Code Story
-The page loads
-Title, Instructions, a start button, and 4 circle Divs appear
-.on("click", function(evt){
*TBD*
} the start button is pressed, the divs will light up in a sequence.
-The game will start off with begginer level difficulty.
-After the sequence is initiated
setInterval(change color on random div, every 2 seconds){
*TBD*
}
,prompt(a message will appear saying "Your Turn")
-The player will click the divs that match the the light sequence. .on(click, match sequence)
-If the player is succesful in matching the light sequence, the game will generate another random sequence at an increased speed and complexity. for(i=0,i<10,i++)
-If the player enters an incorrect sequence, the game will end and a score will be recorded.
if (sequence === comupter sequence) {
continue sequence with higher frequency and complexity
} else {
prompt.("YOU LOSE!")
});
-The game will reload.
