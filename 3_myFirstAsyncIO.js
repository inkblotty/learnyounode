// ASYNCHRONOUS I/O
var fs = require('fs');
var processFile = process.argv[2];

function readNewLines(callback){
	fs.readFile(processFile, 'utf8', function doneReading(err, fileContents){
		var stuff = fileContents;

		var newLines = stuff.split('').filter(function(letter){
			return letter === "\n";
		}).length;

		callback(newLines);
	})
};

function logNewLines(things){
	console.log(things);
};

readNewLines(logNewLines);