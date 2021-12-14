"use strict";
console.log("hello");
setTimeout(() => {
    for (let i = 0, top = 150; i < 3; i++) {
        let newCircle = document.createElement("div");
        newCircle.setAttribute("class", "circle2Style");
        newCircle.style.top = top + "px";
        document.body.appendChild(newCircle);
        newCircle.addEventListener("mouseover", changeCirclePosition.bind(null, newCircle));
        top += 150;
    }
}, 2000);
// function randomColourGenerator(): string{
//     let colour = "#";
//     let colourNumber = Math.ceil(Math.random() * 999999);
//     return colour + colourNumber;
// }
function randomColourGenerator() {
    let symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.ceil(Math.random() * 16)];
    }
    return color;
}
function changeCirclePosition(circle) {
    let xCoordinate = Math.random() * (window.innerWidth - 200);
    let yCoordinate = Math.random() * (window.innerHeight - 200);
    circle.style.background = randomColourGenerator();
    circle.style.left = xCoordinate + "px";
    circle.style.top = yCoordinate + "px";
}
let circle1 = document.getElementById("circle1");
if (circle1) {
    circle1.addEventListener("mouseover", changeCirclePosition.bind(null, circle1));
}
