import { callWeatherApi, createWeatherObject } from "./weathercall";
import { initializeForm } from "./ui";

initializeForm();
// async function testing() {
//   const weatherJson = await callWeatherApi("320 J Ave National City").catch(
//     alert
//   );
//   const weatherObject = createWeatherObject(weatherJson);
//   console.log(
//     weatherObject.currentTemp +
//       " " +
//       weatherObject.currentTime +
//       " " +
//       weatherObject.todayMax +
//       " " +
//       weatherObject.todayMin
//   );
// }

// testing();
