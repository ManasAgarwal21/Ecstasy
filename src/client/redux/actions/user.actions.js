export const updateUser = (user) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};

export const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};
