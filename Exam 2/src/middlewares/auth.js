import {decodeToken } from "../utils/token.js";

export function authMiddleware(req,res,next){
    const token = req.cookies['auth'];
    
    if(!token){
        return next();
    }

    const decodedToken = decodeToken(token)
    

    if(!decodeToken){
        res.clearCookie('auth');
        next();
    }

    req.user = decodedToken;
    res.locals.user = decodedToken;
    next()
}


export function isAuth(req,res,next){
    if(!req.user){
        return res.redirect('/auth/login')
    }

    next()
}