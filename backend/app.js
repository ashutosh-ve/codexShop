import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import productRouter from './router/productRouter.js'
import { connectDB } from "./config/db.js";


connectDB();
app.use(express.json());


app.use('/api/v1/products', productRouter);

app.use((req,res,next)=>{
  res.status(404).json({ message: 'Not Found' });
});




export default app;