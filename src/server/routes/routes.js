import express from "express";
import controller from "../controller/product.controller";

const routes = express();

routes.route("/api/products").get(controller.getProducts);

export default routes;