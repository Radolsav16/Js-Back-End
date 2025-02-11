import { Router } from "express";
import getErrorMessage from "../utils/error.js";
import { createPlanet } from "../service/planets.js";

const planetController = Router();


planetController.get('/create',(req,res) =>{
    res.render('planets/create')
})

planetController.post('/create',async (req,res) =>{
    const data = req.body;

    try{
        await createPlanet(data);
        res.redirect('/')
    }catch(err){
        const error = getErrorMessage(err);
        console.log(error);
        res.render('planets/create',{error:getErrorMessage(err)});
    }

})




export default planetController;