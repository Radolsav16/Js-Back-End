import { databaseApi } from "../service/dataApi.js";

export default async function details(req,res){
    const { id } = req.params;
    const movie = await databaseApi.getMovie(id);
  
    res.render('details',{data:movie});
    
}