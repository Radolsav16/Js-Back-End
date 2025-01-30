import bcrypt from 'bcrypt';

async function hashingPassword(password){
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    const hashPass = await bcrypt.hash(password,salt);

    return hashPass;
}


export {
    hashingPassword
}