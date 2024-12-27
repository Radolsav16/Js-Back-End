const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const { User } = require('../models/User');
require('../models/User');

const port = 3000;
const app = express();

start();

async function start(){



const connectionStr = 'mongodb://localhost:27017/movie-magic';

await mongoose.connect(connectionStr);

console.log('Database Connected!')

const hbs = handlebars.create({
    extname:'.hbs'
})

app.set('view engine','.hbs');
app.engine('.hbs',hbs.engine);


app.use(express.urlencoded({extended:true}));

}


app.get('/',(req,res)=>{
    res.render('home');
})

app.post('/',async (req,res)=>{
    const credentials = req.body;

    const {username,password} = credentials;
    
    const user = new User({
        username,
        password
    });

    await user.save();

    console.log(user)

    res.redirect('/')
})


app.listen(port);