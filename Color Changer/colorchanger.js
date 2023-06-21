function colorChange() {
    let btn = document.querySelector("Button");
    let bodyColor = document.body;
    const colors = ["#2387a0", "#8b6fb6", "#254038", "#ff033e", "#928b59"];
    let randomNum = Math.floor(Math.random() * colors.length);
    bodyColor.style.backgroundColor = colors[randomNum];
}

