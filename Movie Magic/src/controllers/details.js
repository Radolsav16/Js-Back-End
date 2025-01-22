import { databaseApi } from "../service/dataApi.js";

export default async function details(req,res){
    const params = req.params;
    
    if(params.id !== 'alt="image"'){
        const id = Number(params.id);
        const movie = await databaseApi.getMovie(id);
        res.render('details',{data:movie});
    }
    
}