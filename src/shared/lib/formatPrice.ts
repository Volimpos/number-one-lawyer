const formatPrice = (price: string | number) => {
  const priceStr = typeof price === "number" ? price.toString() : price;
  return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export { formatPrice };
