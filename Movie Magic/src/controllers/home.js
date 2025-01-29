import { databaseApi } from "../service/dataApi.js"

export default async function Home(req,res){
    const data = await databaseApi.getMovies()
    res.render('home',{movies:data})
}    