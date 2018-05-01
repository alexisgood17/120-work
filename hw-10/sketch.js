//create empty arrays for shapes
let circleSize = [];
let rectSize = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(5);
    for (let num = 0; num < 10; num++) {
        // create and push in a new random number to each array
        circleSize.push(random(20, 200));
        rectSize.push(random(40, 400));
    }
}

function drawCircle(){
  noStroke();
  //fill with random color
  fill(random(255), random(255), random(255));
  //create a for loop to index through new numbers
  for (let idx = 0; idx < circleSize.length; idx++) {
      //create x and y position for ellipses
      xpos = windowWidth / circleSize.length * idx + 30;
      ypos = windowHeight / circleSize.length * idx +30;
      //draw ellipse
      ellipse(xpos, 100, circleSize[idx]);
  }
}

function drawRect(){
  noFill();
  stroke(random(255), random(255), random(255));
  //loop through new numbers by increasing the index
  for (let idx = 0; idx < rectSize.length; idx++) {
    xpos = windowWidth / rectSize.length * idx + 30;
    ypos = windowHeight / rectSize.length * idx + 30;
    rect(xpos, ypos, 100, rectSize[idx]);
  }
}

function draw() {
    background('white');
    //call both functions 
    drawCircle();
    drawRect();
}
