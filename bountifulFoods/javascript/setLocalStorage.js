if (localStorage.getItem('drinksSubmited') == null) {
    localStorage.setItem('drinksSubmited', 0);
}

let amount = document.querySelector('.drinkAmount');
amount.innerHTML = localStorage.drinksSubmited;