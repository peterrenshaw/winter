/*
 * name:       integrate.js
 * date:       2013JUL10
 * programmer: pr
 * source:     <http://processingjs.org/articles/PomaxGuide.html#jsobj>
 * description:
 *      lets integrate HTML with Javascript and Processing :)     
 * 
*/

(function() { 
    var canvas = document.getElementById('glibcanvas');
    var pjs = new Processing(canvas);
    var value = 0;

    // sketch starts here
    pjs.setup = function() {
        pjs.size(200, 200);

        // only draw on mousemoves
        pjs.noLoop();
    }

    // main draw function
    pjs.draw = function () {
        pjs.noStroke();
        pjs.fill(255, 75);
        pjs.rect(0, 0, 200, 200);
        pjs.stroke(100, 100, 200);
        pjs.noFill();
        pjs.bezier(0,100, 33,100+value, 66,100+value, 100,100);
        pjs.bezier(100,100, 133,100+-value, 166,100+-value, 200,100);    
    }

    // mouse movement function
    pjs.mouseMoved = function () {
        value = ( pjs.mouseY-100 );
        pjs.redraw();
    } 

    // setup to start sketch
    pjs.setup();
} ());
