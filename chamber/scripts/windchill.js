const windP = document.querySelector(".windchill");

let temp = 50;
let windSpeed = 3;

let fahrenheit = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;

let roundedFahr = Math.floor(fahrenheit);

if (temp > 50 || windSpeed < 3) {
    windP.innerHTML = ("Wind Chill = N/A");
} else {
    windP.innerHTML = ("Wind Chill = " + roundedFahr + " F");
}
