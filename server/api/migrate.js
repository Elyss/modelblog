import { openDb } from "../db";

export default defineEventHandler(async (event) => {
    const db = await openDb();

    // Get existing columns
    let columns = await db.all(`PRAGMA table_info(users)`);
    let columnNames = columns.map((col) => col.name);

    // ADD PASSWORD + DEFAULT
    if (!columnNames.includes("password")) {
        await db.exec(`ALTER TABLE users ADD COLUMN password TEXT`);
        await db.exec(`UPDATE users SET password='azerty' WHERE password IS NULL OR password = '' `);
    }

    // Retrieve users from the database


    // Create gallery table
    await db.exec(`
        CREATE TABLE IF NOT EXISTS gallery (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            filepath TEXT,
            uploaded_at TEXT
        );
    `);

    // Get existing columns
    columns = await db.all(`PRAGMA table_info(gallery)`);
    columnNames = columns.map((col) => col.name);

    // ADD PASSWORD + DEFAULT
    if (!columnNames.includes("category")) {
        await db.exec(`ALTER TABLE gallery ADD COLUMN category TEXT`);
        await db.exec(`UPDATE gallery SET category='general' WHERE category IS NULL OR category = '' `);
    }


    const users = await db.all("SELECT * FROM users");
    const gallery = await db.all("SELECT * FROM gallery")

    return { success: true, users, gallery };
    });
