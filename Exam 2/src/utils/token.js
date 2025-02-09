import jwt from 'jsonwebtoken';

const SECRET = 'lkagho4itkjeb';

export function createToken(id,name,email) {
    const token = jwt.sign({
        id,
        name,
        email
    },SECRET);

    return token;
}


export function decodeToken(token){
    return jwt.verify(token,SECRET);
}