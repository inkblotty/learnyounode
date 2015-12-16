// JUGGLING ASYNC

var http = require('http');
var urlArr = process.argv.slice(2);

var endData = "";
var count = 0;

urlArr.forEach(function(url){
	var data = "";
	http.get(url, function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk){
			data+=chunk;
		});
		response.on('end', function(){
			count++;
			data+='\n';
			endData+=data;

			if (count === urlArr.length){
				console.log(endData);
			}
		});
	})
});