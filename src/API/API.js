const url = `https://api.openweathermap.org/data/2.5/weather?q=Mogilev&lang=en&appid=98ecdb9364988a9953be656dac71e2db&units=metric`;

export async function fetchWeatherData() {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const weatherData = await response.json();
  return weatherData;
}
