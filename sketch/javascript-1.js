/*
 * name:       javascript-1js
 * date:       2013JUL03
 * programmer: pr
 * version:    0.1
 * copyright:  Copyright 2013 Peter Renshaw
 * license:    AGPL3, copy found at <http://peterrenshaw.neocities.org/agpl.txt>
 * description:
 *     working with objects using processing2 to represent as leaves
 * This particular bit of code extracts co-ordinates of objects. It
 * will eventually export the code as JSON for later usage.
 *
*/

int WIDTH = 1000;     // screen W
int HEIGHT = 762;     // screen H
PFont f;               // font 
PImage img;            // image
color c;               // color
ArrayList<Node> nodes; // array of Node objects
int count;             // counter


/* --- javascript interface code --- */
/* http://processingjs.org/sketches/mysketch3.pde */
interface JavaScript {
    void showXYCoordinates(int x, int y); 
}

JavaScript javascript;
void bindJavascript(JavaScript js) {
    javascript = js; 
}
/* --- javascript interface code --- */


/* --- sys code --- */
void setup() {
    count = 0;
    nodes = new ArrayList<Node>(); 
    f = createFont("Arial", 40, true); 
    img = loadImage("http://peterrenshaw.neocities.org/leaves-4.jpg");  
  
    size(WIDTH, HEIGHT);
    background(255);
    noLoop();
}

/*---
 * draw: draw & redraw routine. checks mouse clicks for naive 
 *       interactivity. will update.
 *---*/
void draw() {
    background(255);

    // display local image onscreen
    image(img, 0, 0, WIDTH, HEIGHT);
    
    // pass the mouse co-ords back to Javascript
    mouseMoved();
    
    // add cursor at mouse position
    selector();      
    renderleaf();  
    display();
}
/* --- sys code --- */

void mouseMoved() {
    if (javascript != null) {
        javascript.showXYCoordinates(mouseX, mouseY);
    }
    
    redraw();
}

/* --- node code --- */
// basic node object stores X, Y co-ord  & other stuff


/*===
 * name: Node
 * date: 2013JUL03
 * prog: pr
 * desc: 
 *     capture X & Y co-ords 
 *===*/
class Node {
    int nx;
    int ny;
    // init
    Node () {
        nx = 0;
        ny = 0;
    }
    // add a new X & Y mouse co-ord
    void add(int x, int y) {
        nx = x;
        ny = y;  
    }
    // query X co-ord
    int x() {
        return nx; 
    }
    // query Y co-ord
    int y() {
        return ny;  
    }
}

/*---
* draw: render leaf object, returns true
*---*/ 
boolean renderleaf() {
    // You can set fill and stroke
    fill(255, 255, 255, 180);
    stroke(255, 0, 0);
    strokeWeight(1);
    
    // loop thru array of node of Node objects & query
    // X & Y mouse co-ordinates
    beginShape(); 
    for (int i=0; i < nodes.size(); i++) {
        // -6 offset for selector visibility
        vertex(nodes.get(i).x()-6, nodes.get(i).y()-6); // TODO: fix this ugly visibility hack
    }
    endShape(CLOSE);
    
    return true;
}    

/*---
* selector: show selector (cursor) over image moved around by mouse
*---*/ 
void selector() {
    // black with transparent centre
    stroke(0);
    fill(255, 255, 255, 10);
    // -6 offset for pointer visibility 
    ellipse(mouseX-6, mouseY-6, 14, 14); // TODO: fix this ugly visibility hack

    // black dot
    stroke(0);
    ellipse(mouseX-6,mouseY-6, 1, 1);
}

/*---
* display: show text
*---*/ 
void display() {
    textFont(f);
    textAlign(RIGHT);
    
    // image is 1000x763px
    fill(255, 0, 0);
    stroke(255, 0, 0);
    text((nodes.size()-1)/2, 970, 668);  // number of points captured
    
    fill(255);
    stroke(255);
    text(mouseY,       970, 702);    // current mouse Y pos
    text(mouseX,       970, 736);    // current mouse X pos
}
/* --- node code --- */




