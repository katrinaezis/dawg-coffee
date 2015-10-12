"use strict";

window.onload = function() {
	window.alert("kk");
	var dawg = document.getElementById("dawg");
	dawg.onscroll = blur;
};

function blur() {
	var filter = 'brightness(50%) blur(10px)';
	dawg.style.webkitFilter = filter;
	dawg.style.filter = filter;
}