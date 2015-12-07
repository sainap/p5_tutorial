// Set up cannot be named differently, constructs canvas
function setup() {
  createCanvas(displayWidth, displayHeight);

}

// draw cannot be named differently, will be called in a loop
function draw() {
  stroke(255);
}

function flower() {
  push();
  stroke(255);
  fill(255, 0, 100, 255);
  translate(mouseX, mouseY);
  for (var i = 0; i < 6; i++) {
    ellipse(0, 0, 20, 80);
    rotate(PI/6);
  }
  pop();
}

