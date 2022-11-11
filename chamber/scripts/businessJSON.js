const requestURL = 'json/businesses.json';
const cards = document.querySelector('.grid');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayProphets);
    });

function displayProphets(businesses) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let busAddress = document.createElement('p');
    let busPhoneNum = document.createElement('p');
    let busWebsite = document.createElement('p');
    let busMembershipLevel = document.createElement('p');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `\ ${businesses.name}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', businesses.image);
    logo.setAttribute('alt', `\ Logo of ${businesses.name}`);
    logo.setAttribute('class', 'logoImgs')
    logo.setAttribute('loading', 'lazy');
    
    busAddress.textContent = `\ ${businesses.address}`;
    busPhoneNum.textContent = `\ ${businesses.phoneNum}`;
    busWebsite.textContent = `\ ${businesses.website}`;
    busMembershipLevel.textContent = `\ Membership Level: ${businesses.membershipLevel}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(busAddress);
    card.appendChild(busPhoneNum);
    card.appendChild(busWebsite);
    card.appendChild(busMembershipLevel);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.grid').appendChild(card);
}