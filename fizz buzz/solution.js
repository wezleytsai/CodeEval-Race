var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var nums = line.split(' ');
  var x = nums[0];
  var y = nums[1];
  var result = [];
  for( var i = 1; i <= nums[2]; i++ ) {
    if( i % x === 0 && i % y === 0) {
      result.push('FB');
      continue;
    }
    if( i % x === 0) result.push('F');
    if( i % y === 0) result.push('B');
    if( i % x !== 0 && i % y !== 0 ) result.push(i);
  }
  return result.join(' ');
}
