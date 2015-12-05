
var mic;

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var rcb;  // will be filled later with user input

function setup() {
  var myCanvas = createCanvas(displayWidth,displayHeight);
  noFill();

  mic = new p5.AudioIn();
  mic.start();

  myRec.onResult = rcb; // recognition callback
  myRec.start(); // start engine
  background(50);
}

function draw() {

}

// Speech Detection
function resultCallback() {
    var mostrecentword = myRec.resultString;   
    background(50); 
    textSize(32);
    fill(255, 0, 100, 130);   
    text(mostrecentword, 100, 100);
}

rcb = resultCallback;
// End of Speech Detection





