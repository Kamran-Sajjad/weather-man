import { weatherData } from "./combined-weather-data.js";
import { printReport } from "./functions.js";

export const getMonthlyReport = (data, year, month) => {
  const monthlyData = data.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  if (monthlyData.length === 0) {
    throw new Error(`No weather data found for month ${year} ${month}`);
  }
  let sumMax = 0,
    maxLength = 0;
  let sumMin = 0,
    minLength = 0;
  let sumHumid = 0,
    hLength = 0;
  monthlyData.forEach((record) => {
    const max = parseInt(record.maxTemperatureC);
    const min = parseInt(record.minTemperatureC);
    const humid = parseInt(record.meanHumidity);

    if (!isNaN(max)) {
      sumMax += max;
      maxLength++;
    }
    if (!isNaN(min)) {
      sumMin += min;
      minLength++;
    }
    if (!isNaN(humid)) {
      sumHumid += humid;
      hLength++;
    }
  });
  const avgMaxTemp = Math.round(sumMax / maxLength);
  const avgMinTemp = Math.round(sumMin / minLength);
  const avgHumid = Math.round(sumHumid / hLength);

  return { avgMaxTemp, avgMinTemp, avgHumid };
};

const month = 6;
const year = 2005;
console.log(`Monthly Average Report for Month ${year}/${month}:`);
const report = getMonthlyReport(weatherData, year, month);
printReport(report);
