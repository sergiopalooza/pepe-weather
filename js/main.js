$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=DeKalb, IL',
		success: function(data){
			console.log("success", data);
			$('#temp').text((data.main.temp) * (9/5) - 459.67);
			$('#city').text(data.name);
		}
	})
});