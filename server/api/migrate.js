import { openDb } from "../db";

export default defineEventHandler(async (event) => {
    const db = await openDb();

    // Get existing columns
    const columns = await db.all(`PRAGMA table_info(users)`);
    const columnNames = columns.map((col) => col.name);

    // ADD PASSWORD + DEFAULT
    if (!columnNames.includes("password")) {
        await db.exec(`ALTER TABLE users ADD COLUMN password TEXT`);
        await db.exec(`UPDATE users SET password='azerty' WHERE password IS NULL OR password = '' `);
    }

    // Retrieve users from the database
    const users = await db.all("SELECT * FROM users");

    return { success: true, users };
    });
