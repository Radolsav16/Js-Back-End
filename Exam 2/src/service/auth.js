import User from "../models/User.js";
import { comparePasswords } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

export async function register({name , email , password , confirmPassword}){
    if(password !== confirmPassword){
        throw Error('Passwords missmatch!');
    }

    const userExisting = await User.findOne({email});

    if(userExisting){
        throw Error('User with this email already exist!');
    }
    const user = await User.create({
        name,
        email,
        password,
    })


    const token = createToken(user._id,user.name,user.email);

    
    return token;
}

export async function login({email , password}){
  
    const user = await User.findOne({email});

    if(!user){
        throw Error('User with this email doesnt exist!');
    }

    const isValid = await comparePasswords(password,user.password);


    if(!isValid){
        throw Error('Password is incorrect!');
    }

    const token = createToken(user._id,user.name,user.email);

    return token;
}
