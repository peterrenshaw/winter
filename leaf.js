/*
 * name:       leaf.js
 * date:       2013JUL10
 * programmer: pr
 * description:
 *      using processing2 to outline leaves
 *      allows current X and Y output to html controls       
 *      export code to JSON on keypress (button?)
 *
*/


/* --- processingjs code --- */
(function () {
    var canvas = document.getElementById('cvs-leaf');
    var pjs = new Processing(canvas);
    
    var WIDTH = 1000;       // screen W
    var HEIGHT = 762;       // screen H

    var count;              // counter
    var f = pjs.PFont;                // font 
    var img = pjs.PImage;             // image
    var c = pjs.color;                // color
    //var nodes = pjs.ArrayList<Node>;  // array of Node objects

    // setup
    pjs.setup = function () {
        count = 0;
        nodes = new pjs.ArrayList<Node>();
        f = pjs.createFont("Arial", 40, true);
        img = pjs.loadImage("http://peterrenshaw.neocities.org/leaves-4.jpg");
   
        pjs.size(WIDTH, HEIGHT);
        pjs.background(255);       
        pjs.smooth();
    }
    // draw
    pjs.draw = function () {
        pjs.background(255);
 
        pjs.image(img, 0, 0, WIDTH, HEIGHT);

        // check mouse click & add new node to nodes
        selector(); 
 
        if (pjs.mousePressed && (pjs.mouseButton == pjs.LEFT)) {
            Node n = new Node();
            n.add(pjs.mouseX, pjs.mouseY);
            nodes.add(n);
            
            // processing: text 
            pjs.stroke(255, 0, 0, 120);
            pjs.textAlign(pjs.RIGHT);
            text(nodes.size(), 500, 416); 
        } else if (pjs.mousePressed && (pjs.mouseButton == pjs.RIGHT)) {
            // TODO: put save nodes here
            nodes.clear(); 
        } else {
            // processing: fill in shape with color & transparency 
            pjs.fill(255,255,255,120);
        }  

        renderleaf();
    }
} ());
/* --- processingjs code --- */


/* --- leaf code --- */
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
/* --- leaf code --- */

