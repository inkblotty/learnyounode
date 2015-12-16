// learnyounode2
/*
var fs = require('fs');
var path = require('path');

var readFiles = function(dirName, fileExt, callback){
	fs.readdir(dirName, function doneReading(err, dirContents){
		if (err) { return callback(err); }

		else {
			dirContents.forEach(function(aFile){
				if (path.extname(aFile).slice(1) === fileExt){
					callback(aFile);
				}
			})
		}
	})
}

module.exports = readFiles;
*/