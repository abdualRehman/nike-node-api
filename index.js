// server.js
const express = require("express");
const data = require("./_DummyData/Products");

var cors = require("cors");

const app = express();
const port = 5000; // You can use any available port

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/api/mensProducts", (req, res) => {
  res.json(data.allProducts.filter((item) => item.category == "mens"));
});
app.get("/api/newFeaturedProducts", (req, res) => {
  res.json(data.allProducts.filter((item) => item.id % 2 != 0));
});
app.get("/api/womenProducts", (req, res) => {
  res.json(data.allProducts.filter((item) => item.category == "womens"));
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  res.json(data.allProducts.find((item) => item.id == id));
});

// Define an API endpoint to get the list of products
app.get("/api/exploreItems", (req, res) => {
  res.json(data.exploreItems);
});

app.get("/api/showcaseGridData", (req, res) => {
  res.json(data.showcaseGridData);
});
app.get("/api/sportItems", (req, res) => {
  res.json(data.sportItems);
});
app.get("/api/weatherClothing", (req, res) => {
  res.json(data.weatherClothing);
});

app.get("/api/ads", (req, res) => {
  res.json(data.ads);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
