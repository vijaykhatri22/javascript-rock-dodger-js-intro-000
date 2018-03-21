const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)
  if (top > 360) {
    //dodger
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerRightEdge = dodgerLeftEdge + 40;
    //rock
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = rockLeftEdge + 20 ;

    // actual collision check
    if((rockLeftEdge < dodgerLeftEdge && rockRightEdge > dodgerLeftEdge)||
       (rockLeftEdge > dodgerLeftEdge && rockRightEdge < dodgerRightEdge)||
       (rockLeftEdge < dodgerRightEdge && rockRightEdge > dodgerRightEdge)){
         return true;
       }
  }
}
function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`
  var top = 0
  rock.style.top = `${top}px`;

  GAME.appendChild(rock);

  function moveRock(){
    function step(){
      rock.style.top = `${top += 2}px`;

    }

    if(checkCollision(rock)){
      endGame();
    }
    else if(rock.style.top != GAME.style.bottom ){
      window.requestAnimationFrame(step);
    }
    else{
      rock.remove();
    }
  }
  window.requestAnimationFrame(step)
  ROCKS.push(rock)

  return rock
}
function endGame(){
  ROCK.remove();
  return alert("You lose.")
}
function moveDodger(e){
  if(e.which == LEFT_ARROW){
    moveDodgerLeft();
  }
  else if (e.which == RIGHT_ARROW) {
    moveDodgerRight();
  }
}
function moveDodgerLeft(){
  var left = positionToInteger(DODGER.style.left);
  function step(){
    DODGER.style.left=`${left-4}px`;
  }
  window.requestAnimationFrame(step);
}
function moveDodgerRight(){
  var right = positionToInteger(DODGER.style.left);
  function step(){
    DODGER.style.left=`${right+4}px`;
  }
  window.requestAnimationFrame(step);
}
