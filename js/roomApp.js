var rooms = {
    "meetings": {
          "9am-11am": {"Room 1"  : 1, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 1, "Room 3"  : 0,}
          },
    "games": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 1, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 1, "Room 3"  : 1,}
          },
    "quiet time": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 1, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          },
    "learning": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 1,}
          },
    "working": {
          "9am-11am": {"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,},
          "12noon-2pm":{"Room 1"  : 1, "Room 2"  : 0, "Room 3"  : 1,},
          "3pm-5pm":{"Room 1"  : 0, "Room 2"  : 0, "Room 3"  : 0,}
          }
  };


function isAvailable(purpose, timeFrame) {
    console.log(purpose);
    console.log(timeFrame);
	var roomUnavailable = "There is no available room";
	var roomAvailable = [];
    console.log(rooms);
	var allrooms = rooms[purpose.toLowerCase()][timeFrame];
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
	var allrooms = rooms[purpose.toLowerCase()][timeFrame];
    console.log(purpose);
    console.log(timeFrame);
    console.log(roomNumber);
	var roomUnavailable = "This room is not available now";
	if (allrooms[roomNumber] !== 0 ) {
        
        return false;
    } else {
        allrooms[roomNumber] = 1;
        return true;
    }
  }


function renderAvail(rooms) {
    if (rooms === "There is no available room") {
        $('#available-rooms').html("<h3>"+rooms+"</h3>");
    } else {
        html_str='<div><h4>Available rooms('+rooms.length+'): </h4><select id="roomNum" class="select-form">';
        html_str += rooms.map(function(data){
            if (data) {
                return ("<option>"+data+"</option>");
            } else {
                return "";
            }
        });
        html_str+='</select></div>';
        $('#available-rooms').html(html_str);
    }
}

function renderMsg(booked, room, fullname){
    if (booked === true) {
        $('#last-page').css({display:"block"});
        $('#wrapper').css({display:"none"});
        $("#last-page-msg").html('<h1>Congratulations '+fullname+' you have booked '+room+ '</h1>');
    } else {
        $('#warning-msg').css({display:"block"});
        $('#warning-msg').html('<h4>Request not understood or you booked an unavailable room</h4>');
    }
}

function err(msg) {
    $('#warning-msg').css({display:"block"});
    $('#warning-msg').html('<h4>'+msg+'</h4>');
}