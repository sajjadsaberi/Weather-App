const apiKey = '3b25d17acf02c0482f0ad00e907b96ec';
const searchInput = document.querySelector('input');
const searchButton = document.querySelector('button');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = `${data.name}, ${data.sys.country}`;
            temperatureElement.textContent = `${data.main.temp} °C`;
            descriptionElement.textContent = data.weather[0].description;
            humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
            windElement.textContent = `Wind speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.log('Error fetching weather data', error);
        });
});