// Function for fetching current weather and hourly forecast data from server
function getWeather(defaultCity) {
    // Get user input (city)
    // defaultCity = 'Tempe'
    let city = defaultCity || document.getElementById('city').value;

    // Eval if user input is empty
    if (!city) {
        alert('Please enter a city');
        return;
    }

    // Create URL for retrieving weather and forecast
    const currentWeatherUrl = `/api/weather?city=${city}`;

    // Make API call to get current weather and hourly forecast
    fetch(currentWeatherUrl)
        .then(response => response.json()) // Convert response/data to JSON
        .then(data => {
            // Call display functions for weather & forecast data
            displayWeather(data.weather);
            displayHourlyForecast(data.forecast);
        })
        // If error, log to console
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    // Collect HTML elements
    const tempDivInfo = document.getElementById('tempDiv');
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const weatherIcon = document.getElementById('weatherIcon');

    // Check if API call was successful or if user input was an existing city
    // If city doesn't exist (aka 404), display error message
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name.toUpperCase(); // .toUpperCase() - sets string to all caps
        const temperature = Math.round((data.main.temp - 273.15) * 9 / 5 + 32); // formula is for Kelvin to Fahrenheit

        // Collect weather info
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        // Sets icon based on iconCode (aka the location's weather)
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        // Create HTML elements for weather info
        const temperatureHTML = `<p>${temperature}°F</p>`;
        const weatherHtml = `
            <p class="cityName">${cityName}</p>
            <p>${description}</p>
        `;

        // Set HTML to display weather
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        // Function used to showing the big main weather icon
        showImage();
    }
}

// Display the hourly forecast data
function displayHourlyForecast(hourlyData) {
    const forecastDiv = document.getElementById('forecastDiv');
    // Clear previous forecast
    forecastDiv.innerHTML = '';

    const next24Hrs = hourlyData.slice(0, 8); // 8 - number of items/forecast tiles
    next24Hrs.forEach(item => {
        // Get date and time of forecast item
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();

        // Get temperature of forecast item
        const temperature = Math.round((item.main.temp - 273.15) * 9 / 5 + 32); // formula is for Kelvin to Fahrenheit

        // Get weather icon code for forecast item
        // then turn it into a URL
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        // Create HTML elements containing all hourly forecast data
        const hourlyItemHtml = `
            <div class="hourlyItem">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°F</span>
            </div>
        `;
        // Add HTML to display the forecast data elements
        forecastDiv.innerHTML += hourlyItemHtml;
    });
}

// Function used to showing the big main weather icon 
function showImage() {
    const weatherIcon = document.getElementById('weatherIcon');

    // Sets weatherIcon to 'block' to make it visible.
    weatherIcon.style.display = 'block';
}


// Scroll Wheel event listener to mouse scroll forecastDiv horizontally
document.getElementById('forecastDiv').addEventListener('wheel', function (event) {
    // Only scroll if event is not a mouse movement event
    if (event.deltaY != 0) {
        event.preventDefault();

        // Scroll forecastDiv left by amount of scroll event
        this.scrollLeft += event.deltaY;
    }
});


// Get cloud element from the DOM
const cloud = document.querySelector('.cloud');

// Define offsets to adjust the cloud's position
const offsetX = -340;
const offsetY = -80;

// Mousemove event listener to track mouse position and update cloud position
document.addEventListener('mousemove', (e) => {
    // Get the mouses current X and Y position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Set cloud's position relative to the mouse position
    // Adds offsets to current mouse X and Y positions
    cloud.style.transform = `translate(${mouseX + offsetX}px, ${mouseY + offsetY}px)`;
});

