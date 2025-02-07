import { jwtApi } from "../utils/token.js";

export  function authMiddleware(req,res,next){
    const token = req.cookies['auth'];
    
    if(!token){
        return next()
    }

    const isValid = jwtApi.verifyToken(token);

    if(!isValid){
       return next();
    }

    const data = jwtApi.DecodeToken(token);

    req.user = data;
    res.locals.user = data;

    next()
}

export function isAuth(req,res,next){
    if(!req.user){
        res.redirect('/auth/login');
    }

    next()
}