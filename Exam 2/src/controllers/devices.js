import { Router } from "express";
import { createDevice, deleteDevice, editDevice, getAllDevices, getSpecificDevice } from "../service/device.js";
import { getMessageError } from "../utils/errors.js";
import { isAuth } from "../middlewares/auth.js";

const devicesController = Router();

devicesController.get('/catalog',async (req,res)=>{
    const devices = await getAllDevices()
    res.render('devices/catalog',{ devices })
})

devicesController.get('/:id/details',async (req,res)=>{
    const { id } = req.params
    const device = await getSpecificDevice(id);
    res.render('devices/details',{ device })
})
devicesController.get('/:id',isAuth,async (req,res)=>{
    const { id } = req.params
    await deleteDevice(id);
    res.redirect('/devices/catalog');
    
})

devicesController.get('/edit/:id',isAuth,async (req,res)=>{
    const { id } = req.params
    const device = await getSpecificDevice(id);
    res.render('devices/edit',{ device })
})


devicesController.post('/edit/:id',async (req,res)=>{   
    const { id } = req.params
    try {
        await editDevice(id,req.body)
        res.redirect(`/devices/${id}/details`);
    } catch (err) {
        res.render('devices/edit',{error:getMessageError(err)})
    }
    
})




devicesController.get('/create-offer',isAuth,(req,res)=>{
    res.render('devices/create')
})

devicesController.post('/create-offer',async (req,res) => {
    const data = req.body;
    req.body.price = Number(req.body.price);

    try {
        await createDevice(data);
        res.redirect('/catalog')
    } catch (err) {
        res.render('devices/create',{error:getMessageError(err)})
    }
})

export default devicesController;