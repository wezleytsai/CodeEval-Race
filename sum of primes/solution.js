var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  function isPrime(num) {
    if( num <= 1 ) return false;
    for( var i = 2; i < num; i++ ) {
      if( num % i === 0 ) return false;
    }
    return true;
  }

  var count = 0;
  var num = 2;
  var sum = 0;

  while( count < 1000 ) {
    if( isPrime(num) ) {
      sum += num;
      count++;
    }
    num++;
  }

  return sum;
}

