function refreshWeather(response){
    let temp = response.data.temperature.current;
    let tempValue = document.querySelector(".weather-app-temperature-value");
    tempValue.innerHTML = Math.round(temp);
    let cityElement = document.querySelector(".weather-app-city");
    cityElement.innerHTML = response.data.city;
}





function searchCity(city){
    //make api call and update interface
    let apiKey="f6798d1od35e6tf3299b1b04daacc83c";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}



//this funtion controls the city name change by adding event listner to the search button
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
    // let cityElement = document.querySelector(".weather-app-city");
    // cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector(".search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);


  searchCity("Polokwane")
 