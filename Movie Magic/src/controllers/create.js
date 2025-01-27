import Movie from "../../models/Movie.js";
import { databaseApi } from "../service/dataApi.js";

export function create(req,res){
    res.render('create');
}

export async function createPost(req,res){
    console.log('Post request on create')

    const movie = new Movie(req.body);
    try{
    await  movie.save()
    res.redirect('/');
    }catch(err){
        console.log(err.message);
    }



    

    return movie;
}

