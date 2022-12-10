const requestURL = 'json/data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const businesses = jsonObject["businesses"];
        const tierBusinesses = [];
        for (const business of businesses)
            if (business.membershipLevel >= 3) {
                tierBusinesses.push(business);
            console.log(tierBusinesses);
            }
        
        var firstRan = Math.floor(Math.random() * tierBusinesses.length);
        var secondRan = Math.floor(Math.random() * tierBusinesses.length);
        while (firstRan == secondRan) {
            secondRan = Math.floor(Math.random() * tierBusinesses.length);
        }
        
        const firstBusiness = tierBusinesses[firstRan];
        const secondBusiness = tierBusinesses[secondRan];

        displayBusinesses(firstBusiness);
        displayBusinesses(secondBusiness);
});



function displayBusinesses(businesses) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let busAddress = document.createElement('p');
    let busPhoneNum = document.createElement('p');
    let busWebsite = document.createElement('p');
    let busMembershipLevel = document.createElement('p');

    h2.textContent = `\ ${businesses.name}`;

    logo.setAttribute('src', businesses.image);
    logo.setAttribute('alt', `\ Logo of ${businesses.name}`);
    logo.setAttribute('class', 'logoImgs')
    logo.setAttribute('loading', 'lazy');
    
    busAddress.textContent = `\ ${businesses.address}`;
    busPhoneNum.textContent = `\ ${businesses.phoneNum}`;
    busWebsite.textContent = `\ ${businesses.website}`;
    busMembershipLevel.textContent = `\ Membership Level: ${businesses.membershipLevel}`;

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(busAddress);
    card.appendChild(busPhoneNum);
    card.appendChild(busWebsite);

    document.querySelector('.spotlight').appendChild(card);
}