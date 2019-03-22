/*
Johnny Wong
SoftDev2 pd8
K15 -- Scattered
2019-03-22
*/

var dataSrc = "https://people.sc.fsu.edu/~jburkardt/data/csv/biostats.csv"

// each nested array represents a point (age, weight)
var data = [
  [41, 170], [42, 166], [32, 155], [39, 167],
  [30, 124], [33, 115], [26, 121], [30, 158],
  [53, 175], [32, 143], [47, 139], [34, 163],
  [23, 98], [36, 160], [38, 145], [29, 176],
  [28, 131]
];

// isolate ages into an array
var ages = data.map( function(point) {
    return point[0];
  }
);
// isolate weights into an array
var weights = data.map( function(point) {
    return point[1];
  }
);

console.log('Ages: ', ages);
console.log('Weights: ', weights);


// svg and d3 implementation
var body = d3.select('body');
// set margins so the scatterplot can be labeled
var margins = {top: 50, bottom: 50, left: 50, right: 50}
var height = 500 - margins.top - margins.bottom;
var width = 500 - margins.left - margins.right;

// set scales for axes
var xScale = d3.scaleLinear()
    .domain([0, d3.max(ages)])
    .range([0, width]);
var yScale = d3.scaleLinear()
    .domain([0, d3.max(weights)])
    .range([height, 0]);


var svg = body.append('svg')
    .attr('height', height + margins.top + margins.bottom)
    .attr('width', width + margins.left + margins.right)
  .append('g') // shift scatterplot down by (margins.left, margins.bottom)
    .attr('transform', `translate(${margins.left}, ${margins.bottom})`)

// set axes
var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);


// set dots
var circles = svg.selectAll('circle')
    .data(data)
    .enter()
  .append('circle')
    .attr('cx', function(d){return xScale(d[0]);})
    .attr('cy', function(d){return yScale(d[1]);})
    .attr('r', '7.5')
    .attr('stroke', 'black')
    .attr('fill', 'blue')
  .append('title')
    .text(function(d){
      return 'Age: ' + d[0].toString() + ', Weight: ' + d[1].toString();
    });

// append axes

// append x-axis
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)

// label x-axis
svg.append('text')
    .attr('transform', `translate(${width}, ${height - 10})`)
    .style('text-anchor', 'end')
    .text('Age');

// append y-axis
svg.append('g')
    .attr('class', 'axis')
    .call(yAxis);

// label y-axis
svg.append('text')
    .attr('transform', 'rotate(-90)') // rotate text counter clockwise 90 degrees
    .attr('x', -20)
    .attr('y', 20)
    .style('text-anchor', 'middle')
    .text("Weight");

var title = "Study of Age vs Weight"
// title scatterplot
svg.append('text')
    .attr('transform', `translate(${width/2}, -30)`)
    .style('text-anchor', 'middle')
    .text(title);

// end of scatterplot implementation


// citation
var div = body.append('div')
  .append('a')
    .text('Click for source')
      .attr('href', dataSrc);
// author
body.append('p')
    .text('Author: Johnny Wongtong');
