/*
zealousInquisition - Johnny Wong and Zane Wang
SoftDev2 pd8
K01 -- ...and I want to Paint It Better
2019-02-01
*/

// instantiate canvas
var canvas = document.getElementById('slate');
var ctx = canvas.getContext("2d");
var drawStyle = 'box';

// make canvas fill and stroke red
ctx.fillStyle = '#ff0000';
ctx.strokeStyle = '#ff0000';

// toggles between drawing a box or dot on mouse click within the canvas
// default style is drawing a box
var toggle = function (e) {
  var status = document.getElementById('state').innerHTML;
  if (status == 'Current Drawing State: Box'){
      document.getElementById('state').innerHTML = 'Current Drawing State: Dot';
      drawStyle = 'dot';
  }else{
      document.getElementById('state').innerHTML = 'Current Drawing State: Box';
      drawStyle = 'box';
  }
  console.log(document.getElementById('state').innerHTML);
};


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
  console.log('I am yeeting out all of the color in the canvas fam');
};

// button can clear the canvas now
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);
// button can toggle drawing style
var toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggle);


// draw box/dot, with origin at mouse click
var draw = function (e) {
  // e.offsetX and e.offsetY are the (x, y) coordinates that the mouse clicked on within the canvas
  // the coordinates are in respect to the canvas
  var xCord = e.offsetX;
  var yCord = e.offsetY;
  // formatting using back tick string
  console.log(`Coordinates: (${xCord}, ${yCord})`);
  if (drawStyle == 'box'){
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
