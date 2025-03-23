import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from './src/routes/auth.route.js';
import { connectDB } from "./src/lib/db.js";
dotenv.config();
const PORT=process.env.PORT;
const app=express();
app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.listen(PORT,()=>{
    console.log('SERVER stared at Port '+ PORT);
    connectDB()
});