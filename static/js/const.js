const canvas  = document.getElementById("canvas");
const context = canvas.getContext("2d");

const netWidth  = 4;
const netHeight = canvas.height;

const paddleWidth  = 10;
const paddleHeight = 100;

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