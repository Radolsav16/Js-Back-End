import { Schema , model } from "mongoose";

const userShchema = new Schema({
    email:String,
    password:String
})

const User = model('User',userShchema);

export default User;