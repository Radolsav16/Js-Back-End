const {Schema , model , SchemaTypes:Types} = require('mongoose');

const movieSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    } ,
    director:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true,
        min:1900,
        max:2100
    },
    imageURL:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5
    },
    description:{
        type:String,
        required:true
    },
    cast:{
        type:[Types.ObjectId],
        required:true
    }
})


const Movie = model('Movie',movieSchema);

module.exports = {
    Movie
}