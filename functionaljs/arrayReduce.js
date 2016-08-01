function countWords(inputWords) {
      var returnObj = {};
      inputWords.reduce(function(returnVal,curr,index,arr){
      	returnVal[curr] = (returnVal[curr] + 1) || 1;
      	return returnVal;
      },returnObj);
      return returnObj; //if reduce took a really long time, would this return {} b/o asynchronicity?
}
    
    module.exports = countWords
