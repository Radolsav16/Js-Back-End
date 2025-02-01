import { login } from "../service/auth.js";

function getLogin(req,res){
    res.render('login')
}

async function postLogin(req,res){
    const {email,password} = req.body;
    try{
    const token = await login(email,password);
    
    res.cookie('auth',token);

    }catch(err){
        res.redirect('/404');
    }
    
    res.redirect('/');
    
}

export {
    getLogin,
    postLogin    
}