const weatherLink = $('#weather-link');
const weatherDiv = $('#weather-div');

function toggleClassHidden() {
    weatherDiv.toggleClass('hidden');
}

weatherLink.on('click', toggleClassHidden);
