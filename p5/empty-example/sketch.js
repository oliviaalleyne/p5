var xpos1 = 200;
var ypos1 = 200;
var xpos2 = 200;
var ypos2 = 250;
var xpos3 = 250;
var ypos3 = 200;
var xpos4 = 250;
var ypos4 = 250;

function setup() {
 // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background("#ff0044");
  //noStroke();
  rect(xpos1,ypos1,50,50);
  rect(xpos2,ypos2,50,50);
  rect(xpos3,ypos3,50,50);
  rect(xpos4,ypos4,50,50);
}

function mousePressed(){
  xpos1 = random (1, width-50);
  ypos1 = random (1, height-50);
  xpos2 = random (1, width-50);
  ypos2 = random (1, height-50);
  xpos3 = random (1, width-50);
  ypos3 = random (1, height-50);
  xpos4 = random (1, width-50);
  ypos4 = random (1, height-50);
}
