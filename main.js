// microphone input
var mic;

// Set up cannot be named differently, constructs canvas
function setup() {
  createCanvas(displayWidth, displayHeight);

  // microphone volume input
  mic = new p5.AudioIn();
  mic.start();

}

// draw cannot be named differently, will be called in a loop
function draw() {
  stroke(255);
  if (mouseIsPressed) {
    flower();
  } else {
    fill(mouseX%255, mouseY%255, 255-(mouseY+mouseX)/100);
    micLevel = mic.getLevel();

    ellipse(mouseX, mouseY, 50 + micLevel*500, 50+ micLevel*500);

  }
}

function flower() {
  push();
  stroke(255);
  fill(255, 0, 100, 130);
  translate(mouseX, mouseY);
  for (var i = 0; i < 6; i++) {
    ellipse(0, 0, 20, 80);
    rotate(PI/6);
  }
  pop();
}

