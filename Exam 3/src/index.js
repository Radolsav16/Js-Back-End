import express from 'express';
import expressConfig from './configs/Express.js';
import configHandlebars from './configs/Hanldebars.js';
import router from './configs/Router.js';
import connectDatabse from './configs/Database.js';
import cookieParser from 'cookie-parser';

const PORT = 3000;
const uri = 'mongodb://localhost:27017/planetarium'

const app = express();

await connectDatabse(uri)
expressConfig(app)

configHandlebars(app);
app.use(router)





app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));