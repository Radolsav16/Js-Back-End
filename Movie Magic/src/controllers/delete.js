import { databaseApi } from "../service/dataApi.js";

export async function deleteMovie(req,res){
    const { id } = req.params;
    try{
        await databaseApi.deletemovie(id);
        res.redirect('/');
    }catch(err){
        res.redirect('/404')
    }
}