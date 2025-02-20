import { openDb } from "../../db";

export default defineEventHandler(async (event) => {
  const db = await openDb(); // Open the database connection
  const users = await db.all("SELECT * FROM users"); // Fetch all users from SQLite
  return { users }; // Return the users as JSON
});
