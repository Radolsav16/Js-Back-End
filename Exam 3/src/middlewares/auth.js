import { decodeToken } from "../utils/token.js";

export  function authMiddleware(req,res,next){
    const token = req.cookies['auth'];

    if(!token){
        return next();
    }

    const decodedToken = decodeToken(token);

    if(!decodedToken){
        res.clearCookie('auth');
        return next();
    }

    req.user = decodedToken;
    res.locals.user = decodedToken;

    next();
}

export function isAuth(req,res,next){
    if(!req.user){
        res.clearCookie('auth');
        return res.redrect('/auth/login');
    }

    next();
}