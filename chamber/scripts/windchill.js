const windP = document.querySelector(".windchill");
let tempHTML = document.querySelector(".temp");
let windSpeedHTML = document.querySelector(".windSpeed");

let temp = Number(tempHTML.innerHTML);
let windSpeed = Number(windSpeedHTML.innerHTML);

if (temp < 50 & windSpeed > 3) {
    let fahrenheit = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
    let roundedFahr = Math.floor(fahrenheit);
    windP.innerHTML = ("Wind Chill = " + roundedFahr + " F");
    
} else {
    windP.innerHTML = ("Wind Chill = N/A");
}