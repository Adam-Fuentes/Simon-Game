
var gamePatter = [];

var buttonColours = ["red", "blue", "green", "yellow"];

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