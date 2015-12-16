// HTTP COLLECT

var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	var body = "";

	response.on('data', function(chunk){
		body += chunk;
	});
	response.on('end', function(){
		body = body.length.toString() + "\n" + body;
		console.log(body);
	})
});
