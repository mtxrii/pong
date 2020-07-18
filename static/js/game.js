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
    context.beginPath();

    context.arc(x, y, radius, 0, Math.PI*2, true);

    context.closePath();
    context.fill();
}

function playRandom() {
    const rand = Math.floor(Math.random() * 4) + 1;
    switch (rand) {
        case 1:
            hitSound1.play();
            break;
        case 2:
            hitSound2.play();
            break;
        case 3:
            hitSound3.play();
            break;
        case 4:
            hitSound4.play();
            break;
    }
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


function reset() {
    ball.x = canvas.width  / 2;
    ball.y = canvas.height / 2;
    ball.speed = 7;

    ball.velocityX = -ball.velocityX;
    ball.velocityY = -ball.velocityY;
}

function collisionDetect(entity, object) {
    entity.top    = entity.y;
    entity.left   = entity.x;
    entity.right  = entity.x + entity.width;
    entity.bottom = entity.y + entity.height;

    object.top    = object.y - object.radius;
    object.left   = object.x - object.radius;
    object.right  = object.x + object.radius;
    object.bottom = object.y + object.radius;

    return (object.left < entity.right) && (object.top < entity.bottom) && (object.right > entity.left) && (object.bottom > entity.top);
}

function update() {
    if (upArrowPressed && player.y > 0) {
        player.y -= 8;
    }

    else if (downArrowPressed && (player.y < (canvas.height - player.height))) {
        player.y += 8;
    }

    if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
        ball.velocityY = -ball.velocityY;
        if (sound) {
            wallHitSound.play();
        }
    }

    if (ball.x + ball.radius >= canvas.width) {
        if (sound) {
            scoreSound.play();
        }
        player.score += 1;
        score("#1dbd08");
        reset();
    }

    if (ball.x - ball.radius <= 0) {
        if (sound) {
            scoreSound.play();
        }
        opponent.score += 1;
        score("#bd3208");
        reset();
    }

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    opponent.y += (ball.y - (opponent.y + opponent.height / 2)) * 0.048;

    let target = (ball.x < canvas.width / 2) ? player : opponent;
    if (collisionDetect(target, ball)) {
        if (sound) {
            playRandom();
        }
        let angle = 0;
        if (ball.y < (target.y + target.height / 2)) {
            angle = (Math.PI / 4) * -1;
        }
        else if (ball.y > (target.y + target.height / 2)) {
            angle = (Math.PI / 4);
        }

        ball.velocityX = ball.speed * Math.cos(angle) * (target === player ? 1 : -1);
        ball.velocityY = ball.speed * Math.sin(angle);

        ball.speed += 0.2;
    }
}

function render() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawNet();

    drawScore(     canvas.width/4, canvas.height/6,   player.score);
    drawScore( 3 * canvas.width/4, canvas.height/6, opponent.score);

    drawPaddle(  player.x,   player.y,   player.width,   player.height,   player.color);
    drawPaddle(opponent.x, opponent.y, opponent.width, opponent.height, opponent.color);

    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

function gameLoop() {
    update();
    render();
}

setInterval(gameLoop, 1000/80);