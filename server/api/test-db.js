import { openDb } from "../db";

export default defineEventHandler(async (event) => {
  const db = await openDb();

  // Create a table if it doesn’t exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    )
  `);

  // Check if the test user already exists
  const existingUser = await db.get("SELECT * FROM users WHERE email = ?", [
    "chloee@chlolipop.com",
  ]);


  // Insert a test user
  if(!existingUser){
      await db.run("INSERT INTO users (name, email) VALUES (?, ?)", [
        "Chloee",
        "chloee@chlolipop.com",
      ])
  }

  // Retrieve users from the database
  const users = await db.all("SELECT * FROM users");

  return { success: true, users };
});
