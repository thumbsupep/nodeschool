var fs = require('fs');
var http = require('http');

var arr1 = [];
var arr2 = [];
var arr3 = [];

//for each argv:
// http.get(argv, function (response){
// 	response.on("data", function (err, data){
// 		console.log(data); //this will print out of order. see line 88 for fix
// 	})
// })

//weird way
function first(callback){
	http.get(process.argv[2], function thendothis(response){
		response.setEncoding('utf8')
		response.on("error", function(err){
			console.error(err);
		})
		response.on("data", function (data){
			arr1.push(data);
		})
		response.on("end", function (){
			callback(arr1.join(''),last)
		})
	})

}

function second(input,callback){
	console.log(input)
	http.get(process.argv[3], function thendothis(response){
		response.setEncoding('utf8')
		response.on("error", function(err){
			console.error(err);
		})
		response.on("data", function (data){
			arr2.push(data);
		})
		response.on("end", function (){
			callback(arr2.join(''))
		})

	})
}

function last(input){
	console.log(input);
	http.get(process.argv[4], function thendothis(response){
		response.setEncoding('utf8')
		response.on("error", function(err){
			console.error(err);
		})
		response.on("data", function (data){
			arr3.push(data);
		})
		response.on('end',function(){
			console.log(arr3.join(''))
		})

	})
}

first(second);

//actual solution
     // var http = require('http')  
     // var bl = require('bl')  
     // var results = []  
     // var count = 0  
       
     // function printResults () {  
     //   for (var i = 0; i < 3; i++)  
     //     console.log(results[i])  
     // }  
       
     // function httpGet (index) {  
     //   http.get(process.argv[2 + index], function (response) {  
     //     response.pipe(bl(function (err, data) {  
     //       if (err)  
     //         return console.error(err)  
       
     //       results[index] = data.toString()  
     //       count++  
       
     //       if (count == 3)  //nb: count makes sure you've gone through all 3 whereas index keeps track of which one you're on. index could be 3 but count could be 1
     //         printResults()  
     //     }))  
     //   })  
     // }  
       
     // for (var i = 0; i < 3; i++)  
     //   httpGet(i)  
