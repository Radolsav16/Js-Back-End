import express from 'express';
import hbsConfig from '../configs/handebars.js';
import staticConfig from '../configs/static.js';
import router from '../configs/router.js';


const app = express();

hbsConfig(app);
staticConfig(app);

app.use(router);




app.listen(3030,()=> console.log('App is running on port 3030'));