$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longi,
		success: function(data){
			console.log("success", data);
			$('#temp').text(((data.main.temp) * (9/5) - 459.67) + ' F');
			$('#city').text(data.name);
		}
	})
	
	var lat, longi = 0;
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } 
	    else { 
	        $("#coordinates").text("Geolocation is not supported by this browser."); 
	    }
	}
	
	function showPosition(position) {
	    $('#coordinates').html("Latitude: " + position.coords.latitude +
	    "<br>Longitude: " + position.coords.longitude); 
	    lat = position.coords.latitude;
	    longi = position.coords.longitude;
	    console.log(lat, longi);
	}
	getLocation();
});


