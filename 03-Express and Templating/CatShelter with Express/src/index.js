const express = require('express');
const handlebars = require('express-handlebars');

handlebars.create({
    extname:".hbs",
})

app.set('view engine', '.hbs');
app.engine('.hbs',handlebars.engine);

const app = express();




app.listen(3000)