
  const weatherConditions = [
    "Sunny, 20°C",
    "Partly Cloudy, 18°C",
    "Cloudy, 15°C",
    "Rainy, 12°C",
    "Windy, 14°C",
    "Stormy, 10°C"
  ];
  function updateWeather() {
    const weatherElement = document.getElementById('weather');
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    weatherElement.textContent = randomCondition;
  }
  setInterval(updateWeather, 6000);
  updateWeather();

  function description(desc, bird) {
    if (bird == 1) {
      document.getElementById("bird1").textContent = desc
    }
  }
