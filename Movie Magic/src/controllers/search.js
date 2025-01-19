import { databaseApi } from "../service/dataApi.js"

export  function search(req,res){
    const movies = databaseApi.getMovies().reverse().slice(3);

    res.render('search',{data:movies})
}

export  function searchPost(req,res){
    console.log('Post')
}