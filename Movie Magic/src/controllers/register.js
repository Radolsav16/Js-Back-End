import bcrpyt from 'bcrypt'
import { register } from '../service/auth.js';


function getRegister (req,res){
    res.render('register');
}

async function postRegister(req,res){
    const {email , password, repeatPassword} = req.body;

    if(password !== repeatPassword){
        return;
    }

    const salt = await bcrpyt.genSalt(10);
    const hashPassword = await bcrpyt.hash(password,salt);

    

    const data = {
        email,
        password:hashPassword
    };


    try{
        const user = await register(data);
        console.log(user);
        res.redirect('/')
    }catch(err){
        console.log(err.message)
    }
}

export {
    getRegister,
    postRegister
}