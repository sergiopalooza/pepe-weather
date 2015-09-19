$(document).ready(function(){
	var lat = 0;
	var longi = 0;
	function getLocation() { //checks if they allow geolocation
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } 
	    else { 
	        $("#coordinates").text("Geolocation is not supported by this browser."); 
	    }
	}
	
	function showPosition(position) {
	    //$('#coordinates').html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
	    // lat = Math.round(position.coords.latitude);
	    // longi = Math.round(position.coords.longitude);
	    lat = position.coords.latitude;
	    longi = position.coords.longitude;

	    $.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longi,
		success: function(data){
			console.log("success", data);
			var temp = ((data.main.temp) * (9/5) - 459.67);
			temp = temp.toFixed(2) + ' F'; //rounding and formatting
			$('#temp').text(temp);
			$('#city').text(data.name);
			$('#weather').text(data.weather[0].description);
			$('#icon').html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' />");
		}
		})
	}
getLocation();
	
	
	
	
});


