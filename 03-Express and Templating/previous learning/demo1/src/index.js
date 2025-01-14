const express = require('express');
const handlebars = require('express-handlebars');
const data = require('../data.json');
const app = express();

const hbs = handlebars.create({
    extname:'.hbs'
})


app.set('view engine','.hbs');

app.engine('.hbs',hbs.engine)

const port = 3000;

app.get('/',(req,res) => {

   res.render('home',{contacts:data});
})

app.listen(port);