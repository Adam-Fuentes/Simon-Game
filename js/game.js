
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePatter = [];
var userClickedPattern = [];
//add lvel
var level = 0;

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");  
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
  
});
// add press any key
$(document).on('keypress',function() {
    nextSequence();
});

function nextSequence() {
    //change title
    $("h1").text("Level "+level);

    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePatter.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);    

    playSound(randomChosenColour);
    // increment
    level++;

};

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);    
}