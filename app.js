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
console.log(x,y);
let dx = 2;
let dy = -2;
function drawBall(){
    game.beginPath();
    game.arc(x,y,10,0,Math.PI*2);
    game.fillStyle = "0095AD";
    game.fill();
    game.closePath();
}
function draw(){
    game.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw,10);
