function updateWeather(response) {
  let weatherTemperature = document.querySelector(".weather-temperature-value");
  let city = document.querySelector("#weather-city");
  let description = document.querySelector("#description");
  let currentTemperature = Math.round(response.data.temperature.current);
  let descriptionElement = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");

  icon.innerHTML = `<img src="${response.data.condition.icon_url}" alt="Weather Icon" class="weather-app-icon"/>`;
  timeElement.innerHTML = formateDate(date);
  windSpeed.innerHTML = response.data.wind.speed + "km/h";
  humidity.innerHTML = response.data.temperature.humidity + "%";
  description.innerHTML = descriptionElement;
  city.innerHTML = response.data.city;
  weatherTemperature.innerHTML = currentTemperature;
}

function formateDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = weekDays[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "7b83at211fa42375b047407234bfo5f1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);
