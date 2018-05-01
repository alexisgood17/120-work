Alexis Good

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

Describe, in detail, what the original code is doing. Make sure to address;
The original code creates a ball that creates a trail as it bounces across the canvas. If the mouse is pressed, the ball changes directions based on the location of the mouse. The function is based on if statements and booleans. If the ball's x or y axis is outside of the canvas, the ball will change directions. The ball.delta_x or ball.delta_y value will change in order to adjust the location of the ball.

First, the global variables for the program are defined. The code defines the width of the ball, the x and y axis, the delta values for the ball that determine its direction, and the scale that also determines direction. It then sets up the canvas and background color. Next, the x and y axes are redefined by adding them to the delta multipled by the scale value. Two if statements determine if the ball is out of bounds, and then the code creates the ball. After that, the mousePressed function changes the scale value depending on the position of the mouse at the time it is pressed.

## How did you alter the sketch?
I changed the size and color properties of the object. When it hits the "walls", the size increases and the color changes. Once the size reaches 400 px, it starts decreasing and the color value decreases as well. 
