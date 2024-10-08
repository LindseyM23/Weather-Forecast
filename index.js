function refreshWeather(response){
    let temp = response.data.temperature.current;
    let tempValue = document.querySelector(".weather-app-temperature-value");
    tempValue.innerHTML = Math.round(temp);
    let cityElement = document.querySelector(".weather-app-city");
    cityElement.innerHTML = response.data.city;
   
    //frtching the description of the weather
    let description = document.querySelector(".description");
    let descriptionValue = response.data.condition.description;
    description.innerHTML =descriptionValue;



//fetching time of the city
let date = new Date(response.data.time * 1000 )
let time = document.querySelector(".time");
let timeValue = `${date.getHours()}:${date.getMinutes()}`;
time.innerHTML = formatDate(date);

console.log(response.data.condition.icon_url)
//fetching humidity
let humidity = document.querySelector(".humidity");
let humidityValue = `${response.data.temperature.humidity}%`;
humidity.innerHTML = humidityValue;

//fetching wind 
let wind = document.querySelector(".wind");
let windValue = `${response.data.wind.speed} km/h`;
wind.innerHTML= windValue;

//fetching weather icon 
let icon = document.querySelector(".icon");
let iconValue = response.data.condition.icon_url;
icon.innerHTML = `<img src="${iconValue}" alt="weather icon">`


getForecast(response.data.city);
}

function formatDate(date){

let minutes = date.getMinutes();
let hours = date.getHours();
let days =["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
let day = days[date.getDay()];

if (minutes< 10){
    minutes = `0${minutes}`
}
if (hours <10){
    hours = `0${hours}`
}

return `${day} ${hours}:${minutes}`;
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
  getForecast("Polokwane")

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[date.getDay()];
  }





function getForecast(city){
    let apiKey="f6798d1od35e6tf3299b1b04daacc83c"
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
}





















function displayForecast(response) {
let forecastHtml = ""
    
    response.data.daily.forEach(function (day,index) {
        if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          <div class="weather-forecast-icon"> <img src="${day.condition.icon_url}"</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>${Math.round(day.temperature.maximum)}°</strong>
            </div>
            <div class="weather-forecast-temperature">${Math.round(day.temperature.minimum)}°</div>
          </div>
        </div>
      `;
};
})

  
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  }

displayForecast()