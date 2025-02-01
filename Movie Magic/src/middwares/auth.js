import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

export const authMid = (req,res,next) =>{
    
    const token = req.cookies['auth'];



    if(!token){
        next();
    }

    try {
        const decodedToken = jwt.verify(token,process.env.SECRET)
        
        req.user = decodedToken;
        next();
    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/404');   
    }
}
