// Gets values of A, B, and name
// Adds A and B together
// Prints statement
function addFunction() {
	var A = $('#Anum').val();
	var B = $('#Bnum').val();
	if(A == '' || B == '') {
		alert('Please input two valid numbers.');
		return;
	}
	var C = Number(A) + Number(B);
	var name = $('#name').val();
	if(name == '') {
		alert('Please input a name.');
	}
	else {
		alert('Hey ' + name + ', sum of ' + A + ' and ' + B + ' is ' + C + '!');
	}
}

function getWeather() {
	// If there is already a paragraph with the weather, 
	// don't add another one
	if($('#theTemp').length) {
		return;
	}
	// Fetch JSON from API
	// Convert from Kelvin to Fahrenheit 
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=426834b575ad9e957330144da9940740', function(data) {
		var AAtemp = data.main.temp; 
		AAtemp = (AAtemp * (9/5)) - 459.67;
		AAtemp = Math.round(AAtemp * 10) / 10;
		$("<br><br><p id=\"theTemp\"> It is currently " + AAtemp + " degrees (Fahrenheit) in Ann Arbor right now.</p>").insertAfter("#weatherButton");
	});
}