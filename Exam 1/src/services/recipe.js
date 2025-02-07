import Recipe from "../models/Recipe.js"

export const createRecipe = async (data) =>{
    await Recipe.create(data)
}

export const getAllRecipes = async () => {
    const recipes = await Recipe.find().lean();

    return recipes;
}


export const getSpecificRecipe = async (id) => {
    const recipe = await Recipe.findOne({ _id:id }).lean();

    return recipe;
}


export const editSpecificRecipe = async (id,data) => {
    await Recipe.findOneAndUpdate({ _id:id },data);
}

export const searchRecipes = async (search) => {
    return await Recipe.findOne({title:search});
}

export const recommend = async (recipeId,userId) => {
    const recipe = await Recipe.findOne({_id:recipeId});
    recipe.recommendList.push(userId);

    await recipe.save()
    
}

export const deleteRecipe = async (id) => {
    await Recipe.findByIdAndDelete({_id:id});
}