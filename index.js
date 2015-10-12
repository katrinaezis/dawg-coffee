"use strict";

window.onload = function() {
	var dawg = document.getElementById("dawg");
	dawg.onscroll = blur;
};

function blur() {
	window.alert("kk");
	var filter = 'brightness(50%) blur(10px)';
	dawg.style.webkitFilter = filter;
	dawg.style.filter = filter;
}