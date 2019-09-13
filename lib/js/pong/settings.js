
function bigStart() {
 window.mycanvas = document.getElementById('mycanvas');
window.ctx = mycanvas.getContext('2d');
window.ballx = 250;
window.bally = 150;
window.paddleLength = 100;
window.balld = "NW";
window.movement = 20;
window.paddle1y=100;
window.paddle2y=100;
window.score1=0;
window.score2=0;
window.fps = 15;
gameStart();
}

function resetBall() {
ballx = 250;
bally = 150;
}

function resetGame() {
  resetBall();
  score1=0;
  score2=0;
  resetPaddle();
}

function resetPaddle() {
  paddle1y=100;
  paddle2y=100;  
}