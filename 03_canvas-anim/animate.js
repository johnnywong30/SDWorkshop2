/*
Johnny Wong
SoftDev2 pd8
K03 -- They lock us in the tower whenever we get caught
2019-02-06
*/

// instantiate vars
var requestID;
var radius = 0;
var growing;
var changing = false;

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var maxRadius = (canvas.width - 10) / 2;


var drawDot = function (e) {
  stopIt(e); // stop previous animation frame
  // on first click
  if (growing == undefined){
    growing = true;
  }
  // base case
  if (! changing){
    changing = true;
  }
  if (changing){
    requestID = window.requestAnimationFrame(drawDot)
    // draw the dot
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    // clear the previous dot
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw new dot
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    // facilitate growing
    if (growing){
      radius += 1;
    }
    // facilitate shrinking
    else{
      radius -= 1;
    }
    // stop growing if at maxRadius
    if (radius >= maxRadius){
      growing = false;
    // start growing
    }
    if (radius == 0){
      growing = true;
    }
  }

};

var stopIt = function (e) {
    if (changing) {
      console.log(requestID);
      window.cancelAnimationFrame(requestID);
      changing = false;
    }
};

var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
dotButton.addEventListener('click', drawDot);
stopButton.addEventListener('click', stopIt);
