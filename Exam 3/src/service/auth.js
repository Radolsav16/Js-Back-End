import User from "../models/User.js";
import { checkisPassValid } from "../utils/hash.js";
import { createToken } from "../utils/token.js";

export async function register({username,email,password,confirmPassword,}){
    if(password !== confirmPassword){
        throw Error('Passwrods missmatch!');
    }

    const user = await User.findOne({email});

    if(user){
        throw Error('User with this email already exist!');
    }

    const data = await User.create({username,email,password});

    const token = createToken({id:data._id,username:data.username,email:data.email});


    return token;

}

export async function login({username,password}) {
    const user = await User.findOne({username}).lean();
    if(!user){
        throw Error('User with this email doesnt exist!');
    }

    const isValid = await checkisPassValid(password,user.password);

    if(!isValid){
        throw Error('Password is not valid!');
    } 



    const token = createToken({id:user._id,username:user.username,email:user.email});

    return token;
}
