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

// This part is for codding the id elements of weather part
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const highSpan = document.querySelector('#high');
const lowSpan = document.querySelector('#low');
const humiditySpan = document.querySelector('#humidity');
const sunriseSpan = document.querySelector('#sunrise');
const sunsetSpan = document.querySelector('#sunset');


const todaySpan = document.querySelector('#today');
const wednesdaySpan = document.querySelector('#wednesday');
const thursdaySpan = document.querySelector('#thursday');
// Url for the API of weather
//example to call this kind of API = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// API for one day "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=cdc74a28490c0e57d724282f25576cff"

const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=metric&appid=cdc74a28490c0e57d724282f25576cff";

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
    let sunrise = data.city.sunrise;
    let sunset = data.city.sunset;
    
    todaySpan.innerHTML = `${firstForecast.main.temp}&deg;C`
    wednesdaySpan.innerHTML = `${data.list[28].main.temp}&deg;C`
    thursdaySpan.innerHTML = `${data.list[39].main.temp}&deg;C`

    currentTemp.innerHTML = `${firstForecast.main.temp}&deg;C`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    highSpan.innerHTML = `${high}&deg;C`
    lowSpan.innerHTML = `${low}&deg;C`
    humiditySpan.textContent = humidity;
    sunriseSpan.textContent = sunrise;
    sunsetSpan.textContent = sunset;
}
apiFetch();


//This part is for creating the cards for the page
const url = "https://raw.githubusercontent.com/rogelioguerra24/wdd231/refs/heads/main/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    return data.companies; //Return an array
};

const displayCompanies = (companies) => {
    cards.innerHTML = ""; // Clear previous results

    companies.forEach((company) => {
        
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let memberLevel = document.createElement("h3");
        let informationDiv = document.createElement("div");
        let textDiv = document.createElement("div");
        let portrait = document.createElement("img");
        let adress = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let webSite = document.createElement("a");
        let dataadress = document.createElement("span");
        let dataphone = document.createElement("span");
        
        //This part is for fulfill the things with content
        fullName.textContent = `${company.name}`;
        memberLevel.innerHTML = `Ranking ${company.memberLevel}`;

        portrait.setAttribute("src", company.iconOrImages);
        portrait.setAttribute("alt", `Logo of ${company.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "80");
        portrait.setAttribute("height", "80");
        informationDiv.setAttribute("class", "container");

        dataadress.innerHTML = company.adress
        adress.textContent = `Adress: `;

        dataphone.innerHTML = company.phoneNumber
        phoneNumber.textContent = `Phone Number: `;
        webSite.setAttribute("href", company.websiteUrl);
        webSite.textContent = company.websiteUrl.slice(8);
        

        adress.appendChild(dataadress);
        phoneNumber.appendChild(dataphone);


        //This is to append all to the section part
        informationDiv.appendChild(portrait);
        textDiv.appendChild(adress);
        textDiv.appendChild(phoneNumber);
        textDiv.appendChild(webSite);
        informationDiv.appendChild(textDiv);
        card.appendChild(fullName);
        card.appendChild(memberLevel);
        card.appendChild(informationDiv);
        cards.appendChild(card);
    });
}

let dataArray = getCompaniesData(url)


function getRandomItems(array) {
    return array.sort(() => Math.random() - 0.5).slice(0, 3);
}

async function iniciate () {
    const defaults = await getCompaniesData(url);
    let randomData = getRandomItems(defaults)
    displayCompanies(randomData)
}

iniciate();