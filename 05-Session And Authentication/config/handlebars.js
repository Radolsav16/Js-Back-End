const handlebars = require('express-handlebars');


function configHandleBars(app){
    const hbs = handlebars.create({
        extname:'.hbs'
    })
    
    app.set('view engine','.hbs');
    app.engine('.hbs',hbs.engine);
}


module.exports = {
    configHandleBars
}