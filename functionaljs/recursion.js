    function reduce(arr, fn, initial) {
	    if(arr.length == 1)
	    	return arr;
	    else
	    	return reduce(arr.splice(1,arr.length),fn,/*?*/);
    }
    
    module.exports = reduce