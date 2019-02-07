/*
  team 3Zs - Stefan Tan and Zane Wang
  SoftDev2 pd8
  K03 -- They lock us in the tower whenever we get caught
  2019-02-04
*/

// instantiate canvas
var canvas = document.getElementById('playground');
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#00BFFF";

//dict to store start point of circle
var coords = {'x': canvas.width/2, 'y': canvas.height/2}

//state variables
var requestID = 0;
var radius = 0;
var growing = true;
var animated = false;

// button stops the animation on the canvas now
var stopIt = function (e) {
    console.log(requestID);
    if (requestID > 0) {
	console.log('Stopping animation');
	animated = false;
	window.cancelAnimationFrame(requestID);
    }
};

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopIt);

// draw dot, with origin at center of canvas
var dot = function (e) {
    console.log(requestID);
    var xCord = coords['x'];
    var yCord = coords['y'];
    // formatting using back tick string
    console.log('Starting animation');
    drawDot(xCord,yCord);
};

// draw dot given x and y coords
var drawDot = function (x, y){
    // clears canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.cancelAnimationFrame(requestID);
    // drawing an ellipse requires beginPath for the rendering context to
    // know where to start drawing the arc of the ellipse from
    ctx.beginPath();
    // ellipse params are (x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    // for a full dot, endAngle should be 2pi radians
    if (growing) {
	if (radius >= 0) {
	    ctx.ellipse(x, y, radius, radius, Math.PI/4, 0, 2 * Math.PI);
	    radius++;
	}
	if (radius * 2 >= canvas.width) {
	    growing = false;
	}
    }
    else {
	if (radius > 0) {
	    ctx.ellipse(x, y, radius, radius, Math.PI/4, 0, 2 * Math.PI);
	    radius--;
	}
	if (radius <= 0) {
	    growing = true;
	}
    }

    // end with the fill method to fill the arc with the current fill color
    ctx.fill();

    requestID = window.requestAnimationFrame(dot);
};

// button starts the animation on the canvas
var startButton = document.getElementById('circle');
startButton.addEventListener('click', function(e) {
    if (requestID == 0 || animated == false) {
	requestID = window.requestAnimationFrame(dot);
	animated = true;
    }
});

var clear = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// button starts the dvd animation
var dvdLogoSetup = function() {
    animated = false;
    window.cancelAnimationFrame (requestID);
    clear();

    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
    var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));

    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
    	rectX = rectX + xVel;
    	rectY = rectY + yVel;
    	ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

    	if (rectX + rectWidth == canvas.width || rectX == 0) {
    	    xVel *= -1;
    	}
    	if (rectY + rectHeight == canvas.height || rectY == 0) {
    	    yVel *= -1;
    	}

    	requestID = window.requestAnimationFrame(dvdLogo);
    };
    dvdLogo();
};


var dvdButton = document.getElementById('dvd');
dvdButton.addEventListener('click', dvdLogoSetup);
