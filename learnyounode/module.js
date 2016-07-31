var fs = require('fs');
var arr = [];

module.exports = doStuff;

function doStuff(dir, fileExt, callback){
	fs.readdir(dir, function doneReading(err, listOfFiles){
		if(err) return callback(err);
		listOfFiles.forEach(function filter(val, i){
			if(val.indexOf("." + fileExt) > -1)
				arr.push(val);
		})
		return callback(err, arr);
	})
}
