var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var nums = line.split(',').map(function(str){ return parseInt(str); });
  var num = nums[0];
  var pos1 = nums[1];
  var pos2 = nums[2];

  var bits = nums[0].toString(2).split('').reverse();
  return bits[pos1 - 1] === bits[pos2 - 1];
}