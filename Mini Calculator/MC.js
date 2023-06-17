
function Calculateadd() {
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
result.value = parseInt(num1) + parseInt(num2);

}

function Calculatesub() {
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
    result.value = parseInt(num1) - parseInt(num2);
}

function Calculatemulti() {
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
    result.value = parseInt(num1) * parseInt(num2);
}

function Calculatediv(){
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
    result.value = parseInt(num1) / parseInt(num2);
}

function Calculaterem() {
    var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
var result = document.getElementById("result");
    result.value = parseInt(num1) % parseInt(num2);
}