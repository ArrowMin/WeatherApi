import { callWeatherApi, createWeatherObject } from "./weathercall";

export function handleForm(submittedString) {
  const output = document.getElementById("output");
  async function testing() {
    try {
      const weatherJson = await callWeatherApi(submittedString);
      const weatherObject = createWeatherObject(weatherJson);
      console.log(
        weatherObject.currentTemp +
          " " +
          weatherObject.currentTime +
          " " +
          weatherObject.todayMax +
          " " +
          weatherObject.todayMin
      );
      output.textContent =
        "Displaying weather information for: " +
        weatherObject.resolvedAddress +
        " | Current Temperature is: " +
        weatherObject.currentTemp +
        " | Current Time is: " +
        weatherObject.currentTime +
        " | Today's max temp is: " +
        weatherObject.todayMax +
        " | Today's min temp is: " +
        weatherObject.todayMin;
    } catch (error) {
      output.textContent = `Error retrieving weather data for ${submittedString}`;
    }
  }
  testing();
}
