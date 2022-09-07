// Global variables
let Height = 600;

function setup() {
	createCanvas(800, 800);
	background(255);
}

function draw() {
	let gY = 150;
// Background
	noStroke();
	fill(90, 190, 230);
	rect(0, 0, width, 600);
// Ground
	fill(100, 200, 70);
	rect(0, Height - gY, width, gY);
// Border
	fill(0);
	rect(0, Height, 800, 4);
}
