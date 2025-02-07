import { Router } from "express";
import { getAllRecipes } from "../services/recipe.js";

const homecontroller = Router();

homecontroller.get('/',async (req,res)=>{
    const recipes = (await getAllRecipes()).reverse().slice(0,3);
    res.render('home',{ recipes });
})

export default homecontroller;