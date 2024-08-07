
const apikey = "b1bfd0930f422b7d7ef2ed212ca2a048";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    try {
        const response = await fetch(apiurl + city +` &appid=${apikey}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name; 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"; 

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "icons8-rain-64.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "icons8-drizzle-80.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "icons8-mist-64.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "icons8-snow-64.png";
        }
    } catch (error) {
        console.error('Error:', error);
        alert('City not found. Please try again.');
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});