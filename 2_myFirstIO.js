//SYNCHRONOUS I/O
var processFile = process.argv[2];
var fs = require('fs');

var buff = fs.readFileSync(processFile,'utf8');

var newLines = buff.split('').filter(function(letter){
	return letter === '\n' ;
}).length;

console.log(newLines);f