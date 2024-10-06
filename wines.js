// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getWines() {
  // Query the database and return all resource ones
  const queryText = "SELECT * FROM wines;";
  const result = await pool.query(queryText);
  return result.rows;
}

export async function getWineById(id) {
  // Query the database and return the resource with a matching id or null
  const queryText = "SELECT * FROM wines WHERE id = $1;";
  const result = await pool.query(queryText, [id]);
  return result.rows[0] || null;
}

export async function createWine(body) {
  // Query the database to create an resource and return the newly created resource
  const { name, description, country, colour } = body;
  const queryText =
    "INSERT INTO wines (name, description, country, colour) VALUES ($1, $2, $3, $4) RETURNING *;";
  const result = await pool.query(queryText, [
    name,
    description,
    country,
    colour,
  ]);
  return result.rows[0] || null;
}

export async function updateWineById(id, body) {
  // Query the database to update the resource and return the newly updated resource or null
  const { name, description, country, colour } = body;
  const queryText =
    "UPDATE wines SET name = $1, description = $2, country = $3, colour = $4 WHERE id = $5 RETURNING *;";
  const result = await pool.query(queryText, [
    name,
    description,
    country,
    colour,
    id,
  ]);
  return result.rows[0] || null;
}

export async function deleteWineById(id) {
  // Query the database to delete the resource and return the deleted resource or null
  const queryText1 = "UPDATE cheeses SET cheeses_wine_id_fkey = NULL WHERE wine_id_fkey = $1 RETURNING *;";
  const result1 = await pool.query(queryText1, [id]);
  const queryText2 = "DELETE FROM wines WHERE id=$1"
  const result2 = await pool.query(queryText2, [id]);

  return result2.rows[0] || null;
}
