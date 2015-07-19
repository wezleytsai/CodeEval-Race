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

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  for( var i = 1000; i >= 2; i-- ) {
    if( isPrime(i) && isPalindrome(i.toString()) ) {
      return i;
    }
  }
}