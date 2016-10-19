function User(uName, uPass, nName) {
	this.userName = uName;
	this.userPassword = uPass;
	this.nickName = nName;
	this.userId = null;
	this.userDescription = null;
}

User.fromJSON = function(json) {
	console.log("json: " + json);
	json = JSON.parse(json);
	var user = new User();
	user.userId = json[0];
	user.userName = json[1];
	user.userPassword = json[2];
	user.nickName = json[3];
	user.userDescription = json[4];
	return user;
}