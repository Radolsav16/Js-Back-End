import express from 'express';
import router from './configs/Route.js';
import handlebarsConfig from './configs/Handlebars.js';
import expressConfig from './configs/Express.js';
import databaseConfig from './configs/Database.js';
import cookieParser from 'cookie-parser'
import {authMiddleware} from './middlewares/auth.js';

const PORT = 3000;
const uri = 'mongodb://localhost:27017/recipe-catalog';

await databaseConfig(uri)

const app = express();
expressConfig(app);
handlebarsConfig(app);
app.use(cookieParser())
app.use(authMiddleware)
app.use(router)


app.listen(PORT,()=>console.log('Server is running on port 3000'));