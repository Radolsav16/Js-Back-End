import express from 'express';
import hbsConfig from '../configs/handebars.js';
import staticConfig from '../configs/static.js';
import router from '../configs/router.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import { authMid } from './middwares/auth.js';


const uri = 'mongodb://localhost:27017/movie-magic';

const app = express();
app.use(cookieParser());


try{
 await mongoose.connect(uri);
 console.log('Database connected')   
}catch(err){
    console.log(err.message);
}

app.use(express.urlencoded({extended:false}));
hbsConfig(app);
staticConfig(app);
app.use(authMid);


app.use(router);








app.listen(3030,()=> console.log('App is running on port 3030'));