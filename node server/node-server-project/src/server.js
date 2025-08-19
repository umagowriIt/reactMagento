const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const https = require("https"); // Add this line

const app = express();
const PORT = 4000;

app.use(cors());


// Endpoint to get products with query params
app.get("/api/products", async (req, res) => {
  const token = "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MiwiaWF0IjoxNzU1NjM5NzkwLCJleHAiOjE3NTU2NDMzOTB9.OUIO1qVRLikQAOGvuz0uvHIkk1Xtb1ipQUHIvj6DoCY";
  
  // Build query string from req.query

  const flatQueryParams = {};
    for (const key in req.query) {
      if (typeof req.query[key] === 'object' && req.query[key] !== null) {
        for (const subKey in req.query[key]) {
          flatQueryParams[`${key}[${subKey}]`] = String(req.query[key][subKey]); // Convert sub-values to strings
        }
      } else {
        flatQueryParams[key] = String(req.query[key]); // Convert values to strings
      }
    }
     const queryParams = new URLSearchParams(flatQueryParams).toString();
  console.log("Received queryParams:", queryParams);
  const apiUrl = `https://magento.test/rest/V1/products${queryParams ? "?" + queryParams : ""}`;

  // Create an https agent that ignores self-signed certificates
  const agent = new https.Agent({ rejectUnauthorized: false });

  try {
    console.log("BEGIN", apiUrl);
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      },
      agent // Pass the agent to fetch
    });


    if (!response.ok) {
      throw new Error(`External API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch external API", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});