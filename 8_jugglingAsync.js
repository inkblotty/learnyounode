// JUGGLING ASYNC

var http = require('http');
var urlArr = process.argv.slice(2);

var endData = "";
var count = 0;

urlArr.forEach(function(url){
	http.get(url, function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk){
			endData+=chunk;
		});
		response.on('end', function(){
			count++;
			endData+='\n';

			if (count === urlArr.length){
				console.log(endData);
			}
		});
	})
});