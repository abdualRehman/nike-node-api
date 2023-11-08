// server.js
const express = require("express");
const data = require("./_DummyData/Products");

const app = express();
const port = 5000; // You can use any available port

app.use(express.json());

// Define an API endpoint to get the list of products
app.get("/api/exploreItems", (req, res) => {
  res.json(data.exploreItems);
});
app.get("/api/mensProducts", (req, res) => {
  res.json(data.mensProducts);
});
app.get("/api/newFeaturedProducts", (req, res) => {
  res.json(data.newFeaturedProducts);
});
app.get("/api/showcaseImages", (req, res) => {
  res.json(data.showcaseImages);
});
app.get("/api/sportItems", (req, res) => {
  res.json(data.sportItems);
});
app.get("/api/weatherClothing", (req, res) => {
  res.json(data.weatherClothing);
});
app.get("/api/womenProducts", (req, res) => {
  res.json(data.womenProducts);
});
app.get("/api/ads", (req, res) => {
  res.json(data.ads);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
