//selecting El
const cityInput = document.querySelector("#city");
const cityInputForm = document.querySelector(".CityInputForm");
const loc = document.querySelector(".location");
const temp = document.querySelector(".temp");
const condi = document.querySelector(".weather");
const day = document.querySelector(".day");

const cityAndCountry = document.querySelector(".cityAndCountry");
const dateAndTime = document.querySelector(".dateAndTime");
const wind = document.querySelector(".wind");
const precipitations = document.querySelector(".precipitations");
const humidity = document.querySelector(".humidity");
const cloud = document.querySelector(".cloud");

const removeInitials = () => {
    document.querySelector(".city").classList.add("hidden");
    document.querySelector(".noCity").classList.add("hidden");
};

const addMoreDetails = () => {
    document.querySelector(".details").classList.remove("hidden");
    document.querySelector(".moreDetails").classList.remove("hidden");
};

const getWeatherData = async () => {
    const city = cityInput.value;
    const API_KEY = "e9a6418b01ae41f4a38155958241103";

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=en`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    if (!response.ok) throw new Error("Could not fetch data..");

    removeInitials();
    addMoreDetails();

    //main info
    loc.textContent = data.location.name;
    temp.textContent = `Temperature: ${data.current.temp_c}°C`;
    day.textContent = "Today";
    condi.textContent = data.current.condition.text;
    document.querySelector(".wetherIcon").src = data.current.condition.icon;
    cityInput.value = "";

    //details
    cityAndCountry.textContent = `${data.location.name}, ${data.location.region} | ${data.location.country}`;
    dateAndTime.textContent = data.current.last_updated;
    wind.textContent = `${data.current.wind_kph} km/h`;
    precipitations.innerHTML = `${data.current.precip_mm} mm<sup>3</sup>`;
    humidity.textContent = `Humidity: ${data.current.humidity}`;
    cloud.textContent = `Clouds: ${data.current.cloud}`;
};

cityInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData();
});
