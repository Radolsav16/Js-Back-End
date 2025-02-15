import { Router } from "express";
import getErrorMessage from "../utils/error.js";
import { createPlanet, deleteOnePlanet, editPlanet, getAll, getOnePlanet } from "../service/planets.js";
import { selectHelper } from "../utils/select.js";

const planetController = Router();

const  typeArr = [
    {value:"Inner",label:'Inner'},
    {value:"Outer",label:'Outer'},
    {value:"Dwarf",label:'Dwarf'}
];

const  ringsArr = [
    {value:"Yes",label:'Yes'},
    {value:"No",label:'No'},
];


planetController.get('/create',(req,res) =>{
    res.render('planets/create')
})

planetController.post('/create',async (req,res) =>{
    const data = req.body;
    
    try{
        await createPlanet(data);
        res.redirect('/catalog')
    }catch(err){
        const typeSelection = selectHelper(data.type,typeArr);
        const rings = selectHelper(data.rings,ringsArr);
        res.render('planets/create',{error:getErrorMessage(err),data,typeSelection,rings});
    }

})

planetController.get('/catalog',async (req,res) =>{
    const planets = await getAll();
    res.render('planets/catalog',{ planets })
})



planetController.get('/details/:id',async (req,res) =>{
    const { id } = req.params;
    const planet = await getOnePlanet(id);
    res.render('planets/details',{ planet })
})


planetController.get('/delete/:id',async (req,res) =>{
    const { id } = req.params;
    try{
        await deleteOnePlanet(id);
        res.redirect('/planet/catalog')
    } catch (err){
        res.render('404',{error:getErrorMessage(err)});
    }
})


planetController.get('/edit/:id',async (req,res) =>{
    const { id } = req.params;
    const planet = await getOnePlanet(id);
    const typeSelection = selectHelper(planet.type,typeArr);
    const rings = selectHelper(planet.rings,ringsArr)
    res.render('planets/edit',{ planet , typeSelection , rings });
})

planetController.post('/edit/:id',async (req,res) =>{
    const data = req.body;
    const { id } = req.params;
    try{
        await editPlanet(id,data);
        res.redirect(`/planet/details/${id}`)
    } catch (err){
        res.render('/',{error:getErrorMessage(err)});
    }
})



export default planetController;