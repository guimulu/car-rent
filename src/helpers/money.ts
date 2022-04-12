export const formatMonetary = (value: number, currency?: string) => {
  // TODO: use locale from settings
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: currency,
  }).format(value);
};
