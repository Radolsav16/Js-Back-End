import bcrpyt from 'bcrypt'
import { register } from '../service/auth.js';
import dotenv from 'dotenv'

dotenv.config();


function getRegister (req,res){
    res.render('register');
}

async function postRegister(req,res){
    const {email , password, repeatPassword} = req.body;

    if(password !== repeatPassword){
        return;
    }

    if(email === '' || password === '' ||  repeatPassword === ''){
        return;
    }


    


    try{
       const user =  await register({email,password});
    //    res.cookie('auth',{id:user._id,email:user.email});
       res.redirect('/')
    }catch(err){
        console.log(err.message)
    }
}

export {
    getRegister,
    postRegister
}