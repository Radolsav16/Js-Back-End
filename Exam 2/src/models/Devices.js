import { Schema , model,Types } from "mongoose";

const deviceSchema = new Schema({
    brand:{
        type:String,
        required:[true,'Input Brand Please!']
    },
    model:{
        type:String,
        required:[true,'Input Model Please!']
    },
    hardDisk:{
        type:String,
        required:[true,'Input Hard-Disk Please!']
    },
    screenSize:{
        type:String,
        required:[true,'Input Screen-Size Please!']
    },
    ram:{
        type:String,
        required:[true,'Input RAM Please!']
    },
    operatingSystem:{
        type:String,
        required:[true,'Input Operating System Please!']
    },
    cpu:{
        type:String,
        required:[true,'Input CPU Please!']
    },
    gpu:{
        type:String,
        required:[true,'Input GPU Please!']
    },
    price:{
        type:Number,
        required:[true,'Input Price Please!']
    },
    color:{
        type:String,
        required:[true,'Input Color Please!']
    },
    weight:{
        type:String,
        required:[true,'Input Weight Please!']
    },
    image:{
        type:String,
        required:[true,'Input Image Please!']
    },
    preferredList:[{type:Types.ObjectId , ref:'User'}],
    owner:{
        type:Types.ObjectId,
        ref:'User'
    }
})


const Device = model('Device',deviceSchema);

export default Device;