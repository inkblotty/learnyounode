// TIME SERVER

var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
	var date = new Date();
	var formattedDate = date.getFullYear() + "-" + (Number(date.getMonth())+1).toString() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
	console.log(formattedDate + '\n');

	socket.write(formattedDate);
	socket.end();
});

server.listen(port);