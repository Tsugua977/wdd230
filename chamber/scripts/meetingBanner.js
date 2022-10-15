const date = new Date();
currentDate = date.getDay();

if (currentDate == 1 || currentDate == 2) {
    document.querySelector("#meetingBanner").style.display = "block";
} else {
    document.querySelector("#meetingBanner").style.display = "none";
}


