const { getAllData } = require("../service/movie");

module.exports = {
    homeController:async (req,res) => {
        const movies = await getAllData();
        res.render('home',{ movies });
    }
}