import extend from "lodash/extend";
import { decrypt } from "../../../server/config/encrypt";

const values = decrypt(localStorage.getItem("ECSID"));

export const initialState = {
  firstName: "",
  lastName: "",
  email: (values) ? values.email : "",
  password: (values) ? values.password : "",
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
