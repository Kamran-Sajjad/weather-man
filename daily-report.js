import { weatherData } from "./combined-weather-data.js";
import { printChart } from "./functions.js";

export const getDailyChart = (data, year, month) => {
  const monthlyData = data.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  if (monthlyData.length === 0) {
    throw new Error(`No weather data found for ${year}/${month}`);
  }

  return monthlyData.map((record) => {
    const date = new Date(record.date);
    const day = String(date.getDate()).padStart(2, "0");
    const max = parseInt(record.maxTemperatureC);
    const min = parseInt(record.minTemperatureC);

    return {
      day,
      max: isNaN(max) ? null : max,
      min: isNaN(min) ? null : min,
    };
  });
};

const year = 2005;
const month = 6;
console.log(`Daily Temperature Chart for ${year}/${month}\n`);
const chartData = getDailyChart(weatherData, year, month);
printChart(chartData);
