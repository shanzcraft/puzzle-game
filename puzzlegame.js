// puzzle game 1.0
var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;

	window.onload = function(){
		// initialize the 5x5 board here
		for (let r = 0; r < rows; r++){
			for (let c = 0; c < columns; c++){
				// create <img> tag
				let tile = document.createElement("img");
				tile.src="./puzzleimages/blank2.jpg"
				
				// Drag functionality
				tile.addEventListener("dragstart", dragStart); // click on image to drag
				tile.addEventListener("dragover", dragOver);   // drag an image
				tile.addEventListener("dragenter", dragEnter); // dragging an image into another image
				tile.addEventListener("dragleave", dragLeave); // drop an image away from another image
				tile.addEventListener("drop", dragDrop);       // drop an image onto another image
				tile.addEventListener("dragend", dragEnd);     // after dragDrop is completed
				
				document.getElementById("board").append(tile);
			}
		}
	
	// pieces
	let pieces = [];
	for (let i = 1; i <= rows*columns; i++) {
		// put 1 to 25 (names of pieces) into the array
		pieces.push(i.toString());
	}
		
	// Fisher Yates shuffle
	for (let i = pieces.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[pieces[i], pieces[j]] = [pieces[j], pieces[i]];
	}
	
	for (let i = 0; i < pieces.length; i++) {
		let tile = document.createElement("img");
		tile.src = "./puzzleimages/" + pieces[i] + ".jpg";
		
		// Drag functionality
		tile.addEventListener("dragstart", dragStart); // click on image to drag
		tile.addEventListener("dragover", dragOver);   // drag an image
		tile.addEventListener("dragenter", dragEnter); // dragging an image into another image
		tile.addEventListener("dragleave", dragLeave); // drop an image away from another image
		tile.addEventListener("drop", dragDrop);       // drop an image onto another image
		tile.addEventListener("dragend", dragEnd);     // after dragDrop is completed
		
		document.getElementById("pieces").append(tile);
	}
}

// Drag Tiles
function dragStart() {
	currTile = this; // this refers to image that was clicked on for dragging
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
}

function dragLeave() {
	
}

function dragDrop() {
	otherTile = this; // this refers to image that is being dropped on
}

function dragEnd() {
	if (currTile.src.includes("blank")) {
		return;
	}
	let currImg = currTile.src;
	let otherImg = otherTile.src;
	currTile.src = otherImg;
	otherTile.src = currImg;
	
	turns += 1;
	document.getElementById("turns").innerText = turns;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	