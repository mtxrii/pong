const canvas  = document.getElementById("canvas");
const context = canvas.getContext("2d");

const netWidth  = 4;
const netHeight = canvas.height;

const paddleWidth  = 10;
const paddleHeight = 100;

let upArrowPressed   = false;
let downArrowPressed = false;

const net = {
    x: (canvas.width / 2) - (netWidth / 2),
    y: 0,

    width:  netWidth,
    height: netHeight,
    
    color: "#FFF"
};

const player = {
    x: 10,
    y: (canvas.height / 2) - (paddleHeight / 2),

    width:  paddleWidth,
    height: paddleHeight,

    color: "#FFF",
    score: 0
};

const opponent = {
    x: (canvas.width) - (paddleWidth + 10),
    y: (canvas.height / 2) - (paddleHeight / 2),

    width:  paddleWidth,
    height: paddleHeight,

    color: "#FFF",
    score: 0
};

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,

    radius: 7,
    speed:  7,

    velocityX: 5,
    velocityY: 5,

    color: "#05EDFF"
  };

function render() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawNet() {
    context.fillStyle = net.color;
    context.fillRect(net.x, net.y, net.width, net.height);
}

function drawScore(x, y, score) {
    context.fillStyle = "#FFF";
    context.font = "35px sans-serif";

    context.fillText(score, x, y);
}

function drawPaddle(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawBall(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath()

    context.arc(x, y, radius, 0, Math.PI*2, true);

    context.closePath();
    context.fill();
}




render();