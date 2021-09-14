import extend from "lodash/extend";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
};

export const productState = [];

export const userReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_USER") {
    return extend(state, action.payload);
  }
  return state;
};

export const productReducer = (state = productState, action) => {
  if (action.type === "UPDATE_PRODUCT") {
    return action.payload;
  }
  return state;
};
