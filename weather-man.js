import { getYearlySummary } from "./yearly-summary.js";
import { getMonthlyReport } from "./monthly-report.js";
import { getDailyChart } from "./daily-report.js";
import { weatherData } from "./combined-weather-data.js";

getYearlySummary(weatherData, 2013);
getMonthlyReport(weatherData, 2005, 6);
getDailyChart(weatherData, 2005, 7);
