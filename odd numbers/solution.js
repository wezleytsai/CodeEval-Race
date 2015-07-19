var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});


function solution(line){
  var odds = [];
  for( var i = 1; i < 100; i++ ) {
    if( i % 2 !== 0) odds.push(i);
  }
  return odds.join('\n');
}
