
var gamePatter = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
  });

function nextSequence() {

    //generamos aleatorio y lo ponemos el la ultima posicion del array
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePatter.push(randomChosenColour);

    //selecionamos el mismo id de html que del color random y le damos una animacion
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //le ponemos sonido al color seleccionado
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

};