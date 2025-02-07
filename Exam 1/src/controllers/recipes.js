import { Router } from "express";
import { createRecipe, deleteRecipe, editSpecificRecipe, getAllRecipes, getSpecificRecipe, searchRecipes } from "../services/recipe.js";
import { isAuth } from "../middlewares/auth.js";

const recipeContoller = Router();

recipeContoller.get('/all-recipes',async (req,res) =>{
    const recipes = await getAllRecipes();
    res.render('recipe/catalog',{ recipes })
})

recipeContoller.get('/:id',async (req,res) => {
    const { id } = req.params;
    try{
        await deleteRecipe(id);
        res.redirect('/recipes/all-recipes');
    }catch(err){
        console.log(err.message)
    }
    
})

recipeContoller.get('/search',async (req,res) =>{
    // TODO : Make Search
    let recipes = [];
    let search;
    new URLSearchParams(req.url).forEach(searched =>{
        search = searched;
        return
     });

     

     if(!search){
        recipes = await getAllRecipes();
     }else{
        recipes = await searchRecipes(search);
     }

     console.log(recipes)
     
     res.render('search',{ recipes })


    
   
})

recipeContoller.get('/add-recipe',(req,res)=>{
    res.render('recipe/create')
})

recipeContoller.get('/edit/:id',async (req,res)=>{
    const { id } = req.params;
    const recipe = await getSpecificRecipe(id)
    res.render('recipe/edit',{ recipe })
})


recipeContoller.get('/details/:id',async (req,res) =>{
    const { id } = req.params;
    const recipe = await getSpecificRecipe(id);
    const recipeAuthor = recipe?.owner;
    const currentAuthor = req.user.id;
    const isAuthor =  recipeAuthor === currentAuthor;
    const isRecommended = recipe.recommendList.find(el => el.toString() === currentAuthor);

   

    
    
    
    
    const recomodations = recipe.recommendList.length;
   
    
    res.render('recipe/details',{recipe , isRecommended , isAuthor,recomodations})
})

recipeContoller.post('/edit/:id',async (req,res)=>{
    const { id } = req.params; 
    const data = req.body;
    try {
        await editSpecificRecipe(id,data);
        res.redirect(`/recipes/details/${id}`);
    } catch (error) {
        console.log(error.message);
    }
    const recipe = await getSpecificRecipe(id)
    res.render('recipe/edit',{ recipe })
})

recipeContoller.post('/add-recipe',isAuth,async(req,res) =>{
    try {
        await createRecipe(req.body);
        res.redirect('/');
    } catch (error) {
        console.log(error.message)
    }
    
})





export default recipeContoller;