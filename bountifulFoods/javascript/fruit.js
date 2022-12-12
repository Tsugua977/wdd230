const requestURL = 'json/fruits.json';
let incrementsFruit = 0;
let incrementsLabel = 0;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        const fruitsData = jsonObject;
        console.log("fruistdata:",fruitsData);
        fruitsData.forEach(displayFruits);
            
});

const select1 = document.querySelector('#fruitchoice1');
const output = select1.value;
console.log(output);

function displayFruits(fruits ) {
    let choice = document.createElement('option');

    choice.setAttribute('value', fruits.name);
    choice.text = fruits.name;

    console.log("fruit", choice);
    
    const choice1 = document.getElementById('fruitchoice1');
    choice1.appendChild(choice);
    
    /*let dropdown = document.createElement('select');
    let label = document.createElement('label');
    let choice = document.createElement('option');
    dropdown.setAttribute('name', 'firstFruit');
    dropdown.setAttribute('id', 'fruitchoice' + incrementsFruit++);
    choice.setAttribute('value', fruits.name);
    choice.innerHTML = fruits.name;
    
    label.setAttribute('class', 'fruitLabel');
    label.textContent = "Choose a fruit:";
    label.appendChild(dropdown)
    dropdown.appendChild(choice)
    
    document.querySelector('.fruitSelect').appendChild(label);*/
}

