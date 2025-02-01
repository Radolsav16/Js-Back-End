
import { databaseApi } from "../service/dataApi.js";
export default async function details(req,res){
    const { id } = req.params;
    const movie = await databaseApi.getMoviewithCast(id);
    const casts = movie.casts;
    const isUser = movie.owner.toString() === req.user.id;
    res.render('details',{data: movie, casts , isUser});
}