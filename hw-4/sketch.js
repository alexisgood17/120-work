function setup() {
    // create a canvas to draw on
    createCanvas( 800, 800 );
}

function draw() {

    // background color
    background( 'rgb(37, 80, 70)' );

    /* ***************************** */
    /* MAIN SANDBOX */
    /* ***************************** */
    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 400, 400 );


    /* ***************************** */
    /* ARMS */
    /* ***************************** */
    push();
    translate( 0, -55 );

    // right arm
    rotate( PI );
    stroke( 'rgba(59, 11, 11, 1)' );
    strokeWeight( 50 );
    line( -120, -25, -150, -100 );
    line( -150, -100, -200, -200 );

    // hand
    stroke( 'rgb(242, 183, 154)' );
    strokeWeight( 75 );
    point( -200, -200 );

    // left arm
    scale( -1, 1 );
    stroke( 'rgba(59, 11, 11, 1)' );
    strokeWeight( 50 );
    line( -120, -25, -150, -100 );
    line( -150, -100, -200, -200 );

    // hand
    stroke( 'rgb(242, 183, 154)' );
    strokeWeight( 75 );
    point( -200, -200 );

    pop(); // ARMS END


    /* ***************************** */
    /* BODY */
    /* ***************************** */
    push();
    // dress triangles
    fill( 'rgba(59, 11, 11, 1)' );
    noStroke();
    triangle( -125, -50, 125, -50, 0, 200);
    triangle( -125, 250, 125, 250, 0, -50);
    pop();
    push();
    //add shirt collar
    fill( 'rgb(rgb(255, 255, 255))')
    noStroke();
    triangle( -50, -50, 0, -50, -50, 0 );
    //flip x-axis with scale
    scale( -1, 1 );
    triangle( -50, -50, 0, -50, -50, 0 );


    pop(); // BODY END


    /* ***************************** */
    /* LEGS */
    /* ***************************** */
    push();
    translate( 0, 200 );

    // left leg
    fill( 'rgba(240, 213, 167, 1)' );
    noStroke();
    quad( -100, 50, -5, 50, -150, 300, -100, 300);
    // scale to flip the shape
    scale( -1, 1 );
    quad( -100, 50, -5, 50, -150, 300, -100, 300 );
    pop();
    // LEGS END

    //shoes
    push();
    fill( 'rgb( 0, 0, 0 )')
    triangle( -70, 400, -70, 370, -150, 400);
    scale( -1, 1);
    triangle( -70, 400, -70, 370, -150, 400);
    pop();

    /* ***************************** */
    /* HEAD */
    /* ***************************** */

    //hair
    push();
    fill('rgb(43, 33, 23)');
    noStroke();
    arc(0, -75, 500, 500, PI, 0, CHORD);
    pop();

    //face
    push();
    translate( 0, -175 );

    fill( 'rgba(240, 213, 167, 1)' );
    noStroke();
    ellipse(0, 0, 250);

    // mouth
    push();
    stroke('rgb(144, 25, 25)');
    noFill();
    curve(0, 0, -50, 50, 50, 50, 0, 0 );
    pop();

    // nose
    push();
    fill( 'rgb(242, 183, 154)' );
    triangle( 0, -20, 10, 20, -10, 20 );
    pop();
    push();
    fill( 'rgb(209, 136, 109)' );
    triangle( 0, 10, 10, 20, -10, 20 );
    pop();

    //glasses
    push();
    noFill();
    stroke( 'rgb(0, 0, 0)');
    strokeWeight(4);
    rect(20, -40, 75, 50);
    scale(-1, 1);
    rect(20, -40, 75, 50);
    line(-20, -10, 20, -10);
    pop();


    // eyes
    // left
    push();
    translate( -60, -40 );

    noFill();
    fill( 'rgb(45, 28, 21)' );
    ellipse( 5, 25, 30 );
    fill( 0 );
    ellipse( 5, 25, 20 );

    pop();

    // right
    push();
    translate( 60, -40 );

    noFill();
    fill( 'rgb(45, 28, 21)' );
    ellipse( -5, 25, 30 );
    fill( 0 );
    ellipse( -5, 25, 20 );

    pop();

    pop(); // HEAD END




    pop();
}
