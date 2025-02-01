import { Schema , model ,Types } from "mongoose";

const movieShema = new Schema({
    title:String,
    category:String,
    genre:String,
    director:String,
    year:Number,
    imageURL:String,
    rating:Number,
    description:String,
    owner:Types.ObjectId,
    casts:[
        {
            type:Types.ObjectId,
            ref:'Cast'
        }
    ]
})


const Movie = model('Movie',movieShema);

export default Movie;