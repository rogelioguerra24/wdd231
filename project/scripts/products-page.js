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


//This part is for creating the cards for the page 
import { products } from "../scripts/ourProducts.mjs";
const cards = document.querySelector("#cards");

console.log(products);


function createCards(ourProducts) {
    cards.innerHTML = ""; // Clear previous content

    ourProducts.forEach(product => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let img = document.createElement("img");
        

        name.textContent = product.productName;
        price.innerHTML = `<strong>Price:</strong> S/.${product.price.toFixed(2)}`;

        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.productName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(img);
        card.addEventListener("click", () => {
            displayMembershipDetails(product)
        })
        cards.appendChild(card);
    });
}

createCards(products);

const all = document.querySelector("#products-all");
const cookies = document.querySelector("#products-cookie");
const detergent = document.querySelector("#products-detergente");
const toiletPaper = document.querySelector("#products-toiletpaper");
const soda = document.querySelector("#products-soda");
const tunas = document.querySelector("#products-tunas");
const milks = document.querySelector("#products-milks");
const oil = document.querySelector("#products-oil");

all.addEventListener("click", () => {
	createCards(products);
});

cookies.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "cookie"));
});

detergent.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "cleaning"));
});

toiletPaper.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "Paper"));
});

soda.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "soda"));
});

tunas.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "tunas"));
});

milks.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "milk"));
});

oil.addEventListener("click", () => {
	createCards(products.filter(product => product.category == "oil"));
});

// This part is to use the hamburger selector of the page
const burgerElementFilter = document.querySelector("#buttonDisplay");
const menuElementFilter = document.querySelector("#animated-metFilter");

burgerElementFilter.addEventListener('click', () => {
    menuElementFilter.classList.toggle('open');
    burgerElementFilter.classList.toggle('open'); // toggle means change class list of in this case 'open'
});

// THIS PART OF THE SCRIPT WILL ALLOW US TO USE THE DIALOG
const dialog = document.getElementById("dialog-products");

function displayMembershipDetails(product) {
    dialog.innerHTML = '';
    dialog.innerHTML = `
    <button id="closeModal">❎</button>
    <img src="${product.imageUrl}" alt="${product.productName} loading="lazy"></img>
    <h2>${product.productName}</h2>
    <p>${product.description}<p>
    <p><strong>Category</strong>: ${product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}</p>
    <p><strong>Price</strong>: S/.${product.price.toFixed(2)}</p>
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

//To Save The information of a form
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
