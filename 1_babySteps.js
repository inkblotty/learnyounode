// BABY STEPS

var numArr = process.argv.slice(2);

console.log(numArr.reduce(function(a,b){
	return Number(a)+Number(b);
}));