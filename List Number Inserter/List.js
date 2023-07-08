var counter = 0;

 function Add() {
    var ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.append(li);
    let listyle = li.style; 
    listyle.fontWeight = "bold";
    listyle.fontSize = "1.5em";
    listyle.textAlign = "left";
    listyle.padding = '0.5em';
    listyle.color = 'white';
    li.innerText = counter;
    counter ++;
 }

