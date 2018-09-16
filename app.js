let canvas = document.querySelector('#canvas');
let game = canvas.getContext('2d');

// Rectangle Brick
game.beginPath();
game.rect(20,40,50,50);
game.fillStyle = "FF0000";
game.fill();
game.closePath();
// Arc
game.beginPath();
game.arc(240,160,20,0,Math.PI*2,false);
game.fillStyle = "green";
game.fill();
game.closePath();
// Rectangle 2
game.beginPath();
game.rect(160,10,100,40);
game.fillStyle = "rgba(0,0,255,0.5)";
game.fill();
game.closePath();


// Draw 
let x = canvas.width/2;
let y = canvas.height - 30;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let rightPressed = false;
let leftPressed = false;
let paddleX = (canvas.width - paddleWidth)/2;
let dx = 2;
let dy = -2;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
// BRicks
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}
// Event Listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function drawBall(){
    game.beginPath();
    game.arc(x,y,ballRadius,0,Math.PI*2);
    game.fillStyle = "0095AD";
    game.fill();
    game.closePath();
}
function draw(){
    game.clearRect(0,0,canvas.width,canvas.height);
    drawBricks();
    drawPaddle();
    drawBall();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth){
        paddleX += 7;
    } else if(leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    x += dx;
    y += dy;
}
function drawPaddle(){
    game.beginPath();
    game.rect(paddleX, canvas.height - paddleX, paddleWidth, paddleHeight);
    game.fillStyle = "#0095AD";
    game.fill();
    game.closePath();
}
function drawBricks(){
    for (let c = 0; c < brickColumnCount;c++){
        for (let r = 0; r< brickRowCount; r++){
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            game.beginPath();
            game.rect(0, 0, brickWidth, brickHeight);
            game.fillStyle = "#0095DD";
            game.fill();
            game.closePath();
        }
    }
}
setInterval(draw,10);

