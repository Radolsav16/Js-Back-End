import { Schema ,model } from "mongoose";
import { hashPassword } from "../utils/hash.js";


const userSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required!']
    },
    email:{
        type:String,
        required:[true,'Email is required!']
    },
    password:{
        type:String,
        required:[true,'Password is required!']
    }
})

userSchema.pre('save',async function(){
    this.password = await hashPassword(this.password)
})

const User = model('User',userSchema);


export default User;