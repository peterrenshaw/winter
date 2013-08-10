/* 
 * name: load.js
 * date: 2013JUL01
 * prog: <http://processing.org/examples/loaddisplayimage.html>
 * desc: 
 *     loads images
 */

//@psj preload="leaves.jpg";

PImage img;

void setup() {
    size=(150, 150);
    String url = "http://farm8.staticflickr.com/7334/8890164633_6b00459d42_q.jpg";
    // Load image from a web server
    img_leaf = loadImage(url, "jpg");
    noLoop();
}

void draw() {
    image(img_leaf, 0, 0, 150. 150);
}
 
