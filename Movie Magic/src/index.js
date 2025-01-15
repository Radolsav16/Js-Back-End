import express from 'express';
import exphbs from 'express-handlebars'

const handlebars = exphbs.create({extname:".hbs"})


const app = express();

app.engine('.hbs',handlebars.engine)

app.set('view engine','.hbs');
app.set('views','./src/views')





app.get('/',(req,res)=>{
    res.render('home')
})



app.listen(3030,()=> console.log('App is running on port 3030'));