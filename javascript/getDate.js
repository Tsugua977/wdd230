let d = new Date();
let getYear = d.getFullYear();
let lastMod = new Date(document.lastModified);

document.getElementById("year").innerHTML = getYear;
document.getElementById("lastUpdate").innerHTML = lastMod
