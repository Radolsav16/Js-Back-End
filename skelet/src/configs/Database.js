import mongoose  from "mongoose";

export default async function databaseConnect(uri) {
    try{
        await mongoose.connect(uri);
        console.log('Database succesfully connected')
    }catch(err){
        throw Error('Database connection failed!')
    }
}