import bcrypt from 'bcrypt';
const rounds = 10;

export async function hashPassword(password){
    const hashedPassword = await bcrypt.hash(password,rounds);

    return hashedPassword;
}

export async function comparePasswords(password,hashPassword) {
    const isValid = await bcrypt.compare(password,hashPassword);

    return isValid;
}