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