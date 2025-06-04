export const formatNumber = (value: number | string) =>
  Intl.NumberFormat("en-US").format(Number(value));

export const formatCurrency = (value: number | string, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(value));
