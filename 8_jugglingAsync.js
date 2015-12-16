// JUGGLING ASYNC

var http = require('http');
var urlArr = process.argv.slice(2);

var endData = [];
var count = 0;

urlArr.forEach(function(url){
	var data = "";
	var index = urlArr.indexOf(url);
	http.get(url, function(response){
		response.setEncoding('utf8');
		response.on('data', function(chunk){
			data+=chunk;
		});
		response.on('end', function(){
			count++;
			data+='\n';
			endData[index]=data;

			if (count === urlArr.length){
				var endStr = "";
				endData.forEach(function(element){
					endStr+=element;
				});

				console.log(endStr);
			}
		});
	})
});