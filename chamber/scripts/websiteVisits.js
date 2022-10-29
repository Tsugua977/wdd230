const visitDisplay = document.querySelector(".numberVisits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = "This is your first visit!";
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
