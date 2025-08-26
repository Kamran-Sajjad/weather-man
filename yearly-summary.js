import { weatherData } from "./combined-weather-data.js";
import { formatDate,checkIsEmptyData } from "./utils.js";

export const getYearlySummary = (data, year) => {
  const yearlyFilteredData = data.filter((item) => {
    if (!item.date) return false;
    const yearFromDate = item.date.split("-")[0];
    return parseInt(yearFromDate) === year;
  });


  if(checkIsEmptyData(yearlyFilteredData)) return;

  let highestTemperatureOfYear = yearlyFilteredData[0];
  let lowestTemperatureOfYear = yearlyFilteredData[0];
  let humidityOfYear = yearlyFilteredData[0];

  yearlyFilteredData.forEach((record) => {
    if (
      parseInt(record.maxTemperatureC) >
      highestTemperatureOfYear.maxTemperatureC
    )
      highestTemperatureOfYear = record;
    if (
      parseInt(record.minTemperatureC) < lowestTemperatureOfYear.minTemperatureC
    )
      lowestTemperatureOfYear = record;
    if (parseInt(record.maxHumidity) > humidityOfYear.maxHumidity)
      humidityOfYear = record;
  });

  console.log(
    `Highest Temperature of the Year: ${
      highestTemperatureOfYear.maxTemperatureC
    }°C on ${formatDate(highestTemperatureOfYear.date)}`
  );
  console.log(
    `Lowest Temperature of the Year: ${
      lowestTemperatureOfYear.minTemperatureC
    }°C on ${formatDate(lowestTemperatureOfYear.date)}`
  );
  console.log(
    `Maximun Humidity of the Year: ${
      humidityOfYear.maxHumidity
    }% on ${formatDate(humidityOfYear.date)}`
  );
};

const year = 2013;
console.log(
  `\n-----------Weather summary for year ${year}----------------------\n`
);
getYearlySummary(weatherData, year);
