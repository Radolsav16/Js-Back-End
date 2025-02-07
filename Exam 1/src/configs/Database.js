import mongoose from 'mongoose'

async function databaseConfig(uri){
    try{
       await  mongoose.connect(uri);
       console.log('Database succesfully connected!');
    }catch(err){
        console.log('Database cannot connected!');
    }
}



export default databaseConfig;