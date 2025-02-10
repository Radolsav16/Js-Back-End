import handlebars from 'express-handlebars'

export default function configHandlebars(app){
    app.engine('hbs',handlebars.engine({
        extname:'hbs',
        runtimeOptions:true
    }))
    
    
    app.set('view engine','hbs');
    app.set('views','src/views');
    
}