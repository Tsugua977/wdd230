const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url ="https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=8ca4010bd7a09945683fe3ab34f903f7";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const descr = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", descr);
    captionDesc.textContent = descr;
}