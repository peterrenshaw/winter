/*
 * name:       urlinput-2.js
 * date:       2013JUL06
 * programmer: pr
 * source:     <http://processingjs.org/articles/PomaxGuide.html#jsobj>
 * description:
 *      lets integrate HTML with Javascript and Processing :)     
 * 
*/
"use strict";
var bound = false;

function bindJavascript() {
    var pjs = Processing.getInstanceById('urlinput-2');

    if (pjs != null) {
        pjs.bindJavascript(this);
        bound = true;
    }
    if (!bound) {
        setTimeout(bindJavascript, 250);
    }
} 

bindJavascript();

function showXYCoordinates(x, y) {
    document.getElementById('xcoord').value = x;
    document.getElementById('ycoord').value = y;
}
