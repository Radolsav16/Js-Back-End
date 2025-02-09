import express from 'express';
import { handlebarsConfig } from './config/Handlebars.js';
import router from './config/Router.js';
import { expressConfig } from './config/Express.js';
import { databaseConfig } from './config/Database.js';
import { authMiddleware } from './middlewares/auth.js';

const PORT = 3000;
const uri = 'mongodb://localhost:27017/tech-store';

const app = express();
await databaseConfig(uri)
handlebarsConfig(app);
expressConfig(app);
app.use(authMiddleware)
app.use(router);




app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));