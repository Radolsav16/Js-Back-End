import bcrypt from 'bcrypt';

const rounds = 10;

async function hashingPassword(password){
    const hashingPassword = await bcrypt.hash(password,rounds);
    return hashingPassword;
}

async function comparePasswords(password,hashPass) {
    const isMatch = await bcrypt.compare(password,hashPass);

    return isMatch;
}

export const hashingApi = { hashingPassword , comparePasswords }
