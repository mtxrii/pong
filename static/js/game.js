let upArrowPressed   = false;
let downArrowPressed = false;


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


function render() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawNet();

    drawScore(  canvas.width/4, canvas.height/6, player.score);
    drawScore(3*canvas.width/4, canvas.height/6, opponent.score);

    drawPaddle(player.x,   player.y,   player.width,   player.height,   player.color);
    drawPaddle(opponent.x, opponent.y, opponent.width, opponent.height, opponent.color);

    drawBall(ball.x, ball.y, ball.radius, ball.color);
}




render();