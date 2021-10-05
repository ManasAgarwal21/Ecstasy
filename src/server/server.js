import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";
import config from "./config/config.js";

const app = express();

mongoose.connect(config.mongodb_uri);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

mongoose.connection.on("connected", () => {
  console.log("connected to mongo server.");
});

mongoose.connection.on("error", () => {
  console.log("error");
});

app.listen(config.port, () => {
  console.log("success");
});
