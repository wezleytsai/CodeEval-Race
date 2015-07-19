var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var num = parseInt(line);
  if( num <= 1 ) return num;
  var series = [0, 1];
  while( series.length < num + 1 ) {
    series.push(series[series.length - 1] + series[series.length - 2]);
  }

  return series[num];
}
