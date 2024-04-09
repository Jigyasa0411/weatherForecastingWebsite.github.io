const apiKey = '1340c7647edbf321c6d7ab58975d2b95'; // Get your API key from a free weather API provider
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather() {
    const city = prompt('Enter city name:');
    if (!city) return;

    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('city').textContent = data.name;
        document.getElementById('temp').textContent = data.main.temp;
        document.getElementById('description').textContent = data.weather[0].description;
    } catch (error) {
        alert('Failed to fetch weather data. Please try again.');
        console.error('Error fetching weather data:', error);
    }
}
