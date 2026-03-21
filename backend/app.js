import express from "express";
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import productRouter from './router/productRouter.js'
import { connectDB } from "./config/db.js";
import { errorHanndler, notFound } from "./middleware/errorMiddleWare.js";
import cors from 'cors';
import path from 'path';

connectDB();
app.use(express.json());
// app.use(cors());
app.use('/images', express.static(path.join(process.cwd(), 'images')));

app.use('/api/v1/products', productRouter);

app.use((req,res,next)=>{
  res.status(404).json({ message: 'Not Found' });
});


app.use(notFound)
app.use(errorHanndler)


export default app;