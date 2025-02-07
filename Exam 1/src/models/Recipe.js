import { Schema , Types,model } from "mongoose";

const recipeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    recommendList:[Types.ObjectId],
    owner:Types.ObjectId
})

const Recipe = model('Recipe',recipeSchema);

export default Recipe;