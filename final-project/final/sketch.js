//Alexis Good
//create an audio object and visualize the song using shapes

//create global variable and array
var amp;
var ampHistory = [];

function setup() {
  //change parameters of rect function
  rectMode(CENTER);
  colorMode(HSB);

  //load mp3 file (don't play it yet)
  song = loadSound("subways.mp3", loaded);
  amp = new p5.Amplitude();
}

//create a callback to ensure the song loads before the play button displays
function loaded(){
  //this is to check in the console if the song has loaded
  console.log("loaded");

  //creating the button object
  button = createButton("play");
  button.mousePressed(toggle);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255, 10);

  //this is the current amplitude, or volume
  var vol = amp.getLevel();

  //variables for the rectangles
  var space = 5;
  var w = width/ (ampHistory.length * space);
  var minHeight = 2;

  //add new volume value to end of array
  ampHistory.push(vol);

  //loop through previous values
  for (var i = 0; i < ampHistory.length; i++) {
    //these are x and y positions for the rectangles
    var x = map(i, ampHistory.length, 0, width/2, width);
    var y = map(ampHistory[i], 0, 0.5, minHeight, height);
    //to create a rainbow effect
    fill(i*10, 255, 255);
    //drawing the rectangles
    rect(x, height/2, w*2, y);
    rect((width-x), height/2, w*2, y);
  }

  //remove first item in array so that the visualizer 'scrolls'
  if (ampHistory.length >= w) {
    ampHistory.splice(0, 1);
  }
}

//create a play and pause button
function toggle(){
  if (!song.isPlaying()){
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}
