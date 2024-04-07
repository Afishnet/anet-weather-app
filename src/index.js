function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".current-city");
  let windSpeedElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector(".current-emoji");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}% `;
  descriptionElement.innerHTML = `${response.data.condition.description}`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "a35ff4541eo4f18t9b045cc14b82545c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-value");
  searchCity(searchInputElement.value);
}
searchCity("Noosa");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector(".current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
