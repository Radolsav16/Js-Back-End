import { databaseApi } from "../service/dataApi.js"

export default async function Home(req,res){
    const data = await databaseApi.getMovies()
    console.log(data);
    res.render('home',{movies:data})
}    