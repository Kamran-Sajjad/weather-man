export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const printSummary = (summary) => {
  console.log(
    `Highest: ${summary.highest.temp}°C on ${formatDate(summary.highest.date)}`
  );
  console.log(
    `Lowest: ${summary.lowest.temp}°C on ${formatDate(summary.lowest.date)}`
  );
  console.log(
    `Humidity: ${summary.humidity.level}% on ${formatDate(
      summary.humidity.date
    )}`
  );
};
export const printReport = (report) => {
  console.log(`Highest Average: ${report.avgMaxTemp}°C`);
  console.log(`Lowest Average: ${report.avgMinTemp}°C `);
  console.log(`Average Mean Humidity: ${report.avgHumid}% `);
};

const makeBar = (length, colorCode) => {
  if (length <= 0) return "";
  return colorCode + "+".repeat(length) + "\x1b[0m";
};

export const printChart = (chartData) => {
  chartData.forEach((dayData) => {
    const { day, max, min } = dayData;

    if (max !== null) {
      const maxBar = makeBar(max, "\x1b[31m");
      console.log(`${day} ${maxBar} ${max}C`);
    } else {
      console.log(`${day} max Temperature is null`);
    }

    if (min !== null) {
      const minBar = makeBar(min, "\x1b[34m");
      console.log(`${day} ${minBar} ${min}C`);
    } else {
      console.log(`${day} min Temperature is null`);
    }
  });
};
