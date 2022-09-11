// Global variables
let Height = 400;
let cX = 0;
let fX = 0;
let f1 = 1;

function setup() {
	frameRate(30);
	createCanvas(700, 600);
	background(255);
// Rows for colour pickers
	let r1 = 0;
	let r2 = 150;

/* === Colour Pickers === */

// Sky colour picker
	skyColPic = createColorPicker('#75CCDA');
	skyColPic.position(r1, Height + 10);
	// Description
	textSize(16);
	text('Sky', r1 + 70, Height + 32);

// Ground colour picker
	grndColPic = createColorPicker('#7EB32F');
	grndColPic.position(r1, Height + 50);
	// Description
	textSize(16);
	text('Ground', r1 + 70, Height + 70);

// Hill colour picker
	hillColPic = createColorPicker('#1C7A1B');
	hillColPic.position(r1, Height + 90);
	// Description
	textSize(16);
	text('Hill', r1 + 70, Height + 110);

// Hedge colour picker
	hedgeColPic = createColorPicker('#2f942d');
	hedgeColPic.position(r1, Height + 130);
	// Description
	textSize(16);
	text('Hedge', r1 + 70, Height + 150);

// Tree colour picker
	treeColPic = createColorPicker('#1E631D');
	treeColPic.position(r2, Height + 10);
	// Description
	textSize(16);
	text('Tree', r2 + 70, Height + 32);
// Pond colour picker
	pondColPic = createColorPicker('#adfed6');
	pondColPic.position(r2, Height + 50);
	// Description
	textSize(16);
	text('Pond', r2 + 70, Height + 70);
// Fish colour picker
	fishColPic = createColorPicker('#f99100');
	fishColPic.position(r2, Height + 90);
	// Description
	textSize(16);
	text('Fish', r2 + 70, Height + 110);

}

function draw() {
	let gY = 150;
// Background
	noStroke();
	fill(skyColPic.color());
	rect(0, 0, width, Height);

// Clouds
	spawnCloud(50, 1)
	spawnCloud(100, 2);
	spawnCloud(40, 3);
	spawnCloud(50, 4);
	spawnCloud(100, 5);
	spawnCloud(40, 6);
	if(cX > 800) {
		cX = 0;
	}

	cX += 0.5;
// Hill
	fill(hillColPic.color());
	ellipse(30, 190, 500, 150);

// Trees
	fill(treeColPic.color());
	ellipse(100, 150, 150);
	ellipse(350, 150, 175);

// Foreground
	fill(grndColPic.color());
	rect(0, Height - gY, width, gY);

// Hedge
	let hY = 75
	fill(hedgeColPic.color());
	rect(0, Height - gY - hY, width, hY);

// Pond
// Creates a pond with a slight angle
// A function may have been better to use here but the pond will never be moved around so it isn't necessary
	push();
	angleMode(DEGREES);
	rotate(-3);
	fill(95, 85, 56); //#5f5538
	ellipse(230, Height - 55, 410, 115);
	fill(pondColPic.color());
	ellipse(230, Height - 50, 400, 110);
	pop();

// Fish
	spawnFish(100, Height - 40, -5, 1);
	spawnFish(350, Height - 70, -2, -1);
// Changes fish direction at a specified point
	if(fX > 300) {
		f1 = 0;
	}
	else if(fX < 0) {
		f1 = 1;
	}
	if(f1 == 1) {
		fX += 1;
	}
	else if(f1 == 0) {
		fX -= 1;
	}
// Shed
	spawnShed(600, Height - gY - 30);

// Border
	fill(0);
	rect(0, Height, width, 4);

}

function spawnCloud(y, n) {
	// n is the cloud number
	// and is redefined as an offset for each cloud
	let x = -100;
	switch(n) {
		case 1:
			n = 500;
			break
		case 2:
			n = 300;
			break;
		case 3:
			n = 0;
			break;
		case 4:
			n = -300;
			break;
		case 5:
			n = -500;
			break;
		case 6:
			n = -1000;
			break;
	}
	noStroke();
	fill(255);
	ellipse(cX + n + x, y, 50);
	ellipse(cX + n + x - 10, y + 10, 60, 25);
	ellipse(cX + n + x + 20, y + 5, 40, 30);
}

function spawnShed(x,y) {
// spawn shed at x, y
// this works perfectly fine but it could probably be a lot more optimised
	// creates left sloped beam
	push();
	shearX(-45);
	fill(111, 77, 56); //#6f4d38
	rectMode(CENTER);
	translate(x - 499.5, y - 295);
	rect(x, y, 16, 50);
	pop();
	// creates both sides
	push();
	fill(22, 38, 45) //#16262d
	rect(x + 70, y - 50, 30, 100);
	triangle(x + 70, y - 50, x + 100, y - 80, x + 100, y - 50);
	rectMode(CENTER);
	rect(x, y, 150, 100);
	// creates vertical beams
	fill(119, 83, 60); //#77533c
	rect(x - 70, y, 15, 100);
	rect(x + 80, y, 15, 100);
	// creates roof
	fill(157, 155, 142); //#9d9b8e
	translate(x, y);
	shearX(-45);
	rect(-43.5, -75, 138, 50);
	pop();
	// creates right sloped beam
	push();
	shearX(-45);
	fill(111, 77, 56); //#6f4d38
	rectMode(CENTER);
	translate(x - 350, y - 295);
	rect(x, y, 16, 50);
	pop();
}

function spawnFish(x, y, a, d) {
	push();
	rotate(a);
	translate(x + (fX * 0.75 * d), y);
	fill(fishColPic.color());
	ellipse(0, 0, 30, 10);
	// depending on d (direction), reverses model of fish by changing side of triangle
	// multiplied by d so that both fish face each other
	if(f1 == 1) {
	triangle(-5 * d, 0, -20 * d, -5 * d, -20 * d, 5 * d);
	}
	else {
	triangle(5 * d, 0 * d, 20 * d, -5 * d, 20 * d, 5 * d);
	}
	pop();
}
