// HTTP CLIENT

var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	var body = "";

	response.on('data', function(chunk){
		body += chunk + "\n";
	});
	response.on('end', function(){
		console.log(body);
	})
});

/* official solution:
var http = require('http');
http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	reponse.on('data', console.log);
	response.on('error', console.error);
})
*/