import { weatherData } from "./combined-weather-data.js";

export const getMonthlyReport = (data, year, month) => {
  const monthlyFilteredData = data.filter((item) => {
    if (!item.date) return false;
    const yearFromDate = item.date.split("-")[0];
    const monthFromDate = item.date.split("-")[2];
    return parseInt(yearFromDate) === year && parseInt(monthFromDate) === month;
  });

  if (monthlyFilteredData.length === 0) {
    console.log(`No weather data found for month ${year} ${month}`);
    return;
  }
  let sumOfMaximumTemperature = 0;
  let sumOfMinimumTemperature = 0;
  let sumOfMeanHumidity = 0;

  monthlyFilteredData.forEach((record) => {
    sumOfMaximumTemperature += parseInt(record.maxTemperatureC);
    sumOfMinimumTemperature += parseInt(record.minTemperatureC);
    sumOfMeanHumidity += parseInt(record.meanHumidity);
  });

  console.log(
    `Highest Temperature Average: ${Math.round(
      sumOfMaximumTemperature / monthlyFilteredData.length
    )}°C`
  );
  console.log(
    `Lowest Temperature Average: ${Math.round(
      sumOfMinimumTemperature / monthlyFilteredData.length
    )}°C `
  );
  console.log(
    `Average Mean Humidity: ${Math.round(
      sumOfMeanHumidity / monthlyFilteredData.length
    )}% `
  );
};

const month = 7;
const year = 2005;
console.log(
  `\n---------------Monthly Average Report for Month ${year}/${month}----------------------\n`
);
getMonthlyReport(weatherData, year, month);
