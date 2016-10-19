Storage.setUser = function(user){
	if (user instanceof User) {
		console.log("almacenando");
		window.localStorage.setItem("storedUserName", user.userName);
		window.localStorage.setItem("storedUserPassword", user.userPassword);
		window.localStorage.setItem("storedNickName", user.nickName);
		window.localStorage.setItem("storedUserId", user.userId);
		window.localStorage.setItem("storedUserDescription", user.userDescription);
		//console.log("almacenando fin: " + window.localStorage.getItem("storedUserId"));
	}
	return false;
}

Storage.getUser = function() {
	var user = new User();
	user.userName = window.localStorage.getItem("storedUserName");
	user.userPassword = window.localStorage.getItem("storedUserPassword");
	user.nickName = window.localStorage.getItem("storedNickName");
	user.userId = window.localStorage.getItem("storedUserId");
	user.userDescription = window.localStorage.getItem("storedUserDescription");
	//console.log("cargando user fin");
	
	return user;
}

Storage.getCurrentGroup = function() {
	return JSON.parse(window.localStorage.getItem("storedCurrentGroup"));
}
Storage.setCurrentGroup = function(obj) {
	//console.log("str: " + str["groupId"]);
	//console.log(str);
	window.localStorage.setItem("storedCurrentGroup", JSON.stringify(obj));
	//console.log(JSON.parse(window.localStorage.getItem("storedCurrentGroup"))["groupId"]);
}
Storage.getCurrentUser = function() {
	return JSON.parse(window.localStorage.getItem("storedCurrentUser"));
}
Storage.setCurrentUser = function(obj) {
	//console.log(obj);
	window.localStorage.setItem("storedCurrentUser", JSON.stringify(obj));
	//console.log(JSON.parse(window.localStorage.getItem("storedCurrentUser")));
}

Storage.getCurrentEvent = function() {
	return JSON.parse(window.localStorage.getItem("storedCurrentEvent"));
}
Storage.setCurrentEvent = function(obj) {
	//console.log("str: " + str["groupId"]);
	//console.log(str);
	window.localStorage.setItem("storedCurrentEvent", JSON.stringify(obj));
	//console.log(JSON.parse(window.localStorage.getItem("storedCurrentGroup"))["groupId"]);
}

Storage.clear = function() {
	window.localStorage.clear();
	//console.log("vaciado fin: " + window.localStorage.getItem("storedUserId"));
}

Storage.session = function() {
	//console.log("session: " + (window.localStorage.getItem("storedUserId")));
	return (window.localStorage.getItem("storedUserId") != null);
}