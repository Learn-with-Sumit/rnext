export const formatPrice = (price) => {
  return Intl.NumberFormat("en-in", {
    style: "currency",
    currency: "INR",
  }).format(price);
};
