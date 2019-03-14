/*
Johnny Wong
SoftDev2 pd8
K10 -- Connect the Dots
2019-03-14
*/

var pic = document.getElementById('vimage');
var rect = pic.getBoundingClientRect();

var radius = 30;

// instantiate curr (x, y) coords as a dictionary
var coords = {'x': undefined, 'y': undefined}

// draw dot, with origin at mouse click
var draw = function (e) {
  var xCord = e.clientX - rect.left;
  var yCord = e.clientY - rect.top;
  // formatting using back tick string
  console.log(`Coordinates of click: (${xCord}, ${yCord})`);
  drawDot(xCord, yCord);
  coords['x'] = xCord;
  coords['y'] = yCord;
};

// draw dot given x and y coords
var drawDot = function (x, y){
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", radius);
  c.setAttribute("fill", "purple");
  c.setAttribute("stroke", "purple");
  c.addEventListener("click", changeColor);
  pic.appendChild(c);
};

// change color if dot is clicked
var changeColor = function(e){
  this.setAttribute("fill", "yellow");
  this.setAttribute("stroke", "yellow");
  // stops event click from propagating to svg element
  e.stopPropagation();
  this.addEventListener("click", moveDot);
}

// removes current dot and adds a new one to random location
var moveDot = function(e){
  // random coord
  var randX = Math.floor(Math.random() * (pic.width.baseVal.value));
  var randY = Math.floor(Math.random() * (pic.height.baseVal.value));
  console.log(randX, randY);
  pic.removeChild(this);
  drawDot(randX, randY);
}

// add drawing ability on mouse click within svg
pic.addEventListener('click', draw);

// clear svg of all child nodes
var clear = function (e) {
  while (pic.lastChild){
    // log what childNode is being removed
    console.log(pic.lastChild);
    pic.removeChild(pic.lastChild);
  }
  // reset coords to undefined
  coords = {'x': undefined, 'y': undefined}
}

// add clear ability on clear button
var but_clear = document.getElementById("but_clear");
but_clear.addEventListener('click', clear);
