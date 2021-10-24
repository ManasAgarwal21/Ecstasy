import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";
import config from "./config/config.js";
import path from "path";
import { getSearchedProducts } from "./controller/product.controller";

const app = express();

mongoose.connect(config.mongodb_uri);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./../../build")));
app.use("/", routes);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo server.");
});

mongoose.connection.on("error", () => {
  console.log("error");
});


app.listen(config.port, () => {
  console.log("success");
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../build', 'index.html'));
  });
});
