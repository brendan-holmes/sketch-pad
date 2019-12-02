window.addEventListener('load', () => {
	console.log("Loaded window.");
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	const canvasOffset = $('canvas').offset();

	const clearButton = document.getElementById('clearButton');
	setCanvasSize();

	let drawing = false;
	let colour = "black";

	function startPosition(e) {
		drawing = true;
		draw(e);
	}

	function finishPosition() {
		drawing = false;
		ctx.beginPath();
	}

	function draw(e) {
		if (!drawing) return;

		ctx.lineWidth = 2;
		ctx.lineCap = 'round';

		let x = e.offsetX;
		let y = e.offsetY;
		ctx.lineTo(x, y);
		ctx.strokeStyle = colour;
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(x, y);
	}

	function clearCanvas() {
		console.log("Clearing canvas...");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function setColour(newColour) {
		colour = newColour;
		console.log("colour set to " + newColour)
	}

	//Event Listeners
	canvas.addEventListener('mousedown', startPosition);
	canvas.addEventListener('mouseup', finishPosition);
	canvas.addEventListener('mousemove', draw);

	clearButton.addEventListener('click', clearCanvas);
	black.addEventListener('click', () => {setColour("black")});
	red.addEventListener('click',  () => {setColour("red")});
	blue.addEventListener('click',  () => {setColour("blue")});
	green.addEventListener('click',  () => {setColour("green")});
	yellow.addEventListener('click',  () => {setColour("yellow")});
});

window.addEventListener('resize', () => {
	setCanvasSize();
});

function setCanvasSize() {
	canvas.height = window.innerHeight*0.6;// - headerHeight; // 5 for margin and 2 for border
	canvas.width = window.innerWidth*0.6;  // 5 for margin and 2 for border
}