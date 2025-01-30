import { Schema , model } from "mongoose";
import { hashingPassword } from "../utils/hash.js";

const userShchema = new Schema({
    email:String,
    password:String
})

userShchema.pre('save', async function () {
    this.password = await hashingPassword(this.password);
})

const User = model('User',userShchema);

export default User;