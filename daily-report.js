import { weatherData } from "./combined-weather-data.js";
import { makeBar } from "./utils.js";

export const getDailyChart = (data, year, month) => {
  const monthlyFilteredData = data.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  if (monthlyFilteredData.length === 0) {
    console.log(`No weather data found for ${year}/${month}`);
  }

  monthlyFilteredData.forEach((record) => {
    const date = new Date(record.date);
    const day = String(date.getDate()).padStart(2, "0");
    const maximumTemperature = parseInt(record.maxTemperatureC);
    const minimumTemperature = parseInt(record.minTemperatureC);
    const maximumTemperatureBar = makeBar(maximumTemperature, "\x1b[31m");
    const minimumTemperatureBar = makeBar(minimumTemperature, "\x1b[34m");
    console.log(`${day} ${maximumTemperatureBar} ${maximumTemperature}C`);
    console.log(`${day} ${minimumTemperatureBar} ${minimumTemperature}C`);
  });
};

const year = 2005;
const month = 6;
console.log(
  `\n--------------Daily Temperature Bar Chart Report for ${year}/${month}-------\n`
);
getDailyChart(weatherData, year, month);
