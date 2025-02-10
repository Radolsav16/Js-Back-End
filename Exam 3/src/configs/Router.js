import { Router } from "express";
import authController from "../controllers/auth.js";


const router = Router();
router.use('/auth',authController)

router.get('/',(req,res) => {
    res.render('home')
})



router.get('*',(req,res)=>{
    res.render('404');
})


export default router;