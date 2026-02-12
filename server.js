import app from "./src/app.js"
import connectDB from "./src/db/db.js"
import dotenv from "dotenv";
dotenv.config({ quiet: true });



connectDB()

app.listen(3000,()=>{
    console.log("Server Running on Port : 3000")
})