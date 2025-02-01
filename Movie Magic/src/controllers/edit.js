import { databaseApi } from "../service/dataApi.js";
import { select } from "../../utils/selected.js";
async function getEdit(req,res) {
    const { id } = req.params;
    const movie = await databaseApi.getMovie(id);

    const options = select(movie.category);
    console.log(options)
    
    res.render('edit',{movie , options});
}

async function postEdit(req,res) {
    const { id } = req.params;
    try{
        await databaseApi.editMovie(id,req.body);
        res.redirect(`/movies/${id}/details`);
    }catch(err){
        res.redirect('/404');
    }
}


export {
    getEdit,
    postEdit
}