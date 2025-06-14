import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

// connecting with mongodb database
mongoose
 .connect(MONGOURL)
 .then(()=>{
    console.log("Database conected successfully");
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT : ${PORT}`)
    })
 }  
 )
 .catch((error)=>{
    console.log(error)
 })

app.use("/api",route);
