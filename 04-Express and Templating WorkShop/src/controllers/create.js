const { createFilmData } = require("../service/service");

module.exports = {
    createControllerGet:(req,res) => {
        res.render('create');
    },
    createControllerPost:async (req,res) => {
        await createFilmData()
        res.redirect('/');
    }
}