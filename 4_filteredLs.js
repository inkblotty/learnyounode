// FILTERED LS

var fs = require('fs');
var path = require('path');
var processDir = process.argv[2];
var fileEnd = process.argv[3];

function readDirContents(callback){
	fs.readdir(processDir, function doneReading(err, dirContents){
		var stuff = dirContents;

		dirContents.forEach(function(aFile){
			if (path.extname(aFile).slice(1) === fileEnd){
				callback(aFile);
			}
		})
	});
}

function logThings(stuff){
	console.log(stuff);
}

readDirContents(logThings);