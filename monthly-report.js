import { weatherData } from "./combined-weather-data.js";
import { checkIsEmptyData } from "./utils.js";
export const getMonthlyReport = (data, year, month) => {
  const monthlyFilteredData = data.filter((item) => {
    if (!item.date) return false;
    const yearFromDate = item.date.split("-")[0];
    const monthFromDate = item.date.split("-")[2];
    return parseInt(yearFromDate) === year && parseInt(monthFromDate) === month;
  });

  if(checkIsEmptyData(monthlyFilteredData)) return;

  let maximumTemperaturesSum = 0;
  let minimumTemperaturesSum = 0;
  let meanHumiditySum = 0;

  monthlyFilteredData.forEach((record) => {
    maximumTemperaturesSum += parseInt(record.maxTemperatureC);
    minimumTemperaturesSum += parseInt(record.minTemperatureC);
    meanHumiditySum += parseInt(record.meanHumidity);
  });

  console.log(
    `Highest Temperature Average: ${Math.round(
      maximumTemperaturesSum / monthlyFilteredData.length
    )}°C`
  );
  console.log(
    `Lowest Temperature Average: ${Math.round(
      minimumTemperaturesSum / monthlyFilteredData.length
    )}°C `
  );
  console.log(
    `Average Mean Humidity: ${Math.round(
      meanHumiditySum / monthlyFilteredData.length
    )}% `
  );
};

const month = 7;
const year = 2005;
console.log(
  `\n---------------Monthly Average Report for Month ${year}/${month}----------------------\n`
);
getMonthlyReport(weatherData, year, month);
