import { Router } from "express";
import { login, register } from "../service/auth.js";
import getErrorMessage from "../utils/error.js";

const authController = Router();


authController.get('/register',(req,res) => {
    res.render('auth/register')
})

authController.get('/login',(req,res) => {
    res.render('auth/login')
})


authController.post('/register',async (req,res) =>{
    const data = req.body;
    try{
        const token = await register(data);
        res.cookie('auth',token)
        res.redirect('/');
    }catch(err){
        res.render('auth/register',{error:getErrorMessage(err),data})
    }
    
})


authController.post('/login',async (req,res) =>{
    const data = req.body
    try{
        const token = await login(data);
        res.cookie('auth',token)
        res.redirect('/');
    }catch(err){
        res.render('auth/login',{error:getErrorMessage(err),data})
    }
})

authController.get('/logout',(req,res)=>{
    res.clearCookie('auth');
    res.redirect('/')
})

export default authController;