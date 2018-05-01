function setup() {
	createCanvas( windowWidth, windowHeight);
	noStroke();
  frameRate(5);
}

function draw() {
	let rectPerRow = 10;
	let rectSize = 50
	let pad = width / rectPerRow;
	let y = rectSize;

	background(0);

	for ( let x = rectSize; x < width; x += pad) {
    for ( let y = rectSize; y < height; y += pad){
		fill( 0, 120, random(255) );
    let rectSize = random(5, 50);
		rect( x, y, rectSize, rectSize );
	 }
  }
}
