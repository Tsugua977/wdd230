const requestURL = 'json/fruits.json';
newStorage = 0;
let outputResult = null;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        const fruitsData = jsonObject;
        console.log("fruistdata:",fruitsData);
        fruitsData.forEach(displayFruits);
    
    const fruitBtn = document.getElementById('fruitBtn');
    fruitBtn.addEventListener('click', (event) => {newStorage = checkOutput(fruitsData, event)});


});

function checkOutput(fruits, event) {
    event.preventDefault();

    let firstName = document.querySelector('.firstName').value;
    let email = document.querySelector('.email').value;
    let phoneNum = document.querySelector('.phoneNum').value;
    let instructions = document.querySelector('.specialInstructions').value; 

    outputResult = outputResult;

    if (firstName == '') {
        outputResult = false;
    }
    else if (email == '') {
        outputResult = false;
    }
    else if (phoneNum == '') {
        outputResult = false;
    }
    else if (instructions == '') {
        outputResult = false;
    }
    else {
        outputResult == true;
    }

    console.log(outputResult);
    
    if (outputResult == false) {
        console.log('Form missing information.');
        return
    }
    if (outputResult == true) {
        console.log('No missing information.');
    }

    fruitsList = [];
    const select1 = document.querySelector('#fruitchoice1');
    const output1 = select1.value;
    const select2 = document.querySelector('#fruitchoice2');
    const output2 = select2.value;
    const select3 = document.querySelector('#fruitchoice3');
    const output3 = select3.value;
    
    for (fruit of fruits) {     
        if (output1 == fruit.name) {
            fruitsList.push(fruit);
        }
        if (output2 == fruit.name) {
            fruitsList.push(fruit);
        }
        if (output3 == fruit.name) {
            fruitsList.push(fruit);
        }
    }
    console.log('In List', fruitsList);
    console.log('First Fruit: ', fruitsList[0].name);

    let drinkDiv = document.querySelector('.drinkDiv');

    console.log(firstName);
    console.log(email);
    console.log(phoneNum);
    console.log(instructions);

    clearDisplay();

    let drinkHeading = document.createElement('h2');
    let nameDisplay = document.createElement('p');
    let emailDisplay = document.createElement('p');
    let phoneDisplay = document.createElement('p');
    let fruit1 = document.createElement('p');
    let fruit2 = document.createElement('p');
    let fruit3 = document.createElement('p');
    let specialInstructions = document.createElement('p');
    let orderDate = document.createElement('p');
    let drinkInfo = document.createElement('h2');
    let carbohydrates = document.createElement('p');
    let protein = document.createElement('p');
    let fat = document.createElement('p');
    let sugar = document.createElement('p');
    let calories = document.createElement('p');

    drinkHeading.innerHTML = 'Your Drink';
    drinkHeading.setAttribute('id', 'checkIfEmpty');
    nameDisplay.innerHTML = `First Name: ${firstName}`;
    emailDisplay.innerHTML = `Email: ${email}`;
    phoneDisplay.innerHTML = `Phone Number: ${phoneNum}`;
    fruit1.innerHTML = `First Fruit: ${fruitsList[0].name}`;
    fruit2.innerHTML = `Second Fruit: ${fruitsList[1].name}`;
    fruit3.innerHTML = `Third Fruit: ${fruitsList[2].name}`;
    specialInstructions.innerHTML = `Extra Instructions: ${instructions}`;

    const today = new Date();
    const currentDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    
    const dateTime = `Date: ${currentDate}`;

    orderDate.innerHTML = `Order Date: ${dateTime}`;
    drinkInfo.innerHTML = 'Fruit Drink Information';

    carbohydrates.innerHTML = `Carbohydrates: ${Math.ceil(fruitsList[0].nutritions.carbohydrates + fruitsList[1].nutritions.carbohydrates + fruitsList[2].nutritions.carbohydrates)} grams`;
    protein.innerHTML = `Protein: ${Math.ceil(fruitsList[0].nutritions.protein + fruitsList[1].nutritions.protein + fruitsList[2].nutritions.protein)} grams`;
    fat.innerHTML = `Fat: ${Math.ceil(fruitsList[0].nutritions.fat + fruitsList[1].nutritions.fat + fruitsList[2].nutritions.fat)} grams`;
    sugar.innerHTML = `Sugar: ${Math.ceil(fruitsList[0].nutritions.sugar + fruitsList[1].nutritions.sugar + fruitsList[2].nutritions.sugar)} grams`;
    calories.innerHTML = `Calories: ${Math.ceil(fruitsList[0].nutritions.calories + fruitsList[1].nutritions.calories + fruitsList[2].nutritions.calories)} calories`;

    drinkDiv.appendChild(drinkHeading);
    drinkDiv.appendChild(nameDisplay);
    drinkDiv.appendChild(emailDisplay);
    drinkDiv.appendChild(phoneDisplay);
    drinkDiv.appendChild(fruit1);
    drinkDiv.appendChild(fruit2);
    drinkDiv.appendChild(fruit3);
    drinkDiv.appendChild(specialInstructions);
    drinkDiv.appendChild(orderDate);
    drinkDiv.appendChild(drinkInfo);
    drinkDiv.appendChild(carbohydrates);
    drinkDiv.appendChild(protein);
    drinkDiv.appendChild(fat);
    drinkDiv.appendChild(sugar);
    drinkDiv.appendChild(calories);

    if (localStorage.drinksSubmited) {
        localStorage.drinksSubmited = Number(localStorage.drinksSubmited) + 1;
        console.log(localStorage.drinksSubmited);
        localStorage.setItem('drinksSubmited', localStorage.drinksSubmited);
    }

}

function clearDisplay() {
    let drinkDiv = document.querySelector('.drinkDiv');

    drinkDiv.innerHTML = '';
}

function displayFruits(fruits) {
    let choice1 = document.createElement('option');
    let choice2 = document.createElement('option');
    let choice3 = document.createElement('option');

    choice1.setAttribute('value', fruits.name);
    choice1.text = fruits.name;
    choice2.setAttribute('value', fruits.name);
    choice2.text = fruits.name;
    choice3.setAttribute('value', fruits.name);
    choice3.text = fruits.name;
    
    const firstBox = document.getElementById('fruitchoice1');
    const secondBox = document.getElementById('fruitchoice2');
    const thirdBox = document.getElementById('fruitchoice3');
    firstBox.appendChild(choice1);
    secondBox.appendChild(choice2);
    thirdBox.appendChild(choice3);
}

