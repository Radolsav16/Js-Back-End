const { Router } = require('express');
const { User } = require('../models/User');
const {body , validationResult} = require('express-validator')

const router = Router();

router.get('/',(req,res)=>{
    res.render('home');
})

router.post('/',
    body('username').isEmail().withMessage('Invalid Email!'),
    body('password').isLength({min:5}).withMessage('Should have minimum 5 symbols')
    ,async (req,res)=>{

       const { errors } = validationResult(req);

       if(!errors.length){
        const user = new User({
                username:req.body.username,
                password:req.body.password
        })

          await user.save();

          res.redirect('/');
       }else{
        res.render('home',{data:{username:req.body.username , password:req.body.password},error:validationResult(req)});
       }
})

module.exports = {
    router
}