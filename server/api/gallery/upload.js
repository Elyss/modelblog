import { defineEventHandler, createError, readMultipartFormData } from "h3";
import fs from "fs";
import path from "path";
import { openDb } from "../../db";

export default defineEventHandler(async (event) => {
    const db = await openDb();
    const uploadDir = path.resolve("public/uploads");

    // ✅ Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    // ✅ Parse uploaded file
    const formData = await readMultipartFormData(event);

    if (!formData || !formData.length) {
        throw createError({ statusCode: 400, message: "No file uploaded" });
    }

    const file = formData[0]; // Get the first uploaded file

    // ✅ Create a unique filename
    const uniqueFilename = `${Date.now()}-${file.filename}`;
    const filePath = path.join(uploadDir, uniqueFilename);

    // ✅ Save file to disk
    fs.writeFileSync(filePath, file.data);

    // ✅ Store file info in the database
    await db.run(
        "INSERT INTO gallery (filename, filepath, uploaded_at) VALUES (?, ?, datetime('now'))",
        [file.filename, `/uploads/${uniqueFilename}`]
    );

    return { success: true, message: "File uploaded", url: `/uploads/${uniqueFilename}` };
});
