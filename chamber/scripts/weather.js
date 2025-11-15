const weatherSection = document.querySelector('#weather'); 
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temp'); 
const captionDesc = document.querySelector('#description'); 
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');

const myKey = "901f17cccf19265d59af8f3c97819633"
const myLat = "39.814176"
const myLong = "-111.850587"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// ---------------- CURRENT WEATHER ----------------
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Current weather:", data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp}°F`;

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  highTemp.textContent = `${data.main.temp_max}°F`;
  lowTemp.textContent = `${data.main.temp_min}°F`;
  humidity.textContent = `${data.main.humidity}%`;
}

// ---------------- FORECAST ----------------
async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log("Forecast:", data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  const forecastContainer = document.querySelector("#forecast-cards");
  forecastContainer.innerHTML = "";

  // Filter for 3 entries each at 12:00 PM
  const noonForecasts = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3);

  noonForecasts.forEach(day => {
    const card = document.createElement("div");
    card.classList.add("forecast-item");

    const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });

    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
    const temp = `${day.main.temp.toFixed(0)}°F`;

    card.innerHTML = `
      <h4>${date}</h4>
      <img src="${icon}" alt="${day.weather[0].description}">
      <p>${temp}</p>
      <p>${day.weather[0].description}</p>
    `;

    forecastContainer.appendChild(card);
  });
}

// Run both
apiFetch();
getForecast();