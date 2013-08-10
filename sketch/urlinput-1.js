
/*
 * name:       leaves-4.js
 * date:       2013JUL06
 * programmer: pr
 * source:     <http://processingjs.org/articles/PomaxGuide.html#jsobj>
 * description:
 *      lets integrate HTML with Javascript and Processing :)     
 * 
*/

void setup() {
    size(200,200);
    noLoop();
  
    background(#000033);
    text("", 0, 0); 
}

void draw() {}

void drawText(String t) {
    background(#000033);
    float twidth = textWidth(t);
    text(t, (width - twidth)/2, height/2);
}

