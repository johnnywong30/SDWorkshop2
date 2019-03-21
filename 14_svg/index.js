/*
Johnny Wong
SoftDev2 pd8
K14 -- Learning to Swim
2019-03-21
*/

var array = [42];


// selection is an array of arrays containing the selected body doc
var selection = d3.select("body");
console.log(selection);

var headingSelection = d3.selectAll('h2');
console.log(headingSelection);

var tableSelection = d3.selectAll('tr').selectAll('td');
console.log(tableSelection);

console.log(tableSelection.selectAll('span'));

// Null elements can occur when selection.select cannot find a
// matching element for the given selector.
// The select method must preserve the grouping structure, so it fills the missing slots with null
var sectionSelection = d3.selectAll('section');
console.log(sectionSelection);

console.log(sectionSelection.select('aside'));

// add doc to html
console.log(selection.datum(42).append('h1'));

var numbers = [4, 5, 18, 23, 42];

console.log('-----------------');
var letters = [{name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];


function name(d) {
  console.log(d);
  if (d != undefined){
    return d.name;
  }
  return d;
}
// letters is iterated through 6 times instead of 5, but the first time, d is undefined?
// why?
console.log(d3.selectAll('div').data(letters, name));
