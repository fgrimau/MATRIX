var slider_r = document.getElementById("Slider_R");
var slider_g = document.getElementById("Slider_G");
var slider_b = document.getElementById("Slider_B");

var r = 0;
var g = 0;
var b = 0;
RGBChange();

slider_r.oninput = function() {
  	r = this.value;
	RGBChange();
}

slider_g.oninput = function() {
  	g = this.value;
	RGBChange();
}

slider_b.oninput = function() {
  	b = this.value;
	RGBChange();
}

function RGBChange() {
	$('#RGBRect').css('background', 'rgb('+r+','+g+','+b+')');
    document.getElementById("red_val").innerHTML = r;
    document.getElementById("green_val").innerHTML = g;
    document.getElementById("blue_val").innerHTML = b;

    slider_r.value = r;
    slider_g.value = g;
    slider_b.value = b;

};
