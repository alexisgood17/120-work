/* This program prints the coordinates of the location of
 * the mouse while also changing the background color.*/

function setup(){
  //create canvas based on size of window
   createCanvas(windowWidth, windowHeight);
 }

//creating a value for the background color in greyscale
let bg = 0;

function draw() {
    /*updating the background color every iteration allows the color
     *to change while also making sure there is no 'trail'
     *when the coordinates update*/
    background(bg);
    //increasing the bg color value by 0.1 every iteration of the function
    bg += 0.1;
    textSize(40);
    fill('rgb(215, 59, 218)');
    //printing the coordinates, determined by the mouse position
    text("X: " + floor(mouseX), mouseX, mouseY );
    text("Y: " + floor(mouseY), mouseX, mouseY+50 );
  }
