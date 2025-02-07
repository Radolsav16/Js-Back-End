import { Router } from "express";
import { recommend } from "../services/recipe.js";

const recommendController = Router();


recommendController.get('/recommend/:id',async (req,res)=>{
    const recipeId = req.params.id;
    
    const id = req.user.id;

    try {
        await recommend(recipeId,id);
        res.redirect(`/recipes/details/${recipeId}`);
    } catch (error) {
        console.log(error.message)   
    }
    
 
    
})


export default recommendController