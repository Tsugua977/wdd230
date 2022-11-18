const currentTemp = document.querySelector("#temp");
const icon = document.querySelector("#weatherIcon");
const weatherDescr = document.querySelector("#weatherType");
const windSp = document.querySelector("#windSpeed");
const chill = document.querySelector("#windchill");

const url ="https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=8ca4010bd7a09945683fe3ab34f903f7";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {
    let temp = weatherData.main.temp.toFixed(0);
    let windSpeed = weatherData.wind.speed.toFixed(0);

    currentTemp.innerHTML = `${temp}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const descr = weatherData.weather[0].description;

    icon.setAttribute("src", iconSrc);
    icon.setAttribute("alt", descr);
    weatherDescr.textContent = descr;
    windSp.textContent = `Wind Chill: ${windSpeed} km/h`;

    if (temp < 50 & windSpeed > 3) {
        let fahrenheit = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
        let roundedFahr = Math.floor(fahrenheit);
        chill.innerHTML = ("Wind Chill = " + roundedFahr + " F");
        
    } else {
        chill.innerHTML = ("Wind Chill = N/A");
    }
}