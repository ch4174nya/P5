let score = 0;
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;

var xBallChange = 10;
var yBallChange = 10;

var xPaddle;
var yPaddle;
var paddleWidth;
var paddleHeight = 25;

var started = false;
let overPaddle = false;
let locked = false;


function setup() {
  createCanvas(windowWidth, windowHeight)
  strokeWeight(5);
  paddleWidth = min(windowWidth/4, 100);

}

function draw() {
  background(0);

  fill(255, 255, 255);
  textSize(26);
  textStyle(BOLD);
  noStroke();
  text("Score: " + score, 10, 20);

  fill(255, 0, 255);
  ellipse(xBall, yBall, diameter, diameter);

  xBall += xBallChange;
  yBall += yBallChange;

  if (xBall < diameter / 2 || xBall > windowWidth - 0.5 * diameter) {
    xBallChange *= -1;
  }
  if (yBall < diameter / 2 || yBall > windowHeight - diameter) {
    yBallChange *= -1;
  }

  if (xPaddle < xBall && xBall < xPaddle + paddleWidth && yBall + diameter / 2 >= yPaddle) {
    xBallChange *= -1;
    yBallChange *= -1;
    score++;
  }
  if (yBall > windowHeight - diameter){
  	score--;
  }

  // Test if the cursor is over the paddle
  if (
    mouseX > xPaddle - paddleWidth &&
    mouseX < xPaddle + paddleWidth &&
    mouseY > yPaddle - paddleHeight &&
    mouseY < yPaddle + paddleHeight
  ) {
    overPaddle = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
  } else {
    noStroke();
    fill(244, 122, 158);
    overBox = false;
  }



  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 30; // 100px above the bottom of the screen
    started = true;
  }

  fill(255, 255, 255);
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);


}

function mousePressed() {
  if (overPaddle) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - xPaddle;
  // yOffset = mouseY - yPaddle;
}

function mouseDragged() {
  if (locked) {
    xPaddle = mouseX - xOffset;
    // yPaddle = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
