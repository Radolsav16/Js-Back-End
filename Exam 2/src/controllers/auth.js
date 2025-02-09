import { Router } from "express";
import { login, register } from "../service/auth.js";
import { getMessageError } from "../utils/errors.js";
import { getCreatedProductsForUser, getPreferProducts } from "../service/device.js";

const authController = Router();

authController.get('/login',(req,res) =>{
    res.render('auth/login')
})

authController.post('/login',async (req,res)=>{
    const data = req.body;
    try {
        const token = await login(data);
        res.cookie('auth',token);
        res.redirect('/');
    } catch (err) {
        res.render('auth/login',{error:getMessageError(err),data});
      
    }
})


authController.get('/register',(req,res) =>{
    res.render('auth/register')
})

authController.post('/register',async (req,res) =>{
    const data = req.body;
    try{
        const token = await register(data)
        res.cookie('auth',token);
        res.redirect('/')
    }catch(err){
        res.render('auth/register',{error:getMessageError(err),data});
    }
    
})

authController.get('/logout',(req,res)=>{
    res.clearCookie('auth');
    res.redirect('/')
})


authController.get('/profile/:id',async (req,res)=>{
    const {id} = req.params
    const createdDevices = await getCreatedProductsForUser(id);
    const prefferDevices = await getPreferProducts(id,req.user.name);
    console.log(createdDevices);
    console.log(prefferDevices);
    res.render('auth/profile',{createdDevices , prefferDevices})
})

export default authController;

