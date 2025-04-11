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