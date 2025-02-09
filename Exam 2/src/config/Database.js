import mongoose from "mongoose";

export async function databaseConfig(uri){
    try {
        await mongoose.connect(uri);
        console.log('Database is succesfully connected!');
    } catch (err) {
        
    }
}