// This part is for codding the id elements of germany page
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Url for the API of weather
//example to call this kind of API = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=cdc74a28490c0e57d724282f25576cff";


async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}
apiFetch();