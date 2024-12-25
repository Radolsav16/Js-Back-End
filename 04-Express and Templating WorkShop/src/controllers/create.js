const { createFilmData } = require("../service/movie");

module.exports = {
    createControllerGet:(req,res) => {
        res.render('create');
    },
    createControllerPost:async (req,res) => {
        await createFilmData()
        res.redirect('/');
    }
}