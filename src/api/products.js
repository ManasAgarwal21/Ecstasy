const getProducts = async () => {
  const products = await fetch("http://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  console.log(products);
  return products;
};

export default getProducts;
