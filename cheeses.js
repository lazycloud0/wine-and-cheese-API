// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getCheeses() {
  // Query the database and return all resource twos
  const queryText = "SELECT * FROM cheeses;";
  const result = await pool.query(queryText);
  return result.rows;
}

export async function getCheeseById(id) {
  // Query the database and return the resource with a matching id or null
  const queryText = "SELECT * FROM cheeses WHERE id = $1;";
  const result = await pool.query(queryText, [id]);
  return result.rows[0] || null;
}

export async function createCheese(body) {
  // Query the database to create an resource and return the newly created resource
  const { name, description, country, milk_type, wine_id } = body;
  const queryText =
    "INSERT INTO cheeses (name, description, country, milk_type, wine_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;";
  const result = await pool.query(queryText, [
    name,
    description,
    country,
    milk_type,
    wine_id,
  ]);
  return result.rows[0] || null;
}

export async function updateCheeseById(id, body) {
  // Query the database to update the resource and return the newly updated resource or null
  const { name, description, country, milk_type, wine_id } = body;
  const queryText =
    "UPDATE cheeses SET name = $1, description = $2, country = $3, milk_type = $4, wine_id = $5 WHERE id = $6 RETURNING *;";
  const result = await pool.query(queryText, [
    name,
    description,
    country,
    milk_type,
    wine_id,
    id,
  ]);
  return result.rows[0] || null;
}

export async function deleteCheeseById(id) {
  // Query the database to delete the resource and return the deleted resource or null
  // Delete related entries in the wines table first
  const deleteWinesQuery = "DELETE FROM wines WHERE cheeses_id = $1;";
  await pool.query(deleteWinesQuery, [id]);

  // Then delete the entry in the cheeses table
  const deleteCheeseQuery = "DELETE FROM cheeses WHERE id = $1 RETURNING *;";
  const result = await pool.query(deleteCheeseQuery, [id]);

  return result.rows[0] || null;
}
