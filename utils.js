export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};

export const createBar = (length, colorCode) => {
  if (length <= 0) return "";
  return colorCode + "+".repeat(length) + "\x1b[0m";
};

export const checkIsEmptyData = (data) => {
  if (!data || data.length === 0) {
    console.log("No weather data available.");
    return true;
  }
  return false;
}