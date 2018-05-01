//Ombre lines

let lineX1;
let lineY1;

let maxLineMvt = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
  //set initial position of line
  lineX1 = width * 0.5;
  lineY1 = height * 0.5;
  lineX2 = width * 0.3;
  lineY2 = height * 0.3;
}

function draw() {
  constrain( lineY1, 0, height );
  // Set stroke color based off mouseY
  r = map( mouseY, 0, height, 180, 0 );
  g = map( mouseY, 0, height, 0, 180 );
  //randomly generate width of lines
  strokeWeight(random(1, 50));
  //set color
  stroke( r, g, 255, 20);
  //draw line
  line(lineX1, lineY1, mouseX, mouseY);
  //reposition the line randomly
  lineX1 += random(-maxLineMvt, maxLineMvt);
  lineY1 += random(-maxLineMvt, maxLineMvt);

}
