// Import the required modules
import express from "express";

//Import your helper functions for your first resource here
import {
  getWines,
  getWineById,
  createWine,
  updateWineById,
  deleteWineById,
} from "./wines.js";

//Import your helper functions for your second resource here
import {
  getCheeses,
  getCheeseById,
  createCheese,
  updateCheeseById,
  deleteCheeseById,
} from "./cheeses.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/wines/", async function (req, res) {
  const wines = await getWines();
  res.status(200).json({ success: true, payload: wines });
});

// Endpoint to retrieve a <resource_one> by id
app.get("/wines/:id", async function (req, res) {
  const id = req.params.id;
  const wine = await getWineById(id);
  res.status(200).json({ success: true, payload: wine });
});

// Endpoint to create a new <resource_one>
app.post("/wines/", async function (req, res) {
  const data = req.body;
  const wine = await createWine(data);
  res.status(201).json({ success: true, payload: wine });
});

// Endpoint to update a specific <resource_one> by id
app.put("/wines/:id", async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const updatedWine = await updateWineById(id, data);
  res.status(200).json({ success: true, payload: updatedWine });
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/wines/:id", async function (req, res) {
  const id = req.params.id;
  const deletedWine = deleteWineById(id);
  res.status(200).json({success: true, payload: deletedWine});
});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/cheeses/", async function (req, res) {
  const cheeses = await getCheeses();
  res.status(200).json({ status: "success", data: cheeses });
});

// Endpoint to retrieve a <resource_twos> by id
app.get("/cheeses/:id", async function (req, res) {
  const id = req.params.id;
  const cheese = await getCheeseById(id);
  res.status(200).json({ success: true, payload: cheese });
});

// Endpoint to create a new <resource_twos>
app.post("/cheeses/", async function (req, res) {
  const data = req.body;
  const cheese = await createCheese(data);
  res.status(201).json({ success: true, payload: cheese });
});

// Endpoint to update a specific <resource_twos> by id
app.put("/cheeses/:id", async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const updatedCheese = await updateCheeseById(id, data);
  res.status(200).json({ success: true, payload: updatedCheese });
});

// Endpoint to delete a specific <resource_twos> by id
app.delete("/cheeses/:id", async function (req, res) {
  const id = req.params.id;
  const deletedCheese = deleteCheeseById(id);
  res.status(200).json({success: true, payload: deletedCheese});
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
