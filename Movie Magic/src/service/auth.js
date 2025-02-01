import User from "../../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

async function register(data) {
    const user = User.create(data); 

    return user;
}

async function login(email,password) {
   const user = await User.findOne({ email }).lean();

   const isValid = await bcrypt.compare(password,user.password);

   if(!isValid){
    throw Error('Email or password is not correct!');
   }


   const payload = {
        id:user._id,
        email:user.email
   };
   const token = jwt.sign(payload,process.env.SECRET || 'Radko',{expiresIn:'2h'});

  
   return token;
}

export {
    register,
    login
}