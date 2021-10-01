import express from "express";
import controller from "../controller/product.controller";

const routes = express();

routes.route("/api/products").get(controller.getProducts);
routes.route("/api/users").get(controller.getUsers);
export default routes;