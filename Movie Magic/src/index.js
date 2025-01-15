import express from 'express';
import exphbs from 'express-handlebars'

const handlebars = exphbs.create({extname:".hbs"})


const app = express();

app.engine('.hbs',handlebars.engine)

app.set('view engine','.hbs');
app.set('views','./src/views')

app.use('/static',express.static('src/static'));





app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('*',(req,res)=>{
    res.render('error');
})


app.listen(3030,()=> console.log('App is running on port 3030'));