import express from "express";
import { getProducts } from "../controller/product.controller";
import { getUsers, createUser } from "../controller/user.controller";
import signin from "../controller/auth.controller";

const routes = express();

routes.route("/api/products").get(getProducts);
routes.route("/api/users").get(getUsers);
routes.route("/auth/signin").post(signin);
routes.route("/api/users").post(createUser);

export default routes;
