const getProducts = async () => {
  const products = await fetch("http://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return products;
};

export default getProducts;
