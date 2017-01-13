var rooms = {
    "meetings": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          },
    "games": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          },
    "quiet time": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          },
    "learning": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          },
    "working": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          }
  };


function isAvailable(purpose, timeFrame) {
	var roomUnavailable = "There is no available room";
	var roomAvailable = [];
	var allrooms = rooms[purpose][timeFrame];
	for (var key in allrooms){
		if (allrooms[key] === 0 ){
	  		roomAvailable.push(key);
		}
	}   
	if (roomAvailable.length > 0) {
	  return roomAvailable;
	}else return roomUnavailable;
}

function bookRoom(purpose, timeFrame, roomNumber){
	var allrooms = rooms[purpose][timeFrame];
	var roomUnavailable = "This room is not available now";
	for (var key in allroom){
		if (allroom[key] === 0)	{
			allroom[key] = 1;
	      	return "This room has been booked for you";		
		}
	}
	return roomUnavailable;
  }
}

