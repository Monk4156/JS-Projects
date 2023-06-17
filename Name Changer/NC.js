
function ChangeName() {
var changeName = document.getElementById("inputtext");
if (changeName.value != ""){  
changeName.value = changeName.value + " is Stupid!";
} else {
    alert("Enter your name first!");
}
}