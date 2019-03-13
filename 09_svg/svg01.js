/*
Johnny Wong
SoftDev2 pd8
K09 -- Connect the Dots
2019-03-13
*/

var pic = document.getElementById('vimage');
var rect = pic.getBoundingClientRect();

// instantiate curr (x, y) coords as a dictionary
var coords = {'x': undefined, 'y': undefined}

// draw dot, with origin at mouse click
var draw = function (e) {
  var xCord = e.clientX - rect.left;
  var yCord = e.clientY - rect.top;
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
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 30);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  pic.appendChild(c);
};

// draw line to next dot given x and y coords
var drawLine = function (x, y){
  drawDot(x,y);
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", coords['x']);
  line.setAttribute("y1", coords['y']);
  line.setAttribute("x2", x);
  line.setAttribute("y2", y);
  line.setAttribute("stroke", "black");
  pic.appendChild(line);
}

// add drawing ability on mouse click within canvas
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
