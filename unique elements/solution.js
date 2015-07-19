var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var arr = line.split(',').map(function(n){return parseInt(n);});
  var uniq = {};

  arr.forEach(function(el) {
    uniq[el] = el;
  });

  var uniqarr = [];
  for( var key in uniq ) {
    uniqarr.push(uniq[key]);
  }

  return uniqarr.join(',');
}
