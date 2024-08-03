import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/dg.js";
dotenv.config();
const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
