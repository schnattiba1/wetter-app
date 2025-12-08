function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input").value;
  let city = document.querySelector("#weather-city");
  city.innerHTML = searchInput;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);
