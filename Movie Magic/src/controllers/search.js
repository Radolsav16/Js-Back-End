import { databaseApi } from "../service/dataApi.js"

export  async function search(req,res){
    const filter = req.query;
    const data = await databaseApi.getMovies(filter)
    res.render('search',{movies:data})
}

