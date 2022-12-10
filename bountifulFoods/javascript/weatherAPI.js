const currentTemp = document.querySelector("#temp");
const icon = document.querySelector("#weatherImg");
const weatherDescr = document.querySelector("#weatherType");
const humidity = document.querySelector("#humidity");
const tempOne = document.querySelector("#firstTemp");
const tempTwo = document.querySelector("#secondTemp");
const tempThree = document.querySelector("#thirdTemp");

const url ="https://api.openweathermap.org/data/2.5/forecast?q=Oceanside&units=imperial&appid=260a3a7e47300bf48bac3adb4b24461f";
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
    let temp = weatherData.list[0].main.temp.toFixed(0);
    const imgIcon = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const description = weatherData.list[0].weather[0].description;
    const humid = weatherData.list[0].main.humidity;

    icon.setAttribute("src", imgIcon);
    icon.setAttribute("alt", description);

    currentTemp.innerHTML = `${temp}&deg;F`;
    weatherDescr.textContent = description;
    humidity.textContent = `Humidity: ${humid}%`;

    let temp1 = weatherData.list[8].main.temp.toFixed(0);
    let temp2 = weatherData.list[16].main.temp.toFixed(0);
    let temp3 = weatherData.list[24].main.temp.toFixed(0);

    tempOne.innerHTML = `${temp1}&deg;F`;
    tempTwo.innerHTML = `${temp2}&deg;F`;
    tempThree.innerHTML = `${temp3}&deg;F`;
}