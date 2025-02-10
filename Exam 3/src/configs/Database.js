import mongoose from "mongoose";

export default async function connectDatabse(uri){
    try{
        await mongoose.connect(uri);
        console.log('Database is connected!')
    }catch(err){
        console.log(err.message)
    }
}