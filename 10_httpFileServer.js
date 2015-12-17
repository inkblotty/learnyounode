// HTTP FILE SERVER

var http = require('http');
var fs = require('fs');
var port = process.argv[2];

var server = http.createServer(function(req, res){

});

server.listen(port);