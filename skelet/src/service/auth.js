import User from "../models/User.js"
import { isValidPassword } from "../utils/hash.js";
import { genarteToken } from "../utils/token.js";

export async function register({name,email,password,repeatPassword}){
    if(password !== repeatPassword){
        throw Error('Password missmatch!')
    }

    const user = await User.findOne({ email });

    if(user){
        throw Error('User is already exist!')
    }

    const createdUser = await User.create({name,email,password});

    const token = genarteToken(createdUser)

    return token;

}


export async function login({email,password}){
    const user = await User.findOne({ email });

    if(!user){
        throw Error("User with this email doesn't exist!");
    }

    if(!password){
        throw Error('Password is required!')
    }

    const isValidPaasowrd = isValidPassword(password,user.password);

    if(!isValidPaasowrd){
        throw Error("Password is incorrect!");
    }

    const token = genarteToken(user);

    return token

}
