/*
Johnny Wong
SoftDev2 pd8
K11 -- Ask Circles [Change || Die] …While On The Go
2019-03-18
*/

var pic = document.getElementById('vimage');
var rect = pic.getBoundingClientRect();
var requestID;
var moving = false;

var radius = 20;

// instantiate curr (x, y) coords as a dictionary
var coords = {'x': undefined, 'y': undefined}
pic.removeChild(pic.lastChild);


// draw dot, with origin at mouse click
var draw = function (e) {
  if (moving){
    return;
  };
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
  c.setAttribute("xVel", 1);
  c.setAttribute("yVel", 1);
  c.addEventListener("click", changeColor);
  pic.appendChild(c);
};

// change color if dot is clicked
var changeColor = function(e){
  if (moving){
    e.stopPropagation();
    return;
  };
  this.setAttribute("fill", "yellow");
  this.setAttribute("stroke", "yellow");
  // stops event click from propagating to svg element
  e.stopPropagation();
  this.addEventListener("click", moveDot);
};

// removes current dot and adds a new one to random location
var moveDot = function(e){
  // random coord
  var randX = Math.floor(Math.random() * parseInt(pic.getAttribute('width')));
  var randY = Math.floor(Math.random() * parseInt(pic.getAttribute('height')));
  console.log(randX, randY);
  pic.removeChild(this);
  drawDot(randX, randY);
};

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
  window.cancelAnimationFrame(requestID);
  moving = !moving;
};

// add clear ability on clear button
var but_clear = document.getElementById("but_clear");
but_clear.addEventListener('click', clear);


// move all dots
var moveAll = function(e){
  moving = true;
  var children = pic.childNodes;
  if (children.length == 0){
    return;
  };

  var width = parseInt(pic.getAttribute('width')) - radius;
  var height = parseInt(pic.getAttribute('height')) - radius;

  var move = function(){
    window.cancelAnimationFrame(requestID);
    // start at 1 since first element is a text element
    for (index = 0; index < children.length; ++index){
      var curr_child = children[index];

      var x = parseInt(curr_child.getAttribute('cx'));
      var y = parseInt(curr_child.getAttribute('cy'));

      var xVel = parseInt(curr_child.getAttribute('xVel'));
      var yVel = parseInt(curr_child.getAttribute('yVel'));


      if (x >= width || x <= radius){
        xVel *= -1;
      };
      if (y >= height || y <= radius){
        yVel *= -1;
      };

      curr_child.setAttribute('cx', x + xVel);
      curr_child.setAttribute('cy', y + yVel);
      curr_child.setAttribute('xVel', xVel);
      curr_child.setAttribute('yVel', yVel);
    };
    requestID = window.requestAnimationFrame(move);
  };
  move();
};

// add move ability to button
var but_move = document.getElementById("but_move");
but_move.addEventListener('click', moveAll);

var modVel = function(e){
  var children = pic.childNodes;
  if (children.length == 0){
    return;
  };
  var shadowCircles = [];
  for (index = 0; index < children.length; ++index){
    var curr_child = children[index];
    if (curr_child.getAttribute("fill") == "purple"){
      var x = parseInt(curr_child.getAttribute('cx'));
      var y = parseInt(curr_child.getAttribute('cy'));
      var xVel = parseInt(curr_child.getAttribute('xVel'));
      var yVel = parseInt(curr_child.getAttribute('yVel'));
      curr_child.setAttribute('xVel', xVel * 2);
      curr_child.setAttribute('yVel', yVel * 2);

      // spawn shadows of curr_child circle
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", radius);
      c.setAttribute("fill", "black");
      c.setAttribute("stroke", "black");
      c.setAttribute("opacity", 0.5);
      c.setAttribute("xVel", xVel * -1);
      c.setAttribute("yVel", yVel * -1);
      shadowCircles.push(c);
    };
  };
  for (index = 0; index < shadowCircles.length; ++index){
    pic.appendChild(shadowCircles[index]);
  };
};


// add special ability to ? button
var but_cool = document.getElementById("but_?");
but_cool.addEventListener("click", modVel);
