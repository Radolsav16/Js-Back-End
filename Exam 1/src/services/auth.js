import User from "../models/User.js";
import { hashingApi } from "../utils/hash.js";
import { jwtApi }from "../utils/token.js";


const register = async ({username,email,password,repeatPassword}) =>{
       if(password !== repeatPassword){
            throw Error('Passwords missmatch !');
       }

       let isExist = await findUserByEmail(email);

       if(isExist){
          throw Error('User already exist !');
       }

       const user = await User.create({
        username,
        email,
        password
       });

       const token = jwtApi.generateToken(user);

       return  token;
}

const login = async ({email,password}) => {
    const user = await findUserByEmail(email);
    if(!user){
        throw Error('Email is incorrect!');
    }

    const isMatch = await hashingApi.comparePasswords(password,user.password);
    

    if(!isMatch){
        throw Error('Password is incorrect!');
    }

    const token = jwtApi.generateToken(user);

    return token;

}



async function findUserByEmail(email){
    const user = await User.findOne({email});
    return user;
}


export const authService  = {
    register,
    login
}