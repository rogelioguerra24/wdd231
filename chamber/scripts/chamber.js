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
const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    return data.companies; //Return an array
};

const displayCompanies = (companies) => {
    cards.innerHTML = ""; // Clear previous results

    companies.forEach((company) => {
        
        let card = document.createElement("section");
        let portrait = document.createElement("img");
        let fullName = document.createElement("h2");
        let adress = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let webSite = document.createElement("a");
        let memberLevel = document.createElement("p");
        let slogan = document.createElement("h3");

        fullName.textContent = `${company.name}`;
        portrait.setAttribute("src", company.iconOrImages);
        portrait.setAttribute("alt", `Logo of ${company.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "80");
        portrait.setAttribute("height", "80");
        adress.textContent = `Adress: ${company.adress}`;
        phoneNumber.textContent = `Phone Number: ${company.phoneNumber}`;
        webSite.setAttribute("href", company.websiteUrl);
        webSite.textContent = company.websiteUrl.slice(8);
        memberLevel.innerHTML = `Ranking ${company.memberLevel}`;
        slogan.textContent = company.slogan;
        memberLevel.setAttribute("class", "level");
        adress.setAttribute("class", "adress");
        phoneNumber.setAttribute("class", "phone");
        slogan.setAttribute("class", "slogan")
        //card.setAttribute("class", "companies")

        card.appendChild(portrait);
        card.appendChild(slogan);
        card.appendChild(memberLevel);
        //card.appendChild(fullName);
        card.appendChild(phoneNumber);
        card.appendChild(adress);
        card.appendChild(webSite);
        cards.appendChild(card);
    });
}

async function iniciate () {
    const defaults = await getCompaniesData(url);
    displayCompanies(defaults)
}

iniciate();

/*This part is for organizing the card to grid and list */

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
