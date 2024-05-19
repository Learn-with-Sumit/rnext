export const formatPrice = (price) => {
  return Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
