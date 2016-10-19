function Event() {
	this.eventId;
	this.eventName;
	this.eventDescription;
	this.userCreator;
	this.userCreatorName;
	this.groupId;
	this.activityName;
	this.startTime;
	this.startPlace;
}

Event.fromJSON = function(json) {
	json = JSON.parse(json);
	var ev = new Event();
	ev.eventId = json[0];
	ev.eventName = json[1];
	ev.eventDescription = json[2];
	ev.userCreator = json[3];
	ev.userCreatorName = json[4];
	ev.groupId = json[5];
	ev.activityName = json[6];
	ev.startTime = json[7];
	ev.startSite = json[8];
}