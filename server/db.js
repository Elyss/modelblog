import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Function to open the database
export async function openDb() {
  return open({
    filename: "./database.sqlite", // Database file
    driver: sqlite3.Database, // Use sqlite3 as the database driver
  });
}
