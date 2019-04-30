/*
Johnny Wong
SoftDev2 pd8
K#21 -- Onions, Bell Peppers, and Celery, Oh My!
2019-04-29
*/

var file = "2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv"



d3.csv(file).then(function(data){

  // usage of map
  var diverseSchools = data.map(function(school){
    // returns array total num of asian, black, and hispanic students enrolled per school
    var totalOfMinority = parseInt(school['asian_num']) + parseInt(school['black_num']) + parseInt(school['hispanic_num']);
    return [school['Name'], totalOfMinority, school['schoolyear']];
  });
  console.log(diverseSchools);
  // reduce diverseSchools to school with largest totalOfMinority
  var maxMinority = diverseSchools.reduce(function(schoolA, schoolB){
    if (schoolA[1] > schoolB[1]){
      return schoolA;
    } else {
      return schoolB;
    }
  });
  console.log(maxMinority);

  // usage of filter
  var bigSchools = data.filter(function(school){
    // returns array of schools with more than 800 students
    return parseInt(school['total_enrollment']) > 800
  });
  console.log(bigSchools.length); // 2545 schools

  // usage of reduce
  var asianSchool = data.reduce(function(schoolA, schoolB){
    // returns array of the school with largest asian_per
    if (parseFloat(schoolA['asian_per']) > parseFloat(schoolB['asian_per'])){
      return schoolA;
    } else {
      return schoolB;
    }
  });
  console.log(asianSchool);

  var context = document.getElementById("context");
  context.innerHTML = `There were a total of <b>${data.length}</b> schools in the snapshot.`;

  var diversity = document.getElementById("diversity");
  diversity.innerHTML = `The school with the largest total of Asian, Black, and Hispanic students enrolled was <b>${maxMinority[0]}</b> with a total of <b>${maxMinority[1]}</b> in the year <b>${maxMinority[2]}</b>.`;

  var size = document.getElementById("size");
  size.innerHTML = `There were a total of <b>${bigSchools.length}</b> schools with total enrollment greater than 800. (Schools can be counted multiple times if they enroll this number of students more than 1 year.)`;

  var asian = document.getElementById("asian");
  asian.innerHTML = `The school with the greatest percentage of asian students enrolled was <b>${asianSchool['Name']}</b> with <b>${asianSchool['asian_per']}%</b> in the year <b>${asianSchool['schoolyear']}</b>.`;

});
