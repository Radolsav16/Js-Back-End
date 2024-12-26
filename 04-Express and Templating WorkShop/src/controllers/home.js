const { getAllData } = require("../service/service");

module.exports = {
    homeController:async (req,res) => {
        const movies = await getAllData();
        res.render('home',{ movies });
    }
}