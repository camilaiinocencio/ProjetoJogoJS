var directionX;
var directionY;
var positionX;
var positionY;
var velocity;
var plane;
var time;

const lplane = document.querySelector(".plane");
const star = document.querySelector(".star");
const starI = document.querySelector(".starI");
const stars = document.querySelector(".stars");
const score = document.querySelector(".score");
const background = document.querySelector(".background");
const little_screen = document.querySelector(".little_screen");
const play = document.querySelector(".play");
const ktop = document.querySelector(".top");
const kbottom = document.querySelector(".bottom");

// Função da tela inicial
function game(){
    lplane.style.display = "none";
    star.style.display = "none";
    starI.style.display = "none";
    score.style.display = "none";
    stars.style.display = "none";
    background.style.display = "none";
    ktop.style.display = "none";
    kbottom.style.display = "none";
}

// Função que inicia o jogo
function start(){
    play.style.display = "none";
    background.style.display = "";
    little_screen.style.display = "none";
    lplane.style.display = "";
    star.style.display = "";
    starI.style.display = "";
    score.style.display = "";
    stars.style.display = "";

    directionX = 0;
    directionY = 0;
    positionX = 0;
    positionY = 75;
    velocity = 10;
    plane = document.getElementById("plane");
    time = setInterval(move,20);
    document.addEventListener("keydown", keyd);
    document.addEventListener("keyup", keyu);
}

// Funções de movimentação com as teclas
function keyd (event){
    let key = event.key;

    if (key === "ArrowUp") {
        directionY = -1;
        ktop.style.display = "";
    }  
    else if (key === "ArrowDown") {
        directionY = 1;
        kbottom.style.display = "";
    }
}

function keyu (event) {
    let key = event.key;

    if (key === "ArrowUp") {
        directionY = 0;
        ktop.style.display = "none";
    } 
    else if (key === "ArrowDown") {
        directionY = 0;
        kbottom.style.display = "none";
    }
}

var points = 0;
const loop = setInterval(verify,10);

// Função de movimentação do aviãozinho
function move(){
    positionY += directionY*velocity;

    plane.style.top = positionY+"px";

    star.style.display = "";
    starI.style.display = "";
}

// Função que verifica a posição do aviãozinho
function verify(){
    const starL = star.offsetLeft;
    const starT = star.offsetTop;
    const starIL = starI.offsetLeft;
    const planeT = lplane.offsetTop;
    
    if(planeT >= -30 && planeT <= 30 && starL <= 100 && starL >= 20){
        points += 10;
        star.style.display = "none";
        score.innerHTML = points;
    }
    if(planeT >= 145 && planeT <= 185 && starIL <= 100 && starIL >= 20){
        points += 5;
        starI.style.display = "none";
        score.innerHTML = points;
    }
}

window.addEventListener("load", game);