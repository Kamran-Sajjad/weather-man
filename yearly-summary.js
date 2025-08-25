import { weatherData } from "./combined-weather-data.js";
import { formatDate } from "./utils.js";

export const getYearlySummary = (data, year) => {
  const yearlyFilteredData = data.filter(
    (item) => new Date(item.date).getFullYear() === year
  );

  if (yearlyFilteredData.length === 0)
    console.log(`No weather data found for year ${year}`);

  const highestTemperatureOfYear = {
    temperature: parseInt(yearlyFilteredData[0].maxTemperatureC),
    date: yearlyFilteredData[0].date,
  };
  const lowestTemperatureOfYear = {
    temperature: parseInt(yearlyFilteredData[0].minTemperatureC),
    date: yearlyFilteredData[0].date,
  };
  const humidityOfYear = {
    level: parseInt(yearlyFilteredData[0].maxHumidity),
    date: yearlyFilteredData[0].date,
  };

  yearlyFilteredData.forEach((record) => {
    highestTemperatureOfYear.date =
      parseInt(record.maxTemperatureC) > highestTemperatureOfYear.temperature
        ? record.date
        : highestTemperatureOfYear.date;
    highestTemperatureOfYear.temperature =
      parseInt(record.maxTemperatureC) > highestTemperatureOfYear.temperature
        ? parseInt(record.maxTemperatureC)
        : highestTemperatureOfYear.temperature;

    lowestTemperatureOfYear.date =
      parseInt(record.minTemperatureC) < lowestTemperatureOfYear.temperature
        ? record.date
        : lowestTemperatureOfYear.date;
    lowestTemperatureOfYear.temperature =
      parseInt(record.minTemperatureC) < lowestTemperatureOfYear.temperature
        ? parseInt(record.minTemperatureC)
        : lowestTemperatureOfYear.temperature;

    humidityOfYear.date =
      parseInt(record.maxHumidity) > humidityOfYear.level
        ? record.date
        : humidityOfYear.date;
    humidityOfYear.level =
      parseInt(record.maxHumidity) > humidityOfYear.level
        ? parseInt(record.maxHumidity)
        : humidityOfYear.level;
  });

  console.log(
    `Highest: ${highestTemperatureOfYear.temperature}°C on ${formatDate(
      highestTemperatureOfYear.date
    )}`
  );
  console.log(
    `Lowest: ${lowestTemperatureOfYear.temperature}°C on ${formatDate(
      lowestTemperatureOfYear.date
    )}`
  );
  console.log(
    `Humidity: ${humidityOfYear.level}% on ${formatDate(humidityOfYear.date)}`
  );
};

const year = 2013;
console.log(`\n-----------Weather summary for year ${year}----------------------\n`);
getYearlySummary(weatherData, year);
