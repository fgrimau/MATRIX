var NB_ROWS = 15;
var NB_COLS = 20;

const R = 0;
const G = 1;
const B = 2;
const W = 3;

Array.matrix = function(numrows, numcols, numcolors, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            colors = [];
            for(var c = 0; c < numcolors; ++c) {
                colors[c] = initial;
            }
            columns[j] = colors;
        }
        arr[i] = columns;
    }
    return arr;
}


class Matrix {
    constructor(){
        this.matrix = Array.matrix(NB_ROWS, NB_COLS, 4, 0);
    }
}

var matrix;

function setup() {
    matrix = new Matrix;

    canvas = createCanvas(721, 541);
    canvas.parent('sketch-holder');
    background(255, 255, 255);
}

function draw() {
    strokeWeight(2);
    stroke(0, 0, 0, 255);
    rect(0, 0, 721, 541)
    strokeWeight(1);
    for(var x=1;x<NB_COLS;x++){
        line(x*36, 0, x*36, 541);
    }
    for(var x=1;x<NB_ROWS;x++){
        line(0, x*36, 721, x*36);
    }
}

function mousePressed(){
    if(mouseX < 721 && mouseX > 0 && mouseY < 541 && mouseY > 0){
        console.log(Math.round(mouseX/36));
        console.log(Math.round(mouseY/36));
    }
}
