var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  nums = line.split(',').map(function(str) { return parseInt(str); });
  num1 = nums[0];
  num2 = nums[1];

  while( num2 <= num1 ) {
    num2 += num2;
  }

  return num2;
}
