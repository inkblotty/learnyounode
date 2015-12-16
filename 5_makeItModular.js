// MAKE IT MODULAR -- include 6_module
var fs = require('fs');
var path = require('path');

var processDir = process.argv[2];
var fileExt = process.argv[3];

var fileReader = require("./learnyounode2.js");

function logThings(stuff){
	console.log(stuff);
}

fileReader(processDir, fileExt, logThings);
