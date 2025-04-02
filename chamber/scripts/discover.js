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


//This part is to create the cards for the page
const url = "../data/interestingItems.json"
const cards = document.querySelector("#cards");





async function getInterestingData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.interestingItems; // Ensure you return the full object
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

function createCards(listItems) {
    cards.innerHTML = ""; // Clear previous content

    listItems.forEach(interestingItem => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let text = document.createElement("p");
        let button = document.createElement("button");

        // Set content
        title.innerHTML = interestingItem.name;
        image.setAttribute("src", interestingItem.link);
        image.setAttribute("alt", interestingItem.name);
        address.innerHTML = `<strong>Address:</strong> ${interestingItem.address}`;
        text.innerHTML = interestingItem.description;
        button.textContent = "Learn more";

        // Append elements
        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(text);
        card.appendChild(button);

        // Append the card to the container
        cards.appendChild(card);
    });

async function initialize() {
    const data = await getInterestingData();
    if (data) createCards(data);
}

// Initialize the script
initialize();

}