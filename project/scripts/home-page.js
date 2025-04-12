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

//This is an example of fettching data with url in another web page
const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/project/data/ourClients.json";

async function getItemsData() {
    const response = await fetch(url);
    const data = await response.json();  
    return data.ourClients; //Return an array
};

const cards = document.querySelector("#cards");

function createCards(ourClients) {
    cards.innerHTML = ""; // Clear previous content

    ourClients.forEach(ourClient => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("address");
        let text = document.createElement("p");

        // Set content
        title.innerHTML = ourClient.name;
        image.setAttribute("src", ourClient.link);
        image.setAttribute("alt", ourClient.alt);
        image.setAttribute("loading", "lazy")
        address.innerHTML = `<strong>Address:</strong> ${ourClient.address}`;
        text.innerHTML = ourClient.comment;
        // Append elements
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(text);

        // Append the card to the container
        cards.appendChild(card);
    });
}

function getRandomItems(array) {
    return array.sort(() => Math.random() - 0.5).slice(0, 6);
}

async function iniciate () {
    const defaults = await getItemsData(url);
    let randomData = getRandomItems(defaults)
    createCards(randomData)
}

iniciate();