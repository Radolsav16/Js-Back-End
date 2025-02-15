import { tokenDecode } from "../utils/token.js";

export function authMiddleware(req,res,next){
    const token = req.cookies['auth'];

    if(!token){
        return next();
    }

    const decodeToken = tokenDecode(token);

    if(!decodeToken){
        res.clearCookie('auth');
        return res.redirect('/auth/login')
    }

    req.user = decodeToken;
    res.locals.user = decodeToken

    next();
}


export function isAuth(req,res,next){
    if(!req.user){
        return res.redirect('/auth/login')
    }

    next()
}