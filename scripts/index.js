const websocket_endpoint = "ws://localhost:19906";
var map = document.getElementById("map");
var areaname = document.getElementById("areaname");

var area1 = document.getElementById("area1");
var area2 = document.getElementById("area2");
var area3 = document.getElementById("area3");
var area4 = document.getElementById("area4");
var area5 = document.getElementById("area5");
var area6 = document.getElementById("area6");
var area7 = document.getElementById("area7");
var area8 = document.getElementById("area8");
var area9 = document.getElementById("area9");

var IsRandomizer = true;

window.onload = function () 
{
	ClearAll();
	const socket = new WebSocket(websocket_endpoint);
	socket.onmessage = event => appendData(JSON.parse(event.data));
}

function appendData(data) 
{
	console.log(data);
	if (data.Items.length > 0) {
		GetMap(data);
	}
	else {
		ClearAll();
		document.getElementById("DataDisruptor").innerHTML = `<div class="open"><div class="unobtained"></div></div>`;
	}
}

function ClearAll() {
	area1.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area2.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area3.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area4.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area5.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area6.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area7.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area8.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
	area9.querySelectorAll(".item").forEach(i => i.innerHTML = `<div class="closed"><div class="unobtained"></div></div>`);
}

function SetItems(data) {
	data.Items.forEach((item) => {
		document.getElementById(item.mName).innerHTML = `<div class="obtained"></div>`;
	});
}

function SetItemsRandom(data) {
	data.Items.forEach((item) => {
		for(var key in data.RandomItems) {
			  var value = data.RandomItems[key];
			  if (value == item.mName) {
				  document.getElementById(key).innerHTML = `<div class="obtained"></div>`;
			  }
		}
	});
}

function CheckOpen(data) {
	for (var i = 1; i < data.LocationsData.length; i++) {
		var IsOpen = false;
		if (data.LocationsData[i].RequiredPowers3 > 0 && !IsOpen) {
			console.log(data.LocationsData[i].RequiredPowers3);
			IsOpen = CheckPowers(data.CurrentPowers, data.LocationsData[i].RequiredPowers3);
		}

		if (data.LocationsData[i].RequiredPowers2 > 0 && !IsOpen) {
			console.log(data.LocationsData[i].RequiredPowers2);
			IsOpen = CheckPowers(data.CurrentPowers, data.LocationsData[i].RequiredPowers2);
		}

		if (!IsOpen) {
			console.log(data.LocationsData[i].RequiredPowers);
			IsOpen = CheckPowers(data.CurrentPowers, data.LocationsData[i].RequiredPowers);
		}

		if (IsOpen) {
			console.log(IsOpen);
			document.getElementById(data.LocationsData[i].VanillaItemName).innerHTML = `<div class="open"><div class="unobtained"></div></div>`;
		}
	}
}

var CheckPowers = (current_powers, required_powers) => {
	return ((current_powers & required_powers) === required_powers);
}

function GetMap(data) {
	var offset = 0;
	if (data.AreaName == "ABSU") {
		offset = ((684 - 304) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "1";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "ZI") {
		offset = ((684 - 284) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "1";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "KUR") {
		offset = ((684 - 544) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "1";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "INDI") {
		offset = ((684 - 104) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "1";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "UKKIN-NA") {
		offset = ((684 - 384) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "1";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "EDIN") {
		offset = ((684 - 244) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "1";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "E-KUR-MAH") {
		offset = ((684 - 444) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "1";
		area9.style.opacity = "0";
	}
	else if (data.AreaName == "MAR-URU") {
		offset = ((684 - 504) / 2) - 40;
		area1.style.opacity = "0";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "1";
	}
	else  {
		offset = ((684 - 344) / 2) - 40;
		area1.style.opacity = "1";
		area2.style.opacity = "0";
		area3.style.opacity = "0";
		area4.style.opacity = "0";
		area5.style.opacity = "0";
		area6.style.opacity = "0";
		area7.style.opacity = "0";
		area8.style.opacity = "0";
		area9.style.opacity = "0";
	}
	
	areaname.innerHTML = data.AreaName;
	areaname.style.top = `${offset}px`;

	CheckOpen(data);

	if (IsRandomizer) {
		SetItemsRandom(data);
	}

	else {
		SetItems(data);
	}
}