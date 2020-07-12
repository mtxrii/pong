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

    width: netWidth,
    height: netHeight,
    
    color: "#FFF"
};

function render() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

render();