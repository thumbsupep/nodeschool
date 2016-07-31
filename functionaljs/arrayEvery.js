function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function isInside(el){
        	return goodUsers.some(function (el2){
        		return el2.id == el.id;
        	});
        })
      };
}
    
    module.exports = checkUsersValid

