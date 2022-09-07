import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";



dotenv.config();
connectDB();

const app = express()

const port = 3300


//base url

app.get("/api", (req,res)=>{
    res.send(`API is working!`)
})


app.listen(port,()=> {
    console.log(`Server is running on ${port}`)
})