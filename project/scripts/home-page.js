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
//const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/chamber/data/interestingItems.json";

/*async function getItemsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.interestingsItems);
    return data.interestingsItems; //Return an array
};

//const cards = document.querySelector("#cards");

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

async function iniciate () {
    const defaults = await getItemsData(url);
    createCards(defaults)
}

iniciate();*/