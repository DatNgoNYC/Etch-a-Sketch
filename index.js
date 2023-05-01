drawCanvas(10);
/* Logic for the input form */
// Instantiate submitButton and add an event listener
const submitButton = document.querySelector('#canvas-size-form button');
submitButton.addEventListener('click', changeCanvasSize);

// Get the value of the input using the onClicked button
function changeCanvasSize() {
    inputValue = submitButton.previousElementSibling.value;
    drawCanvas(inputValue);
};

// Draws the canvas with the width parameter serving as both width and height
function drawCanvas(width) {
    // create a variable that is a div which will contain all the canvas cells.
    const temporaryInnerCanvas = document.createElement('div');
    temporaryInnerCanvas.setAttribute('id', 'inner-canvas');

    // draw the canvas. Populate the temporary innerCanvas variable above.
    // first for loop will create the rows
    for (let index = 0; index < width; index++) {
        const canvasRow = document.createElement('div');
        canvasRow.setAttribute('class', 'canvas-row');
        
        // create the cells inside the rows
        for (let index = 0; index < width; index++) {
            const canvasCell = document.createElement('div');
            canvasCell.setAttribute('class', 'canvas-cell');
            
            canvasRow.append(canvasCell);
        }

        temporaryInnerCanvas.append(canvasRow);
    }

    const innerCanvas = document.querySelector('#inner-canvas');
    innerCanvas.remove();
    const canvas = document.querySelector('#canvas');
    canvas.appendChild(temporaryInnerCanvas);
}