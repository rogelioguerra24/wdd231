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

async function getClientData() {
    try {
        const response = await fetch(url);
        const data = await response.json();  
        return data.ourClients; //Return an array
    }catch(error){
        console.log(error);
    }
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
    const defaults = await getClientData(url);
    let randomData = getRandomItems(defaults)
    createCards(randomData)
}

iniciate();

// This part is for codding the id elements of weather part
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const highSpan = document.querySelector('#high');
const lowSpan = document.querySelector('#low');
const humiditySpan = document.querySelector('#humidity');
const cityName = document.querySelector('#city-name');

// Url for the API of weather
//example to call this kind of API = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//-12.047250315140355, -77.04278771333321 coordinates of Lima Peru
// API for one day "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=cdc74a28490c0e57d724282f25576cff"

const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=-12.04&lon=-77.04&units=metric&appid=cdc74a28490c0e57d724282f25576cff";

async function apiFetch () {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log("Datos recibidos:", data);  // Agregado para verificar
    let firstForecast = data.list[0];
    
    const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    let desc = firstForecast.weather[0].description;
    let high = firstForecast.main.temp_max;
    let low = firstForecast.main.temp_min;
    let humidity = firstForecast.main.humidity;
    let city = data.city.name;
    
    cityName.innerHTML = `${city}, Perú`;
    currentTemp.innerHTML = `<strong>Current Weather: </strong>${firstForecast.main.temp}&deg;C`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1).toLowerCase();
    highSpan.innerHTML = `<strong>High Temperature: </strong>${high}&deg;C`;
    lowSpan.innerHTML = `<strong>Low Temperature: </strong>${low}&deg;C`;
    humiditySpan.innerHTML = `<strong>Humidity: </strong> ${humidity}`;
}
apiFetch();