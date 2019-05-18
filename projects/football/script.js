"use strict"

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

field.onclick = function(event) {
	let coordX = event.clientX;
	let coordY = event.clientY;

	let top = event.layerY - 10;
	let left = event.layerX - 10;

	if (top < 20) {
		top = 20;
	} else if (top > 580) {
		top = 580;
	}

	if (left < 20) {
		left = 20;
	} else if (left > 780) {
		left = 780;
	}

	ball.style.top = top + "px";
	ball.style.left = left + "px";
}
