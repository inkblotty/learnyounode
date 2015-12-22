// HTTP UPPERCASERER

var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = require(process.argv[2]);

var server = http.createServer(function(req, res){
	var outStream;

	res.pipe(map(function(chunk){
		chunk.toString().uppercase();
	})).pipe(outStream);
});

server.listen(port);