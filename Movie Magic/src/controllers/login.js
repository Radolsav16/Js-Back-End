function getLogin(req,res){
    res.render('login')
}

function postLogin(req,res){

    res.end();
}

export {
    getLogin,
    postLogin    
}