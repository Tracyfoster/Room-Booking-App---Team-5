function rToDiv(d) {
	var json_data = JSON.parse(d);
	console.log(json_data[0].booked);
	document.getElementById("test").innerHTML = json_data;
	//return json_data[0].booked;
}

rToDiv(data);