//given a string of words, return an object with the words as keys and the number of times the word occurs as the values
function countWords(inputWords) {
      var returnObj = {};
      inputWords.reduce(function(returnVal,curr,index,arr){
      	returnVal[curr] = (returnVal[curr] + 1) || 1;
      	return returnVal;
      },returnObj);
      return returnObj; //if reduce took a really long time, would this return {} b/o asynchronicity?
}
    
    module.exports = countWords
