/*
Johnny Wong
SoftDev2 pd8
K00 -- I See a Red Door...
2019-01-31
*/

// instantiate canvas
var canvas = document.getElementById('slate');
var ctx = canvas.getContext("2d");
var drawStyle = 'rectangle';

// make canvas fill and stroke red
ctx.fillStyle = '#ff0000';
ctx.strokeStyle = '#ff0000';

// toggles between drawing a rectangle or dot on mouse click within the canvas
// default style is drawing a rectangle
var toggle = function (e) {
  var status = document.getElementById('state').innerHTML;
  if (status == 'Current Drawing State: Rectangle'){
      document.getElementById('state').innerHTML = 'Current Drawing State: Dot';
      drawStyle = 'dot';
  }else{
      document.getElementById('state').innerHTML = 'Current Drawing State: Rectangle';
      drawStyle = 'rectangle';
  }
  console.log(document.getElementById('state').innerHTML);
};


// clears everything in the canvas
// starts from the origin of the canvas
var clear = function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log('I am yeeting out all of the color in the canvas fam');
};

// button can clear the canvas now
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);
// button can toggle drawing style
var toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggle);


// draw rectangle/dot, with origin at mouse click
var draw = function (e) {
  var bounds = canvas.getBoundingClientRect();
  var xBound = bounds['x'];
  var yBound = bounds['y'];
  // e.clientX and e.clientY are the (x, y) coordinates that the mouse clicked on
  var xCord = e.clientX - xBound;
  var yCord = e.clientY - yBound;
  // formatting using back tick string
  console.log(`Coordinates: (${xCord}, ${yCord})`);
  if (drawStyle == 'rectangle'){
    ctx.fillRect(xCord, yCord, 80, 80);
  }else{
    // drawing an ellipse requires beginPath for the rendering context to
    // know where to start drawing the arc of the ellipse from
    ctx.beginPath();
    // ellipse params are (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    // for a full dot, endAngle should be 2pi radians
    ctx.ellipse(xCord, yCord, 50, 50, Math.PI/4, 0, 2 * Math.PI);
    // end with the fill method to fill the arc with the current fill color
    ctx.fill();
  }
};

// add drawing ability on mouse click within canvas
canvas.addEventListener('click', draw);
