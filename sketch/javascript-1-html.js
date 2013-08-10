var bound = false;

function bindJavascript() {      
    var pjs = Processing.getInstanceById('javascript-1');
    if (pjs! = null) {
      pjs.bindJavascript(this);
      bound = true; 
    }
    if (!bound) 
        setTimeout(bindJavascript, 250);
}
bindJavascript();
function showXYCoordinates(v) {
    document.getElementById('vertex').value = v;
    //document.getElementById('xcoord').value = x;
    //document.getElementById('ycoord').value = y;
}
