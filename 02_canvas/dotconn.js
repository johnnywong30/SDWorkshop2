/*
zealousInquisition - Johnny Wong and Zane Wang
SoftDev2 pd8
K02 -- Connecting the Dots
2019-02-04
*/

// instantiate canvas
var canvas = document.getElementById('playground');
var ctx = canvas.getContext("2d");

// make canvas fill in red and stroke in black
ctx.fillStyle = '#ff0000';
ctx.strokeStyle = '#000000';

// instantiate curr (x, y) coords as a dictionary
var coords = {'x': undefined, 'y': undefined}


// clears everything in the canvas
// starts from the origin of the canvas
var clear = function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*
  e.preventDefault()
  preventDefault prevents a default action from happening if an event is not handled
  similarly to a conditional
  We did not come to a consensus on what preventDefault should be used for in this assignment
  */
  coords = {'x': undefined, 'y': undefined}
  console.log('I am yeeting out all of the color in the canvas fam');
};

// button can clear the canvas now
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

// draw dot, with origin at mouse click
var draw = function (e) {
  // e.offsetX and e.offsetY are the (x, y) coordinates that the mouse clicked on within the canvas
  // the coordinates are in respect to the canvas
  var xCord = e.offsetX;
  var yCord = e.offsetY;
  // formatting using back tick string
  console.log(`Coordinates of click: (${xCord}, ${yCord})`);
  if (coords['x'] == undefined && coords['y'] == undefined){
    drawDot(xCord, yCord);
  }
  else {
    drawLine(xCord, yCord);
  }
  coords['x'] = xCord;
  coords['y'] = yCord;
};

// draw dot given x and y coords
var drawDot = function (x, y){
  // drawing an ellipse requires beginPath for the rendering context to
  // know where to start drawing the arc of the ellipse from
  ctx.beginPath();
  // ellipse params are (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
  // for a full dot, endAngle should be 2pi radians
  ctx.ellipse(x, y, 30, 30, Math.PI/4, 0, 2 * Math.PI);
  // end with the fill method to fill the arc with the current fill color
  ctx.fill();
};

// draw line to next dot given x and y coords
var drawLine = function (x, y){
  drawDot(x,y);
  ctx.beginPath();
  ctx.moveTo(coords['x'], coords['y']);
  ctx.lineTo(x, y);
  ctx.stroke();
}

// add drawing ability on mouse click within canvas
canvas.addEventListener('click', draw);
