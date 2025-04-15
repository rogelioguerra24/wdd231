// This part is to use the hamburguer selector of the page
const burgerElement = document.querySelector("#myButton");
const menuElement = document.querySelector("#animated-met");

burgerElement.addEventListener('click', () => {
    menuElement.classList.toggle('open');
    burgerElement.classList.toggle('open'); //toggle means change class list of in this case'open'
});

// This part is to give date to the footer
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

//This following code is for the confirmation submission of the form
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// Populate the #results div with submitted form data
const resultElement = document.getElementById("results");
    
    if (resultElement) {
        resultElement.innerHTML = `
    <p><strong>First Name:</strong> ${myInfo.get('first')}</p>
    <p><strong>Last Name:</strong> ${myInfo.get('last')}</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Phone Number:</strong> ${myInfo.get('phone-number')}</p>
    <p><strong>Address:</strong> ${myInfo.get('address')}</p>
    <p><strong>Submission Time:</strong> ${myInfo.get('timestamp')}</p>
    <h2>We are glad to having you here ${myInfo.get('first')}!</h2>
    `;
    } else {
        console.warn("⚠️ Element #results not found in the document.");
    }

//This code is for get the time and date when the form is submitted
const timestampElement = document.getElementById("timestamp");
    
    if (timestampElement) {
        let now = new Date().toISOString().replace('T', ' ').slice(0, 16);
        timestampElement.value = now;
    } else {
        console.warn("⚠️ Element #timestamp not found in the document.");
    }

//To Save The information of a footer form
const form = document.querySelector('#formone');//Here you decide which form you want to save

//Instead of using the submit button with an id you can only use teh following code
//with addEventListener.
form.addEventListener('submit', (e) => {
    //Here you are setting the values in the array Json in the Aplication part of the page
    const name = form.elements['name'].value;
    const phoneNumber = form.elements['phoneNumber'].value;
    const data = { name, phoneNumber };

    const storedData = JSON.parse(localStorage.getItem('dataClient')) || [];
    storedData.push(data);

    localStorage.setItem('dataClient', JSON.stringify(storedData));
});

//To Save The information of a footer form
const majorForm = document.querySelector('#collectData');//Here you decide which form you want to save

//Instead of using the submit button with an id you can only use teh following code
//with addEventListener.
majorForm.addEventListener('submit', (e) => {
    //Here you are setting the values in the array Json in the Aplication part of the page
    const name = majorForm.elements['first'].value;
    const lastName = majorForm.elements['last'].value;
    const email = majorForm.elements['email'].value;
    const phoneNumber = majorForm.elements['phone-number'].value;
    const address = majorForm.elements['address'].value;
    const data = { name, phoneNumber, lastName, email, address};

    const storedData = JSON.parse(localStorage.getItem('majorData')) || [];
    storedData.push(data);

    localStorage.setItem('majorData', JSON.stringify(storedData));
});
