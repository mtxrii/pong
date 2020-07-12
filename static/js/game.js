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


window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup",   keyUpHandler);

function keyDownHandler(event) {
    switch (event.keyCode) {
        case 38: // up arrow key code
            upArrowPressed = true;
            hideTooltip();
            break;
        case 40: // down arrow key code
            downArrowPressed = true;
            hideTooltip();
            break;
        default:
            showTooltip();
    }
}

function keyUpHandler(event) {
    switch (event.keyCode) {
        case 38: // up arrow key code
            upArrowPressed = false;
            break;
        case 40: // down arrow key code
            downArrowPressed = false;
            break;
    }
}


function update() {
    // move the paddle
    if (upArrowPressed && player.y > 0) {
        player.y -= 8;
    }

    else if (downArrowPressed && (player.y < (canvas.height - player.height))) {
        player.y += 8;
    }

    // check if ball hits top or bottom wall


    // move the ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // ai paddle movement

    // collision detection on paddles
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

function gameLoop() {
    update();
    render();
}

setInterval(gameLoop, 1000/6); // 60 fps