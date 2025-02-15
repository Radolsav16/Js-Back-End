import handebars from 'express-handlebars'

export default function HandlebarsConfig(app){
    app.engine('hbs',handebars.engine({
        extname:"hbs",
        runtimeOptions:{
            allowProtoMethodsByDefault:true
        },
        helpers:{
            setTitle(title){
                this.pageTitle = title;
                return '';
            }
        }
    }))
    
    app.set('view engine','hbs');
    app.set('views','src/views');
}