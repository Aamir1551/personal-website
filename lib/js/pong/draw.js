function paddle1() {
  ctx.fillStyle="red";
  ctx.fillRect(0, paddle1y, 15, paddleLength);
  };


function paddle2(y) {
  ctx.fillStyle="red";
  ctx.fillRect(1300, paddle2y, 15, paddleLength);
  };

function ball(x,y) {
  ctx.fillStyle="blue";
  ctx.fillRect(x,y,20,20);
}

function iterate() {
  if (touchingpaddle() === 1) {
    if (balld === "NW") {
      balld = "NE"
    } else {
      balld = "SE"
    }
  } else if (touchingpaddle() ===2) {
    if (balld === "NE") {
      balld = "NW"
    } else {
      balld = "SW"
    }
  }
  if (balld==="NE"){
    if (bally >0){
      bally-=movement;
    } else{
      bally+=movement
      balld="SE"
    }
    ballx+=10;
    }
  else if (balld==="SE") {
    if (bally <300) {
      bally+=movement;
    } else{
      bally-=movement;
      balld="NE"
    }
    ballx+=10;
    }
  else if (balld==="SW") {
    if (bally <300) {
      bally+=movement;
    } else{
      bally-=movement;
      balld="NW"
    }
    ballx-=10;
    }
 else if (balld==="NW"){
    if (bally >0){
      bally-=movement;
    } else{
      bally+=movement
      balld="SW"
    }
    ballx-=10;
    }    

ball(ballx,bally);
}

function p() {
  resetGame();
}

function touchingpaddle() {
  if (ballx - 20 === 0 && (paddle1y-bally<=0) && (paddle1y-bally>=-1*paddleLength)) {
    return 1;
  } else if (ballx + 20 === 1300 && (paddle2y-bally<=0) && (paddle2y-bally>=-1*paddleLength)) {
    return 2;
  }
  else {
    return 0
  }
}

function touchingWall() {
  if (ballx===0) {
    score2 ++;
    resetBall();
  } else if (ballx===1400) {
    score1 ++;
    resetBall();
  }
}

function repeatOften() {
  ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
  iterate();
  touchingWall();
  paddle1();
  paddle2();
  paddle1y = bally
  //document.getElementById("playerScore1").innerHTML = "Player 1 score: " + score1.toString();
  //document.getElementById("playerScore2").innerHTML = "Player 2 score: " + score2.toString();
  setTimeout(function() {
    requestAnimationFrame(repeatOften);}, 1000 /fps);;
}

function gameStart() {
  requestAnimationFrame(repeatOften);
}