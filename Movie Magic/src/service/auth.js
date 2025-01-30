import User from "../../models/User.js";

async function register(data) {
    const user = User.create(data); 

    return user;
}


export {
    register
}