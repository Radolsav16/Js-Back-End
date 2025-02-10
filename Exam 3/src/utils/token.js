import jwt from 'jsonwebtoken';

const SECRET = 'kjf834jhvb';

export function createToken(data){
   
    const token = jwt.sign(data,SECRET);

    return token;
}

export function decodeToken(token){
    const decodedToken = jwt.verify(token,SECRET) ;

    return decodedToken;
}