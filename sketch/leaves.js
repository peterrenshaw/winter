/*
 * name: leaves.js
 * date: 2013JUL01
 * prog: pr
 * desc:
 *     loads image from url, displays onscreen.
*/
imgLeaf img;
void setup() {
    size=(160, 160);
    String url = "http://peterrenshaw.neocities.org/leaves.jpg";
    imgLeaf = loadImage(url, "jpg");
    noLoop();
}

void draw() {
    background(255);
    image(imgLeaf, 0, 0, 100, 75);
}
