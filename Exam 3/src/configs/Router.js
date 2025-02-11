import { Router } from "express";
import authController from "../controllers/auth.js";
import planetController from "../controllers/planets.js";


const router = Router();
router.use('/auth',authController)
router.use('/planet',planetController)

router.get('/',(req,res) => {
    res.render('home')
})

router.get('*',(req,res)=>{
    res.render('404');
})


export default router;