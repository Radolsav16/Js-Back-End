const { getCurrent } = require("../service/service")

module.exports = {
    detailsController:async (req,res) => {
        const { id } = req.params;
        const movie = await getCurrent(id);

        if(!movie){
            res.render('notFound')
            return;
        }

        movie.stars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie })
    }
}