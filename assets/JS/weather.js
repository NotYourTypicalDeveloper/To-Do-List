const weatherLink = $('#weather-link');
const weatherDiv = $('#weather-div');
var weatherKey = config.Weather_API_key;


function toggleClassHidden() {
    weatherDiv.toggleClass('hidden');
}

weatherLink.on('click', toggleClassHidden);


