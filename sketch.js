let score = 0;
let radius = 100;
let x, y;
let r, g, b;
let time = 5000; // for leveling up

function newCircle(){
	r = random(255);
	g = random(255);
	b = random(255);
	x = random(windowWidth);
	y = random(windowHeight);
}
function setup() {
  // createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight)
  newCircle();
}

function draw() {
	background(220);
	fill(r, g, b);
	ellipse(x, y, radius*2, radius*2);
	fill(0, 0, 0);
	textSize(26);
	textStyle(BOLD);
	text("Score: " + score, 10, 20);


}

function mousePressed(){
	let d = dist(mouseX, mouseY, x, y);
	if (d < radius){
		newCircle();
		score++;
		if (score%20==0){
			time -= 1000;
			radius -=10;
		}
	}
	else{
		score--;
	}
}
setInterval(newCircle, time);