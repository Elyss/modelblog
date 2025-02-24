import { openDb } from "../../db";

export default defineEventHandler(async (event) => {
    const db = await openDb();
    
    // Get the query parameter from the request
    const query = getQuery(event);
    const category = query.category;
    console.log("asked for:",category)

    let images;
    
    if (category) {
        // If category is provided, filter images by category
        images = await db.all("SELECT * FROM gallery WHERE category = ?", [category]);
    } else {
        // If no category is provided, get all images
        images = await db.all("SELECT * FROM gallery");
    }

    return images;
});
