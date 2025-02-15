import jwt from 'jsonwebtoken'
const SECRET = 'kjhfheuifd4387cb';

export function genarteToken(data){
    const payload = {
        id:data._id,
        name:data.name,
        email:data.email
    };
    const token = jwt.sign(payload,SECRET);

    return token;
}

export function tokenDecode(token){
    return jwt.verify(token,SECRET)
}