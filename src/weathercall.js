export async function callWeatherApi(locationString) {
  const encodedAddress = encodeURIComponent(locationString);
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedAddress}?unitGroup=us&key=67TDA5CD756C8EGZHF33PNDE9&contentType=json
`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

export function createWeatherObject(weatherJsonObject) {
  return {
    currentTemp: weatherJsonObject.currentConditions.temp,
    currentTime: weatherJsonObject.currentConditions.datetime,
    resolvedAddress: weatherJsonObject.resolvedAddress,
    todayMax: weatherJsonObject.days[0].tempmax,
    todayMin: weatherJsonObject.days[0].tempmin,
  };
}
