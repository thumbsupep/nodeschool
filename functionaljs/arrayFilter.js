function getShortMessages(messages) {
	var filtered = messages.filter(function (val, i){
		if(val.message.length<50)
			return true;
	})
	return filtered.map(function (value){
		return value.message;

	})
}
    
    module.exports = getShortMessages

