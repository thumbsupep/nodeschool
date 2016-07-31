var fs = require('fs');
var mymodule = require('./module.js');

mymodule(process.argv[2], process.argv[3], callback); //what if the module wasn't just a single function?

function callback(err, data){ //is there a way to put the callback function in the module and not the actual program?
	if(err) return console.error(error);
	data.forEach(function print(val, i){
			console.log(val);
	})
}

