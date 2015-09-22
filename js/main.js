$(document).ready(function(){
	var lat = 0;
	var longi = 0;
	/*This function runs when the document is loaded
	to check if html 5 geolocation is allowed. This 
	will also not work on android phones that do not
	have location services enabled*/
	function getLocation() { //checks if they allow geolocation
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(getWeather);
	    } 
	    else { 
	        $("#temp").text("Geolocation is not supported by this browser."); 
	    }
	}
	
	function getWeather(position) {
	    lat = position.coords.latitude;
	    longi = position.coords.longitude;

	    $.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longi,
			success: function(data){
				console.log("success", data);
				var temp = ((data.main.temp) * (9/5) - 459.67); //temperature is given in kelvin. converting to F
				temp = temp.toFixed(2) + ' F'; //rounding and formatting
				$('#temp').text(temp);
				$('#city').text(data.name);
				$('#weather').text(data.weather[0].description);
				$('#icon').html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' />");
				
				var tempWeather = $("#weather").text();
				setBackground(tempWeather);		
			}
		});
	}

	
	/*This function takes the condition that is displayed
	  to the user and changes the background accordingly*/
	function setBackground(weather){
		switch (weather) {
			case "mist":
				$('#bg-image').css({
					'background-image': 'url(img/mist-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
				break;
			case "clear sky":
				$('body').css({
					'background-image': 'url(img/clearSky-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
				break;
			case "snow":
				$('body').css({
					'background-image': 'url(img/snow-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
				break;
			case "thunderstorm":
				$('body').css({
					'background-image': 'url(img/thunderstorm-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
				break;
			case "rain":
				$('body').css({
					'background-image': 'url(img/rain-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
				break;
			default: 
				$('body').css({
					'background-image': 'url(img/clouds-pepe.jpg)',
					'background-repeat': 'no-repeat',
					'background-size': 'cover'
				});
		}
	}
	getLocation();	
});


