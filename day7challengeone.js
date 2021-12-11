
var container = document.getElementById("container");
var layerZero = document.getElementById("layerZero");

var layerOne = document.getElementById("layerOne");

var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");



var mouseX=0;
var mouseY=0;

var centerScreen = (2500/2) - (3000/2);

window.addEventListener("mousemove",onMouseMove);



function onMouseMove (event) {
console.log(event.pageX);

mouseX=event.pageX-container.offsetLeft;
mouseY=event.pageY;

//onion.style.left=event.pageX -container.offsetLeft+"px";
//onion.style.top=event.pageY+"px";

// onion.style.left=mouseX -25 +"px";
// onion.style.top=mouseY -25 +"px";

// layerOne.style.left = -mouseX *0.08 +(1200/2 - 1200/2) +"px";
// layerOneB.style.left = -mouseX *0.08 +"px";
layerZero.style.left = -mouseX * 0.08 + centerScreen + "px";
layerOne.style.left = -mouseX * 0.07 + centerScreen + "px";
layerTwo.style.left = -mouseX * 0.05 + centerScreen + "px";
layerThree.style.left = -mouseX * 0.02 + centerScreen + "px";
layerFour.style.left = -mouseX * 0.01 + centerScreen + "px";
layerFive.style.left = -mouseX * 0.01 + centerScreen + "px";
layerSix.style.left = -mouseX * 0.01 + centerScreen + "px";

}