const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");


const displayProphets = (prophets) => {
    cards.innerHTML = ""; // Clear previous results

    prophets.forEach((prophet) => {
        
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card)
    });
}

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    return data.prophets; //Return an array
};

// Button event listeners
const all = document.querySelector("#all");
const utah = document.querySelector("#borninutah");
const outside = document.querySelector("#outside");
const moreyears = document.querySelector("#moreyears");
const morechildren = document.querySelector("#morechildren");
const moreservice = document.querySelector("#moreservice");

// Show all prophets
all.addEventListener("click", async () => {
    const prophets = await getProphetData();
    displayProphets(prophets);
});

// Show only prophets born in Utah
utah.addEventListener("click", async () => {
    const prophets = await getProphetData();
    const utahprophets = prophets.filter(prophet => prophet.birthplace === "Utah")
    displayProphets(utahprophets)
});

// Show prophets born outside Utah
outside.addEventListener("click", async () => {
    const prophets = await getProphetData();
    const outsideProphets = prophets.filter(prophet => prophet.birthplace !== "Utah");
    displayProphets(outsideProphets)
});

// Show prophets who lived the longest
moreyears.addEventListener("click", async () => {
    const prophets = await getProphetData();
    const moreYears = prophets.filter(prophet => {
        const birthDate = new Date(prophet.birthdate); // Convert birthdate to Date
        const deathDate = new Date(prophet.death); // Convert death to Date
        const age = deathDate.getFullYear() - birthDate.getFullYear()
        return age >= 95
    });
    displayProphets(moreYears)
});

// Show prophets with the most children
morechildren.addEventListener("click", async () => {
    const prophets = await getProphetData();
    const moreChildren = prophets.filter(prophet => prophet.numofchildren >= 10);
    displayProphets(moreChildren)
});


// Show prophets with the longest service
moreservice.addEventListener("click", async () => {
    const prophets = await getProphetData();
    const longService = prophets.filter(prophet => prophet.length >= 15);
    displayProphets(longService)
});



async function defaults () {
    const defaults = await getProphetData(url);
    displayProphets(defaults)
}

defaults();
