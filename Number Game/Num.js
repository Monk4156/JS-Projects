var points = 0;

function Guess()  {
var number = Math.floor(Math.random() * 11);

var guess = document.getElementById("currentguess").value;

if (guess != ""){
    document.getElementById("guess").innerHTML = "Your guess was: " + guess;
    document.getElementById("currentnum").innerHTML = `Number was: ${number}`; 
} else {
    document.getElementById("guess").innerHTML = "Enter a number first!";
    }
    
if (guess == number && guess != "") {
    points ++;
    document.getElementById("score").innerHTML = "Score: " + points; 
} 
}












