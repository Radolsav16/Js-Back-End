import express from 'express';
import ExpressConfig from './configs/Express.js';
import HandlebarsConfig from './configs/Handlebars.js';
import databaseConnect from './configs/Database.js';

const PORT = 3000;
const uri = 'mongodb://localhost:27017/skelet';



const app = express();

await databaseConnect(uri);
ExpressConfig(app)

HandlebarsConfig(app);



app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));

