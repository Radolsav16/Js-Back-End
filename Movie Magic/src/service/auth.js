import User from "../../models/User.js";

async function register(data) {
    const user = await User.create(data);

    return user;
}


export {
    register
}