var directionX;
var directionY;
var positionX;
var positionY;
var velocity;
var plane;
var time;

function start(){
    directionX = 0;
    directionY = 0;
    positionX = 0;
    positionY = 50;
    velocity = 10;
    plane = document.getElementById("plane");
    time = setInterval(enter,20);
    document.addEventListener("keydown", keyd);
    document.addEventListener("keyup", keyu);
}

function keyd (event){
    let key = event.key;

    if (key === "ArrowLeft") {
        directionX = -1;
    } 
    else if (key === "ArrowUp") {
        directionY = -1;
    } 
    else if (key === "ArrowRight") {
        directionX = 1;
    } 
    else if (key === "ArrowDown") {
        directionY = 1;
    }
}

function keyu (event) {
    let key = event.key;

    if (key === "ArrowLeft") {
        directionX = 0;
    } 
    else if (key === "ArrowUp") {
        directionY = 0;
    } 
    else if (key === "ArrowRight") {
        directionX = 0;
    } 
    else if (key === "ArrowDown") {
        directionY = 0;
    }
}

function enter(){
    positionX += directionX*velocity;
    positionY += directionY*velocity;

    plane.style.left = positionX+"px";
    plane.style.top = positionY+"px";
}

var points = 0;
var pointl = 0;
const loop = setInterval(verify,100);
const lplane = document.querySelector(".plane");
const star = document.querySelector(".star");
const starI = document.querySelector(".starI");

function verify(){
    const starL = star.offsetLeft;
    const starT = star.offsetTop;
    const starIL = starI.offsetLeft;
    const starIT = starI.offsetTop;
    const planeL = lplane.offsetLeft;
    const planeT = lplane.offsetTop;
    var difL = starL - planeL;
    var difT = starT - planeT;
    var IdifL = starIL - planeL;
    var IdifT = starIT - planeT;
    
    if(difL <= 130 && difL >= 115 && difT <= 75 && difT >= 20){
        starpoint();
    }
    if(IdifL <= 130 && IdifL >= 115 && IdifT <= 75 && IdifT >= 20){
        littlestarpoint();
        console.log(pointl);
    }
}

function starpoint(){
    points += 10; 
}

function littlestarpoint(){
    pointl += 5;
}

window.addEventListener("load", start);