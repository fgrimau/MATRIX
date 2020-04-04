var NB_ROWS = 15;
var NB_COLS = 20;
var RECT_SIZE = 36;

const R = 0;
const G = 1;
const B = 2;
const W = 3;

let tool = "pencil";

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

    draw_at(x, y, r, g, b){
        this.matrix[y][x][0] = r;
        this.matrix[y][x][1] = g;
        this.matrix[y][x][2] = b;
    }

    fill(r, g, b){
        for(var x=0;x<NB_COLS;x++){
            for(var y=0;y<NB_ROWS;y++){
                this.matrix[y][x][0] = r;
                this.matrix[y][x][1] = g;
                this.matrix[y][x][2] = b;
            }
        }
    }

    get_at(x, y){
        return this.matrix[y][x];
    }

    draw(){
        for(var x=0;x<NB_COLS;x++){
            for(var y=0;y<NB_ROWS;y++){
                fill(this.matrix[y][x][0], this.matrix[y][x][1], this.matrix[y][x][2]);
                rect(x*RECT_SIZE, y*RECT_SIZE, RECT_SIZE, RECT_SIZE);
            }
        }
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
        line(x*RECT_SIZE, 0, x*RECT_SIZE, 541);
    }
    for(var x=1;x<NB_ROWS;x++){
        line(0, x*RECT_SIZE, 721, x*RECT_SIZE);
    }
    matrix.draw();
}

function mousePressed(){
    if(mouseX < 721 && mouseX > 0 && mouseY < 541 && mouseY > 0){
        x = Math.floor(mouseX/(RECT_SIZE+1));
        y = Math.floor(mouseY/(RECT_SIZE+1));

        if(tool == "pencil"){
            matrix.draw_at(x, y, r, g, b);
        }
        else if(tool == "filler"){
            matrix.fill(r, g, b);
        }
        else if(tool == "piplette"){
            col = matrix.get_at(x, y);
            r = col[0];
            g = col[1];
            b = col[2];
            RGBChange();
        }
    }
}

function mouseDragged(){
    if(mouseX < 721 && mouseX > 0 && mouseY < 541 && mouseY > 0){
        x = Math.floor(mouseX/(RECT_SIZE+1));
        y = Math.floor(mouseY/(RECT_SIZE+1));

        if(tool == "pencil"){
            matrix.draw_at(x, y, r, g, b);
        }
    }
}
