import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function hashPassword(password){
    return await bcrypt.hash(password,saltRounds);
}

export async function isValidPassword(hashPassword,password){
    return await bcrypt.compare(password,hashPassword);
}