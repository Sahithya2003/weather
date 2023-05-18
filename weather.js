const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc0c9187demsh710b98265deb957p1b0832jsn3661427b7b1d",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", async () => {
  const cityInput = document.getElementById("city");
  const city = cityInput.value;

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
    options
  );
  const result = await response.json();

  const weatherInfoDiv = document.getElementById("weather-info");
  const { temp_c, condition, humidity } = result.current;

  const weatherInfo = `
    <h2>Current Weather in ${city}</h2>
    <p>Temperature: ${temp_c} &deg;C</p>
    <p>Condition: ${condition.text}</p>
    <p>Humidity: ${humidity}%</p>
  `;

  weatherInfoDiv.innerHTML = weatherInfo;
});
