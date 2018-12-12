//sliders for color
sliderColorRed = document.getElementById("slider_RED");
sliderOutputRed = document.getElementById("output_sliderRED");
sliderColorBlue = document.getElementById("slider_BLUE");
sliderOutputBlue = document.getElementById("output_sliderBLUE");
sliderColorGreen = document.getElementById("slider_GREEN");
sliderOutputGreen = document.getElementById("output_sliderGREEN");
sliderColorAlpha = document.getElementById("slider_ALPHA");
sliderOutputAlpha = document.getElementById("output_sliderALPHA");

//sliders for border
sliderColorBorderRed = document.getElementById("slider_Border_RED");
sliderOutputBorderRed = document.getElementById("output_slider_border_RED");
sliderColorBorderBlue = document.getElementById("slider_Border_BLUE");
sliderOutputBorderBlue = document.getElementById("output_slider_border_BLUE");
sliderColorBorderGreen = document.getElementById("slider_Border_GREEN");
sliderOutputBorderGreen = document.getElementById("output_slider_border_GREEN");
sliderThick = document.getElementById("slider_Border_THICC");
sliderOutputThick = document.getElementById("output_slider_border_THICC");

//sliders for bg color
sliderColorBgRed = document.getElementById("slider_BgRED");
sliderOutputBgRed = document.getElementById("output_sliderBgRED");
sliderColorBgBlue = document.getElementById("slider_BgBLUE");
sliderOutputBgBlue = document.getElementById("output_sliderBgBLUE");
sliderColorBgGreen = document.getElementById("slider_BgGREEN");
sliderOutputBgGreen = document.getElementById("output_slideBgGREEN");
sliderColorBgAlpha = document.getElementById("slider_BgALPHA");
sliderOutputBgAlpha = document.getElementById("output_sliderBgALPHA");

//shape-specific elements
canvasText = document.getElementById("canvasTextProperty");

//functions to handle slider input updates
//shape color
sliderColorRed.oninput = function() {
	sliderOutputRed.innerHTML = this.value;
}
sliderColorBlue.oninput = function() {
	sliderOutputBlue.innerHTML = this.value;
}
sliderColorGreen.oninput = function() {
	sliderOutputGreen.innerHTML = this.value;
}
sliderColorAlpha.oninput = function() {
	sliderOutputAlpha.innerHTML = this.value;
}
//shape outline color
sliderColorBorderRed.oninput = function() {
	sliderOutputBorderRed.innerHTML = this.value;
}
sliderColorBorderBlue.oninput = function() {
	sliderOutputBorderBlue.innerHTML = this.value;
}
sliderColorBorderGreen.oninput = function() {
	sliderOutputBorderGreen.innerHTML = this.value;
}
sliderThick.oninput = function() {
	sliderOutputThick.innerHTML = this.value;
}

//background color
sliderColorBgRed.oninput = function() {
	sliderOutputBgRed.innerHTML = this.value;
}
sliderColorBgBlue.oninput = function() {
	sliderOutputBgBlue.innerHTML = this.value;
}
sliderColorBgGreen.oninput = function() {
	sliderOutputBgGreen.innerHTML = this.value;
}
sliderColorBgAlpha.oninput = function() {
	sliderOutputBgAlpha.innerHTML = this.value;
}