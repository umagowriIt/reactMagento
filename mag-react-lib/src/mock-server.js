const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

// Mock products data
const products = [
  { id: 1, name: "Product A", price: 10.99 },
  { id: 2, name: "Product B", price: 12.99 },
  { id: 3, name: "Product C", price: 8.99 },
];

// Endpoint to get products
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});