function setup() {
	createCanvas(800,600);
}

function draw() {
// background
	background(90,190,230);
// ground
	// ground height is customisable through the variable groundY
	// the ground is created by spawning a rectangle always touching the bottom of the canvas
	let groundY = 150
	fill(120,230,70);
	strokeWeight(0);
	rect(0, height - groundY, width, groundY);
}
