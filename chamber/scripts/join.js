//This following code is for the confirmation submission of the form
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// Populate the #results div with submitted form data


const resultElement = document.getElementById("results");
    
    if (resultElement) {
        resultElement.innerHTML = `
    <p><strong>First Name:</strong> ${myInfo.get('first')}</p>
    <p><strong>Last Name:</strong> ${myInfo.get('last')}</p>
    <p><strong>Title:</strong> ${myInfo.get('title-organizational')}</p>
    <p><strong>Email:</strong> ${myInfo.get('email')}</p>
    <p><strong>Phone Number:</strong> ${myInfo.get('phone-number')}</p>
    <p><strong>Business Name:</strong> ${myInfo.get('business')}</p>
    <p><strong>Business Description:</strong> ${myInfo.get('business-description')}</p>
    <p><strong>Membership Level:</strong> ${myInfo.get('level-membership')}</p>
    <p><strong>Submission Time:</strong> ${myInfo.get('timestamp')}</p>
    <h2>We are glad to having you here!</h2>
    `;
    } else {
        console.warn("⚠️ Element #results not found in the document.");
    }

// This code is for set the footer values
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

//This code is for get the time and date when the form is submitted
const timestampElement = document.getElementById("timestamp");
    
    if (timestampElement) {
        let now = new Date().toISOString().replace('T', ' ').slice(0, 16);
        timestampElement.value = now;
    } else {
        console.warn("⚠️ Element #timestamp not found in the document.");
    }

//This following code is to create the cards of membership and the descriptions
const levels = [
    {
        level: 'Non Profit',
        cost: '$0',
        benefits: [
            'Access to community events',
            'Listing in member directory',
            'Basic networking opportunities',
            'Quarterly newsletter',
            'Volunteer collaboration opportunities'
        ]
    },
    {
        level: 'Bronze',
        cost: '$100/year',
        benefits: [
            'All Non-Profit benefits',
            'Discounted event tickets',
            'Networking opportunities',
            'Access to online resource library',
            'Exclusive webinars with industry leaders',
            'Member badge for website'
        ]
    },
    {
        level: 'Silver',
        cost: '$250/year',
        benefits: [
            'All Bronze benefits',
            'Feature in monthly newsletter',
            'Access to premium workshops',
            'Advertisement opportunities',
            'Early access to new initiatives',
            'Personalized business consultation (1 session/year)',
            'Access to a mentorship program'
        ]
    },
    {
        level: 'Gold',
        cost: '$500/year',
        benefits: [
            'All Silver benefits',
            'Priority sponsorship opportunities',
            'Exclusive VIP events',
            'Dedicated business support',
            'Premium website placement',
            'Customized marketing package',
            'Speaking opportunities at events',
            'One-on-one strategy session with industry experts',
            'Access to private executive roundtable meetings',
            'Recognition in annual awards program'
        ]
    }
];

createCard(levels);


let card = document.createElement("div");

function createCard(levels) {
    let subCard =  document.querySelector("#membership-levels");

    if (!subCard) {
        console.error("Error: No se encontró el elemento #membership-levels");
        return;
    }

    subCard.innerHTML = "";
    
    levels.forEach(level => {
        let card = document.createElement("div");
        let name = document.createElement("h3");

        name.textContent = level.level;
        if (level.level == "Non Profit") {
            card.classList.add("nonprofit");
        } 
        if (level.level == "Bronze") {
            card.classList.add("bronze");
        }
        if (level.level == "Silver") {
            card.classList.add("silver");
        }
        if (level.level == "Gold") {
            card.classList.add("gold");
        }

        card.appendChild(name);

        card.addEventListener("click", () => {
            displayMembershipDetails(level)
        })
        document.querySelector("#membership-levels").appendChild(card);
    });
}

// THIS PART OF THE SCRIPT WILL ALLOW US TO USE THE DIALOG
const dialog = document.getElementById("level-description");

function displayMembershipDetails(level) {
    dialog.innerHTML = '';
    dialog.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${level.level}</h2>
    <p><strong>Cost</strong>: ${level.cost}</p>
    <p><strong>Benefits</strong>:</p>
    <p>✔️${level.benefits.join('<br>'+'✔️')}</p>
    `;

    dialog.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        dialog.classList.add("closing"); // Start closing animation

        setTimeout(() => {
            dialog.classList.remove("closing"); // Remove animation class
            dialog.close();
    }, 300);
    });
}
