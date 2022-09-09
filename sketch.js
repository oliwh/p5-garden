// Global variables
let Height = 400;

function setup() {
	createCanvas(700, 600);
	background(255);
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
}

function draw() {
	let gY = 150;
// Background
	noStroke();
	fill(skyColPic.color());
	rect(0, 0, width, Height);

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

// Border
	fill(0);
	rect(0, Height, width, 4);

}
