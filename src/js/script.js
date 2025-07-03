function buscarClima() {
  const city = document.getElementById("input-city").value;
  const apiKey = "13ae00d8533adac1ed43a3889fd74308";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&lang=pt_br&appid=${apiKey}`;

  const cityElement = document.querySelector("#city");
  const tempElement = document.querySelector("#temperature");
  const descElement = document.querySelector("#description");
  const weatherIconElement = document.querySelector("#weather-icon");
  const countryElement = document.querySelector("#country-icon");
  const humidityElement = document.querySelector("#humidity span");
  const windElement = document.querySelector("#wind span");

  const weatherContainer = document.querySelector("#weather-finding");

  fetch(weatherUrl)
    .then((res) => res.json())
    .then((data) => {
      cityElement.innerText = data.name;
      tempElement.innerText = `${Math.round(data.main.temp)}°C`;
      descElement.innerText = data.weather[0].description;
      weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
      countryElement.setAttribute(
        "src",
        `https://flagsapi.com/${data.sys.country}/flat/64.png`
      );
      humidityElement.innerText = `Umidade: ${data.main.humidity}%`;
      windElement.innerText = `Vento: ${data.wind.speed} km/h`;

      weatherContainer.classList.remove("hide");
    
    console.log(data);
    });
}


