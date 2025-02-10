import bcrypt from 'bcrypt'

const rounds = 10;

export async function hashingPassword(password){
    return await bcrypt.hash(password,rounds)
}


export async function checkisPassValid(password,hashPassword){
    return await bcrypt.compare(password,hashPassword);
}