import { Router } from "express";
import { login, register } from "../service/auth.js";

const authController = Router();


authController.get('/register',(req,res) => {
    res.render('auth/register')
})

authController.get('/login',(req,res) => {
    res.render('auth/login')
})


authController.post('/register',async (req,res) =>{
    try{
        const token = await register(req.body);
        res.cookie('auth',token)
        res.redirect('/');
    }catch(err){
        console.log(err)
    }
    
})


authController.post('/login',async (req,res) =>{
    try{
        const token = await login(req.body);
        res.cookie('auth',token)
        res.redirect('/');
    }catch(err){
        console.log(err)
    }
})

authController.get('/logout',(req,res)=>{
    res.clearCookie('auth');
    res.redirect('/')
})

export default authController;