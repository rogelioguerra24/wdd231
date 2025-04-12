// This part is to give date to the footer
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified");
last.innerHTML = `${lastModified}`;

// This part is to use the hamburguer selector of the page
const burgerElement = document.querySelector("#myButton");
const menuElement = document.querySelector("#animated-met");

burgerElement.addEventListener('click', () => {
    menuElement.classList.toggle('open');
    burgerElement.classList.toggle('open');
});

//This part is for creating the cards for the page 
//This is an example of export and import
//import { interestingsItems } from "./interestingItems.mjs";

//This is an example of fettching data with url in another web page
const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/chamber/data/interestingItems.json";

async function getItemsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.interestingsItems);
    return data.interestingsItems; //Return an array
};

const cards = document.querySelector("#cards");

function createCards(listItems) {
    cards.innerHTML = ""; // Clear previous content

    listItems.forEach(interestingItem => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("address");
        let text = document.createElement("p");
        let button = document.createElement("button");

        // Set content
        title.innerHTML = interestingItem.name;
        image.setAttribute("src", interestingItem.link);
        image.setAttribute("alt", interestingItem.name);
        image.setAttribute("loading", "lazy")
        address.innerHTML = `<strong>Address:</strong> ${interestingItem.address}`;
        text.innerHTML = interestingItem.description;
        button.textContent = "Learn more";

        // Append elements
        card.appendChild(image);
        card.appendChild(title);
        
        card.appendChild(address);
        card.appendChild(text);
        card.appendChild(button);

        // Append the card to the container
        cards.appendChild(card);
    });
}

async function iniciate () {
    const defaults = await getItemsData();
    createCards(defaults)
}

iniciate();

const currentDate = new Date();

    // Retrieve 'lastVisit' from localStorage
    const lastVisit = localStorage.getItem('lastVisit');

    // Check if the last visit exists in localStorage
    if (lastVisit) {
        // Parse the last visit date from localStorage (it is stored as a string)
        const lastVisitDate = new Date(lastVisit);

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - lastVisitDate;

        // Convert milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        
        let message = '';

        if (daysDifference < 1) {
            message = 'Welcome back! You just visited today.';
            } else if (daysDifference === 1) {
            message = 'It\'s been 1 day since your last visit.';
            } else {
            message = `It has been ${daysDifference} days since your last visit.`;
        }

        // Display the message in the sidebar
        document.getElementById('message').textContent = message;
    } else {
        // If no last visit date is stored, assume it's the user's first visit
        document.getElementById('message').textContent = 'Welcome! This is your first visit.';
    }

    // Store the current visit date in localStorage (save it as a string)
    localStorage.setItem('lastVisit', currentDate.toString());

    // Optionally log the value to the console to verify storage
    //console.log(localStorage.getItem('lastVisit'));  // Should show the stored date



/* 
This is an example of fettching data with url in another web page
const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/chamber/data/interestingItems.json";

async function getItemsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.interestingsItems);
    return data.interestingsItems; //Return an array
};

async function iniciate () {
    const defaults = await getItemsData(url);
    createCards(defaults)
}

iniciate();

*/