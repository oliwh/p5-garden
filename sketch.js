// global vars
let colourPicker;

function setup() {
	frameRate(12);

	createCanvas(800,600);
	
	colourPicker = createColorPicker('#c85afa');
	colourPicker.position(0, height + 5);

	background(90, 190, 230);
// ground
	let groundY = 150
	fill(120,230,70);
	noStroke()
	rect(0, height - groundY, width, groundY);
}

function draw() {
}

// double click to place flower
function doubleClicked() {
	createFlower(mouseX, mouseY, 150, 0, 35, 5);
}

function createFlower(x, y, h, n, s, w) {
/**
 * creates a flower and places it on the coordinates specified 
 * where x and y are coordinates for base of the stem	
 * h is the height of the flower from base of stem to center of head
 * n is the number of petals around the flower
 * s is the size of the petals
 * w is the width of the stem
 */

// o is the offset from the middle of the flower head
// p is the main colour of the petals
// c is the main colour of the centre

	let o = (s / 2);
	let p = color(colourPicker.color());
	let c = color(210, 200, 70);
	// create stem with color #5AAF34
	strokeWeight(2);
	stroke(50, 135, 12);
	fill(70, 155, 32);
	rect(x + (w / 2), y - h, w, h);

	// create petals around flower
	stroke(strokeColour(p));
	fill(p);
	// this isnt going to scale well for other flowers
	ellipse(x + w - o, y - h + o, s);
	ellipse(x + w + o, y - h - o, s);
	ellipse(x + w - o, y - h - o, s);
	ellipse(x + w + o, y - h + o, s);

	// create centre of fower
	strokeWeight(2);
	stroke(strokeColour(c));
	fill(c);
	ellipse(x + w, y - h, s);
}

function strokeColour(c) { 
// takes input colour c and returns the decreased value b
// v is the value to decrease by
	let v = 30;
	let b = color(red(c) - v, green(c) - v, blue(c) - v);
	return b;
}
