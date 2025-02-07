import jwt from 'jsonwebtoken';
const SECRET = 'kjsfgbo4i2ykfgb438y8';

 function generateToken(user){
    
    const payload = {
        id:user._id,
        username:user.username,
        email:user.email,
    }

    const token = jwt.sign(payload,SECRET,{expiresIn:'2h'});

    return token;
}
 function verifyToken(token){
    const isValid = jwt.verify(token,SECRET);

    return isValid;
}
 function DecodeToken(token){
    const decodedToken = jwt.decode(token);

    return decodedToken;
}


export const jwtApi = {
DecodeToken,
verifyToken,
generateToken
}