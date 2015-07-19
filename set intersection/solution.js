var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var list1 = line.split(';')[0].split(',').map(function(n) {return parseInt(n); });
  var list2 = line.split(';')[1].split(',').map(function(n) {return parseInt(n); });

  var set = {};

  list1.forEach(function(n) {
    set[n] = n;
  });

  var shared = [];
  list2.forEach(function(n) {
    if( set.hasOwnProperty(n) ) {
      shared.push(n);
    }
  });

  return shared.join(',');
}
