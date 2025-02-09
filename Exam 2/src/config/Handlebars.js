import handlebars from 'express-handlebars'


export function handlebarsConfig(app){
    app.engine('hbs',handlebars.engine({
        extname:"hbs",
        encoding:"utf-8",
        runtimeOptions:true
    }))
    
    app.set('views','src/views')
    
    app.set('view engine','hbs');
}