
//this funtion controls the city name change by adding event listner to the search button
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
    let cityElement = document.querySelector(".weather-app-city");
    cityElement.innerHTML = searchInput.value;
  }
  
  let searchFormElement = document.querySelector(".search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);


  //intergrating the api now
 