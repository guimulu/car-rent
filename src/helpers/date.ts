export const formatDate = (date: Date) => {
  // TODO: use locale from settings
  return date.toLocaleDateString("en-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};
