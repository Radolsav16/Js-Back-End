import { Router } from "express";
import { authService } from "../services/auth.js";
import { isAuth } from "../middlewares/auth.js";

const authContoller = Router();

authContoller.get('/register',(req,res) => {
    res.render('auth/register');
})

authContoller.post('/register',async (req,res) =>{
    try{
       const token = await authService.register(req.body);
       res.cookie('auth',token);
       res.redirect('/');
    }catch(err){
        console.log(err.message)
    }
    
})

authContoller.get('/login',(req,res) =>{
    res.render('auth/login');
})

authContoller.post('/login',async (req,res) =>{
    try {
        const token = await authService.login(req.body);
        res.cookie('auth',token);
        res.redirect('/')
    } catch (error) {
        console.log(error.message);
    }
})
authContoller.get('/logout',isAuth,(req,res) => {
    res.clearCookie('auth');
    res.redirect('/')
})




export default authContoller;