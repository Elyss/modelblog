import { openDb } from "../../db";
import jwt from "jsonwebtoken"

const SECRET_KEY="cematinunlapin"

export default defineEventHandler(async (event) => {
    const db = await openDb() // Open the database connection
    const data = await readBody(event)

    if(!data.password || !data.email){
        throw createError({statusCode:400,message:'Renseigner un mail et un mot de passe'})
    }

    const user = await db.get("SELECT * FROM users WHERE email=? AND password=?",[data.email,data.password]); // Fetch all users from SQLite

    if(user){
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload (user data)
            SECRET_KEY, // Secret key
            { expiresIn: "1h" },
        )
        return { success:true,message:"Connexion réussie",token:token};
    }
    else{
        throw createError({statusCode:401,message:'Identifiants incorrects'})
    }

});
