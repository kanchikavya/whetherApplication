function getWeather(){

let city = document.getElementById("cityInput").value.toLowerCase();

let weatherData = {

hyderabad:{
temp:32,
humidity:60,
condition:"Sunny",
icon:"☀"
},

delhi:{
temp:30,
humidity:55,
condition:"Cloudy",
icon:"☁"
},

chennai:{
temp:34,
humidity:70,
condition:"Hot",
icon:"🌤"
},

mumbai:{
temp:29,
humidity:80,
condition:"Rainy",
icon:"🌧"
},

london:{
temp:18,
humidity:65,
condition:"Cold",
icon:"❄"
}

};

let result = document.getElementById("weatherResult");

if(weatherData[city]){

let data = weatherData[city];

result.innerHTML = `

<h2>${city.toUpperCase()}</h2>

<div class="weather-icon">${data.icon}</div>

<p><b>Temperature:</b> ${data.temp}°C</p>

<p><b>Humidity:</b> ${data.humidity}%</p>

<p><b>Condition:</b> ${data.condition}</p>

`;

}else{

result.innerHTML="<p>City not found</p>";

}

}