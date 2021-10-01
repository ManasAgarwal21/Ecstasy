const getProducts = async () => {
  const products = await fetch("/api/products").then((res) =>
    res.json()
  );
  return products;
};

export default getProducts;
