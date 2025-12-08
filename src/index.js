function updateWeather(response) {
  let weatherTemperature = document.querySelector(".weather-temperature-value");
  currentTemperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#weather-city");
  city.innerHTML = response.data.city;
  weatherTemperature.innerHTML = currentTemperature;
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

searchCity("Seoul");
