import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
// import { ProductSchema } from "./models/ProductModel.js";

const app = express();

mongoose.connect(config.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log("connected to mongo server.");
});

mongoose.connection.on('error', () => {
    console.log('error');
});

// const product = mongoose.model("products", ProductSchema);

// const doc = new product({
//   name: "Mens Cotton Jacket",
//   seller: "Ecstasy",
//   image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   rating: 4.7,
//   price: 2599,
//   onSale: true,
//   tags: ["men", "clothing", "jacket"],
// });

// doc.save();

app.listen(1000, () => {
  console.log("success");
});
