// Server Imports
import 'dotenv/config';
import fetch from 'node-fetch';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Server Setup
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory/folder 
// files meaning the index.html, styles.css, etc.
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for getting current weather and forecast
app.get('/api/weather', async (req, res) => {
    // Get user input (city) and API key
    const city = req.query.city;
    const apiKey = process.env.OWAPI_KEY; // Get API key from .env file

    // Create URLs for getting current weather and forecast
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
        // Fetch current weather data
        const weatherResponse = await fetch(currentWeatherUrl);
        const weatherData = await weatherResponse.json();
        // Fetch forecast data
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        // Return both weather data and forecast data in the response
        res.json({
            weather: weatherData,
            forecast: forecastData.list // .list - get the list of forecasts
        });
    } catch (error) {
        // If error, return a 500 status code (server error)
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


// Start server on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
