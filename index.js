/*  --- Initial State --- */
/*  --- DESCRIPTION: the initial state of etch-a-sketch is a 10x10 canvas */
let canvasDimensions = 50;
drawCanvas(canvasDimensions);

/*  --- Logic for the input form --- */
/*  --- DESCRIPTION: THe input form (input and button) will change the canvas dimesions */
// Instantiate reference to the submitButton and add an event listener that will change the canvas dimension based on the input value;
const submitButton = document.querySelector("#canvas-size-form button");
submitButton.addEventListener("click", changeCanvasSize);

// Change canvas dimensions based on value of input element
function changeCanvasSize() {
	inputValue = submitButton.previousElementSibling.value;
	if (Object.is(parseInt(inputValue), NaN)) {
		// don't do anything if the input value is empty
		return;
	} else {
		canvasDimensions = parseInt(inputValue);
		drawCanvas(parseInt(inputValue));
	}
}

// Draws the canvas with the width parameter serving as both width and height
function drawCanvas(width) {
	const temporaryInnerCanvas = document.createElement("div"); // div which will contain all the canvas cells.
	temporaryInnerCanvas.setAttribute("id", "inner-canvas");
	console.log(typeof width);
	console.log(width);

	for (let index = 0; index < width; index++) {
		const canvasRow = document.createElement("div"); // Populate the temporaryInnerCanvas instantiated above
		canvasRow.setAttribute("class", "canvas-row");

		for (let index = 0; index < width; index++) {
			const canvasCell = document.createElement("div");
			canvasCell.setAttribute("class", "canvas-cell");
			canvasCell.addEventListener('mouseover', coloredIn); // Add an event listener to these cells

			canvasRow.append(canvasCell);
		}

		temporaryInnerCanvas.append(canvasRow);
	}

	const innerCanvas = document.querySelector("#inner-canvas");
	innerCanvas.remove();
	const canvas = document.querySelector("#canvas");
	canvas.appendChild(temporaryInnerCanvas);
}

/*  ---- Painting Canvas Logic ---- */
/*  ---- DESCRIPTION: Canvas cells will be colored in when hovered over */
// Create a function that toggles on the .colored class
function coloredIn(event) {
	event.target.classList.add('coloredIn');
}

/*  ---- Clear button logic --- */
/*  ---- DESCRIPTION: Clear button will return the canvas to a blank state */
// Reference to clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function() {
	drawCanvas(canvasDimensions);
});
// Add an event listener for when the button is clicked, will call clear canvas on event action. Clear canvas won't delete the div but change it's color to white/
