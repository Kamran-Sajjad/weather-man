import { weatherData } from "./combined-weather-data.js";

export const getMonthlyReport = (data, year, month) => {
  const monthlyFilteredData = data.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear() === year && date.getMonth() + 1 === month;
  });

  if (monthlyFilteredData.length === 0) {
    console.log(`No weather data found for month ${year} ${month}`);
  }
  let sumOfMaximumTemperature = 0;
  let sumOfMinimumTemperature = 0;
  let sumOfMeanHumidity = 0;

  monthlyFilteredData.forEach((record) => {
    sumOfMaximumTemperature += parseInt(record.maxTemperatureC);
    sumOfMinimumTemperature += parseInt(record.minTemperatureC);
    sumOfMeanHumidity += parseInt(record.meanHumidity);
  });

  const averageMaximumTemperature = Math.round(
    sumOfMaximumTemperature / monthlyFilteredData.length
  );
  const averageMinimumTemperature = Math.round(
    sumOfMinimumTemperature / monthlyFilteredData.length
  );
  const averageMeanHumidity = Math.round(
    sumOfMeanHumidity / monthlyFilteredData.length
  );

  console.log(`Highest Temperature Average: ${averageMaximumTemperature}°C`);
  console.log(`Lowest Temperature Average: ${averageMinimumTemperature}°C `);
  console.log(`Average Mean Humidity: ${averageMeanHumidity}% `);
};

const month = 7;
const year = 2005;
console.log(
  `\n---------------Monthly Average Report for Month ${year}/${month}----------------------\n`
);
getMonthlyReport(weatherData, year, month);
