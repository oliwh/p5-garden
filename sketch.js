// Global variables
let Height = 400;
let cX = 0;

function setup() {
	frameRate(30);
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

// Border
	fill(0);
	rect(0, Height, width, 4);

}

function spawnCloud(y, n) {
	// n is the cloud type number
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
