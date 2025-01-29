import { databaseApi } from "../service/dataApi.js";


async function attachCastGet (req,res){
    const { id } = req.params;
    const movie = await databaseApi.getMovie(id);
    const casts = await databaseApi.getCasts();
    res.render('cast-attach',{movie , casts});
}

async function attachCastPOST (req,res){
    const { id } = req.params;

   const castId = req.body.cast;

   try{
    databaseApi.atttachCast(id,castId);
    res.redirect(`/movies/${id}/details`);
   }catch(err){
    console.log(err.message);
   }

}


export  {
    attachCastGet,
    attachCastPOST
}