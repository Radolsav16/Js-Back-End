import Cast from "../../models/Cast.js";

function createCastGet(req,res){
    res.render('cast-create');
}

 async function createCastPost(req,res){
    const cast = new Cast(req.body);
    try{
    await  cast.save()
    res.redirect('/');
    }catch(err){
        console.log(err.message);
    }

    return cast;
}

export {
    createCastGet,
    createCastPost
}