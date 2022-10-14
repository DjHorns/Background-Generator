var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".btn");

function getRandomInt () {
    return Math.floor(Math.random() * 256);
}

function setGradient () {
    body.style.background = "Linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

    css.textContent = body.style.background + ";";
}
setGradient();


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

