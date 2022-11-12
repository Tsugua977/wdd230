const dateDiv = document.querySelector(".fullDate");

let d = new Date();
let getYear = d.getFullYear();
let lastMod = new Date(document.lastModified);
let date = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(d);

document.getElementById("year").innerHTML = getYear;
document.getElementById("lastUpdate").innerHTML = lastMod;

dateDiv.innerHTML = date;

currentDate = d.getDay();

if (currentDate == 1 || currentDate == 2) {
    document.getElementById("meetingBanner").style.display = "block";
} else {
    document.getElementById("meetingBanner").style.display = "none";
};