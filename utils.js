export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
};



export const makeBar = (length, colorCode) => {
  if (length <= 0) return "";
  return colorCode + "+".repeat(length) + "\x1b[0m";
};


