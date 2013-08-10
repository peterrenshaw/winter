/*
 * name:       urlinput-2.js
 * date:       2013JUL06
 * programmer: pr
 * source:     <http://processingjs.org/articles/PomaxGuide.html#jsobj>
 * description:
 *      lets integrate HTML with Javascript and Processing :)     
 * 
*/

/* --- JavaScript interface --- */
interface JavaScript {
    void showXYCoordinates(int x, int y);
}

void bindJavascript(JavaScript js) {
    javascript = js;
}
JavaScript javascript;
/* --- JavaScript interface --- */

/* --- events --- */
void setup() {
    size(200,200);
    stroke(255);
  
    background(120);
    noLoop(); 
}
void draw() {
    fill(0, 0, 0, 40);
    rect(-1, -1, width+2, height+2);
}
void mouseMoved() {
    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);
    redraw();
 
    if (javascript != null) {
        javascript.showXYCoordinates(mouseX, mouseY);
    }
}
/* --- events --- */
void drawText(String t) {
    background(#000033);
    float twidth = textWidth(t);
    text(t, (width - twidth)/2, height/2);
}

