import { openDb } from "../../db";

export const put = defineEventHandler(async (event) => {
    const db = await openDb(); // Open the database connection

    const id = event.context.params?.id; // GET the id param from url
    const body = await readBody(event); // Get request body (JSON)

    // On recupère l'user, et on renvoie une erreur si pas trouvé
    const user_to_update = await db.get("SELECT * FROM users WHERE id=?",[id])
    if(!user_to_update){
        throw createError({ statusCode: 404, message: "User not found" }); 
    }

    await db.run("UPDATE users SET name = COALESCE(?,name), email= COALESCE(?,email), password = COALESCE(?,password) WHERE id = ?",[body.name,body.email,body.password,id])



  const users = await db.all("SELECT * FROM users"); // Fetch all users from SQLite
  return { users }; // Return the users as JSON
});

export default defineEventHandler(async (event) => {
    const db = await openDb(); // Open the database connection

    const id = event.context.params?.id; // GET the id param from url

    const user = await db.all("SELECT * FROM users WHERE id = ?",[id]); // Fetch the required user
    return { user }; // Return the user as JSON
  });
  