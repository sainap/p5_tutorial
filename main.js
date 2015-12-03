// microphone input
var mic;



// Set up cannot be named differently, constructs canvas
function setup() {
  createCanvas(displayWidth, displayHeight);

  // microphone volume input
  mic = new p5.AudioIn()
  mic.start();

}

// draw cannot be named differently, will be called in a loop
function draw() {
	fill(mouseX%255, mouseY%255, 255-(mouseY+mouseX)/100);
	micLevel = mic.getLevel();
	console.log(micLevel);
	ellipse(mouseX, mouseY, micLevel*1000, micLevel*1000);
}

