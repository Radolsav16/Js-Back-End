import { Router } from "express";
import authController from "../controllers/auth.js";
import devicesController from "../controllers/devices.js";
import { getFeatured } from "../service/device.js";


const router = Router();

router.use('/auth',authController)
router.use('/devices',devicesController);

router.get('/',async (req,res) =>{
    const data = await getFeatured();
    res.render('home',{devices:data})
})

router.get('/about',async (req,res) =>{
    res.render('about')
})






router.get('*',(req,res) =>{
    res.render('404')
})




export default router;