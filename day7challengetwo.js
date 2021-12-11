
var container = document.getElementById("container");
var person = document.getElementById("person");

var layerOne = document.getElementById("image");

var layerTwo = document.getElementById("mountainThree");
var layerThree = document.getElementById("mountainTwo");
var layerFour = document.getElementById("mountainOne");




var mouseX=0;
var mouseY=0;

var centerScreen = (5472/2) - (5000/2);

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
person.style.left = -mouseX * 0.08 + centerScreen + "px";
layerOne.style.left = -mouseX * 0.07 + centerScreen + "px";
layerTwo.style.left = -mouseX * 0.05 + (centerScreen+3000/2) + "px";
layerThree.style.left = -mouseX * 0.08 + centerScreen + "px";
layerFour.style.left = -mouseX * 0.09 + centerScreen + "px";


}