import { Schema , model } from "mongoose";

const movieShema = new Schema({
    title:String,
    category:String,
    genre:String,
    director:String,
    year:Number,
    imageURL:String,
    rating:Number,
    description:String
})


const Movie = model('Movie',movieShema);

export default Movie;