import {Schema , Types , model} from 'mongoose';

const planetSchema = new Schema({
    name:{
        type:String,
        minLength:2,
        required:[true,'Name of the planet is required!']
    },
    age:{
        type:Number,
        min:0,
        required:[true,'Age of the planet is required!']
    },
    solarSystem:{
        type:String,
        minLength:2,
        required:[true,'Solar System is required!']
    },
    type:{
        type:String,
        enum:['Inner','Outer','Dwarf'],
        required:[true,'Choose Type of the planets!']
        
    },
    moons:{
        type:Number,
        min:0,
        required:[true,'Moons is required!']
    },
    size:{
        type:Number,
        min:0,
        required:[true,'Size is required!']
    },
    rings:{
        type:Number,
        enum:['Yes','No'],
        required:[true,'Choose rings please!']
    },
    description:{
        type:String,
        minLength:10,
        maxLength:100,
        required:[true,'Description is required!']
    },
    image:{
        type:String,
        match:/^https?:\/\//gm,
        required:[true,'Image is is required!']
    }

})

const Planet = model('Planet',planetSchema);

export default Planet;