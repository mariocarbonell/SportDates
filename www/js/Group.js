function Group(name, desc) {
	this.groupName = name;
	this.groupDescription = desc;
	this.groupId;
	this.userCreator; //tipo User
}

Group.fromJSON = function(json) {
	console.log("group json:" + json);
	json = JSON.parse(json);
	var group = new Group();
	group.groupId = json[0];
	group.groupName = json[1];
	group.groupDescription = json[2];
	
	var user = new User();
	user.userId = json[3];
	user.userName = json[4];
	user.nickName = json[5];
	group.userCreator = user;
	
	return group;
}