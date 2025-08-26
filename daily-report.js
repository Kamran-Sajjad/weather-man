import { weatherData } from "./combined-weather-data.js";
import { createBar,checkIsEmptyData } from "./utils.js";

export const getDailyChart = (data, year, month) => {
  const monthlyFilteredData = data.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });
if(checkIsEmptyData(monthlyFilteredData)) return;

  monthlyFilteredData.forEach((record) => {
    const date = new Date(record.date);
    const day = String(date.getDate()).padStart(2, "0");
    const maximumTemperatureBar = createBar(parseInt(record.maxTemperatureC), "\x1b[31m");
    const minimumTemperatureBar = createBar(parseInt(record.minTemperatureC), "\x1b[34m");
    console.log(`${day} ${maximumTemperatureBar} ${parseInt(record.maxTemperatureC)}C`);
    console.log(`${day} ${minimumTemperatureBar} ${parseInt(record.minTemperatureC)}C`);
  });
};

const year = 2005;
const month = 6;
console.log(
  `\n--------------Daily Temperature Bar Chart Report for ${year}/${month}-------\n`
);
getDailyChart(weatherData, year, month);
