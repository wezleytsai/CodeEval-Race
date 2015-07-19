var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var n = parseInt(line.split(',')[0]);
  var m = parseInt(line.split(',')[1]);

  while( n >= 0 ) {
    n = n - m;
  }

  return n + m;
}
