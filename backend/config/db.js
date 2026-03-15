import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DATABASE);
        console.log('DB Connected');
    }catch(err){
        console.log('we got error', err);
        process.exit(1);
    }
}