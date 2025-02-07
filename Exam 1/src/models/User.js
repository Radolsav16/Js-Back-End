import { Schema , model } from "mongoose";
import {hashingApi} from "../utils/hash.js";

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save',async function(){
    this.password = await hashingApi.hashingPassword(this.password)
})


const User = model('User',userSchema);

export default User;