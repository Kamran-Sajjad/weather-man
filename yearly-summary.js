import { weatherData } from "./combined-weather-data.js";
import { printSummary } from "./functions.js";

export const getYearlySummary = (data, year) => {
  const yearlyData = data.filter((item) => {
    return new Date(item.date).getFullYear() === year;
  });

  if (yearlyData.length === 0) {
    throw new Error(`No weather data found for year ${year}`);
  }

  let highest = {
    temp: parseInt(yearlyData[0].maxTemperatureC),
    date: yearlyData[0].date,
  };
  let lowest = {
    temp: parseInt(yearlyData[0].minTemperatureC),
    date: yearlyData[0].date,
  };
  let humidity = {
    level: parseInt(yearlyData[0].maxHumidity),
    date: yearlyData[0].date,
  };

  yearlyData.forEach((record) => {
    const maxTemp = parseInt(record.maxTemperatureC);
    const minTemp = parseInt(record.minTemperatureC);
    const humid = parseInt(record.maxHumidity);

    if (maxTemp > highest.temp) highest = { temp: maxTemp, date: record.date };
    if (minTemp < lowest.temp) lowest = { temp: minTemp, date: record.date };
    if (humid > humidity.level) humidity = { level: humid, date: record.date };
  });

  return { highest, lowest, humidity };
};

const year = 2013;
console.log(`Weather summary for year ${year}:`);
const summary = getYearlySummary(weatherData, year);
printSummary(summary);
